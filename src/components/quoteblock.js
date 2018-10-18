import React from "react";
import quoteblockStyles from "../styles/components/quoteblock.module.scss";

class QuoteBlock extends React.Component {
    constructor(props) {
        super(props);

        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0,
            quotes: [
                {
                    text: "Apsis has been exceptional to work with. More than just a vendor, Apsis is a partner whom we trust to interact directly with clients. Their work has consistently exceeded expectations, delivered on-time and on-budget. Developers who can thoughtfully problem solve and think critically are surprisingly rare and I look forward to working with them more in the future.",
                    attribution: "Chris Goddard",
                    title: "Vice President of Analytics",
                    company: "Weber Shandwick"
                },
                {
                    text: "Apsis Labs is an innovative and professional software development team that has provided Natera with valuable development services. The team has been instrumental in developing our customer facing and back office solutions. We are very happy with our decision to use Apsis, as their expertise has translated into back office cost savings and a better customer experience! Apsis is a great team to work with!",
                    attribution: "Susan Lin",
                    title: "Former Senior Manager, Enterprise Applications",
                    company: "Natera, Inc."
                },
                {
                    text: "We have worked with Apsis on many projects ranging from website development, PHP application development, and Windows app development. Apsis has always delivered quality work on time, which is why we keep coming back to them for additional projects.",
                    attribution: "Omer Saeed",
                    title: "VP of Products, Marketing Automation",
                    company: "CallidusCloud"
                }
            ],
            activeQuote: {
                text: "Apsis has been exceptional to work with. More than just a vendor, Apsis is a partner whom we trust to interact directly with clients. Their work has consistently exceeded expectations, delivered on-time and on-budget. Developers who can thoughtfully problem solve and think critically are surprisingly rare and I look forward to working with them more in the future.",
                attribution: "Chris Goddard",
                title: "Vice President of Analytics",
                company: "Weber Shandwick"
            },
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.goToNextSlide(), 10000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    goToPrevSlide() {
        let index = this.state.activeIndex;
        let quotes = this.state.quotes;
        let slidesLength = quotes.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index,
            activeQuote: this.state.quotes[this.state.activeIndex]
        });
    }

    goToNextSlide() {
        let index = this.state.activeIndex;
        let quotes = this.state.quotes;
        let slidesLength = quotes.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index,
            activeQuote: this.state.quotes[this.state.activeIndex]
        });
    }

    render() {
        return (
            <div className={quoteblockStyles.testimonial}>
                <h2>What Our Clients Say</h2>
                <div>
                    <i className="fas fa-quote-left fa-2x" onClick={() => this.goToPrevSlide()}/>
                </div>
                <div className={quoteblockStyles.testimonial__container}>
                    <div>
                        <i className="fas fa-angle-left fa-3x"/>
                    </div>
                        <div>
                            <div className={quoteblockStyles.testimonial__quote}>
                                {this.state.activeQuote.text}
                            </div>
                        </div>
                    <div>
                        <i className="fas fa-angle-right fa-3x" onClick={() => this.goToNextSlide()}/>
                    </div>
                </div>
                <cite>
                    <span className={quoteblockStyles.testimonial__attribution}>{this.state.activeQuote.attribution}</span>
                    <span className={quoteblockStyles.testimonial__title}>{this.state.activeQuote.title} @ {this.state.activeQuote.company}</span>
                </cite>
            </div>
        )
    }
}


export default QuoteBlock