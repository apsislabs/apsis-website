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
    quoteblockStyles.arrow,
    {
      [quoteblockStyles.arrowLeft]: dir === "left",
      [quoteblockStyles.arrowRight]: dir === "right"
    }
  );

  return <div className={arrowClasses} style={style} onClick={onClick} />;
};

const NextArrow = props => <Arrow dir="right" {...props} />;
const PrevArrow = props => <Arrow dir="left" {...props} />;

const Quote = ({ quote, ...props }) => {
  return (
    <div {...props}>
      <blockquote className={quoteblockStyles.quoteblock__quote}>
        {quote.text}
      </blockquote>

      <cite>
        <span className={quoteblockStyles.quoteblock__attribution}>
          {quote.attribution}
        </span>

        <span className={quoteblockStyles.quoteblock__title}>
          {quote.title} @ {quote.company}
        </span>
      </cite>
    </div>
  );
};

class QuoteBlock extends React.Component {
  render() {
    const { quotes } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    return (
      <div className={quoteblockStyles.quoteblock}>
        <h3 className={quoteblockStyles.quoteblock__header}>
          What Our Partners Say
        </h3>

        <div className={quoteblockStyles.quoteblock__container}>
          <Slider {...settings}>
            {quotes.map(function(quote, i) {
              return <Quote key={i} quote={quote} />;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default QuoteBlock;
