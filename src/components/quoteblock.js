import React from "react";
import quoteblockStyles from "../styles/components/quoteblock.module.scss";
import Slider from "react-slick";
import cn from "classnames";

const Arrow = ({ dir, style, onClick }) => {
  const arrowClasses = cn(
    "fas",
    `fa-angle-${dir}`,
    "fa-fw",
    "fa-2x",
    quoteblockStyles.arrow
  );

  return <div className={arrowClasses} style={style} onClick={onClick} />;
};

const NextArrow = props => <Arrow dir="right" {...props} />;
const PrevArrow = props => <Arrow dir="left" {...props} />;

const Quote = ({ quote, ...props }) => {
  return (
    <div {...props}>
      <blockquote className={quoteblockStyles.testimonial__quote}>
        {quote.text}
      </blockquote>

      <cite>
        <span className={quoteblockStyles.testimonial__attribution}>
          {quote.attribution}
        </span>

        <span className={quoteblockStyles.testimonial__title}>
          {quote.title} @ {quote.company}
        </span>
      </cite>
    </div>
  );
};

class QuoteBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [
        {
          text:
            "Apsis has been exceptional to work with. More than just a vendor, Apsis is a partner whom we trust to interact directly with clients. Their work has consistently exceeded expectations, delivered on-time and on-budget. Developers who can thoughtfully problem solve and think critically are surprisingly rare and I look forward to working with them more in the future.",
          attribution: "Chris Goddard",
          title: "Vice President of Analytics",
          company: "Weber Shandwick"
        },
        {
          text:
            "Apsis Labs is an innovative and professional software development team that has provided Natera with valuable development services. The team has been instrumental in developing our customer facing and back office solutions. We are very happy with our decision to use Apsis, as their expertise has translated into back office cost savings and a better customer experience! Apsis is a great team to work with!",
          attribution: "Susan Lin",
          title: "Former Senior Manager, Enterprise Applications",
          company: "Natera, Inc."
        },
        {
          text:
            "We have worked with Apsis on many projects ranging from website development, PHP application development, and Windows app development. Apsis has always delivered quality work on time, which is why we keep coming back to them for additional projects.",
          attribution: "Omer Saeed",
          title: "VP of Products, Marketing Automation",
          company: "CallidusCloud"
        }
      ]
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 375,
          settings: {
            arrows: false,
            swipe: true,
            swipeToSlide: true,
            adaptiveHeight: true,
            dots: true
          }
        }
      ]
    };

    return (
      <div className={quoteblockStyles.quoteblock}>
        <h3 className={quoteblockStyles.quoteblock__title}>
          What Our Partners Say
        </h3>

        <div className={quoteblockStyles.quoteblock__container}>
          <Slider {...settings}>
            {this.state.quotes.map(function(quote, i) {
              return <Quote key={i} quote={quote} />;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default QuoteBlock;
