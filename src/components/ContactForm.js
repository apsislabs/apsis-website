import cn from "classnames";
import { ErrorMessage, Field, Formik } from "formik";
import React, { Component } from "react";
import * as Yup from "yup";
import { post } from "../utils/api";
import buttonStyles from "../styles/components/button.module.scss";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  message: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const FORM_URL =
  "https://a17eeo6v24.execute-api.us-west-2.amazonaws.com/contactformapi";
const initialValues = { name: "", message: "", email: "" };

const FormGroup = ({
  className,
  children,
  name,
  errorClass,
  errors,
  touched,
  ...rest
}) => {
  const classes = cn(className, "form__group", {
    [errorClass]: !!errors[name] && !!touched[name]
  });

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(values, { setSubmitting, resetForm }) {
    this.setState({ success: false });

    try {
      console.log(values);
      await post(FORM_URL, values);
      this.setState({ success: true });
      resetForm(initialValues);
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  }

  render() {
    return (
      <div className="form">
        {this.state.success && "FUCK YEAH"}

        <Formik
          validateOnChange={false}
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          validationSchema={ContactSchema}
        >
          {({ errors, touched, handleSubmit, isSubmitting }) => (
            <form noValidate onSubmit={handleSubmit}>
              <FormGroup
                touched={touched}
                errors={errors}
                name="email"
                errorClass="form__group--error"
              >
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form__input"
                />
                <div className="form__help">
                  <ErrorMessage name="email" />
                </div>
              </FormGroup>

              <FormGroup
                touched={touched}
                errors={errors}
                name="name"
                errorClass="form__group--error"
              >
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form__input"
                />
                <div className="form__help">
                  <ErrorMessage name="name" />
                </div>
              </FormGroup>

              <FormGroup
                touched={touched}
                errors={errors}
                name="message"
                errorClass="form__group--error"
              >
                <Field
                  component="textarea"
                  name="message"
                  placeholder="Your Message"
                  className="form__input"
                />
                <div className="form__help">
                  <ErrorMessage name="message" />
                </div>
              </FormGroup>

              <button
                className={buttonStyles.button}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Say hi"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
