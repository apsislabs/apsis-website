import React from "react";
import quoteblockStyles from "../styles/components/quoteblock.module.scss";
// import { Carousel } from 'react-bootstrap';

class QuoteBlock extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        // const { index, direction } = this.state;
        return (
            <div className={quoteblockStyles.testimonial}>
                <h2>What Our Clients Say</h2>
                <div>
                    <i className="fas fa-quote-left fa-2x"/>
                </div>
                <div className={quoteblockStyles.testimonial__container}>
                    <div>
                        <i className="fas fa-angle-left fa-3x"/>
                    </div>
                    <div className={quoteblockStyles.testimonial__quote}>
                        <div>
                            Apsis has been exceptional to work with. More than just a vendor, Apsis is a partner whom we trust to interact directly with clients. Their work has consistently exceeded expectations, delivered on-time and on-budget. Developers who can thoughtfully problem solve and think critically are surprisingly rare and I look forward to working with them more in the future.                        </div>
                        <div>
                            we are great
                        </div>
                        <div>
                            real good
                        </div>
                    </div>
                    <div>
                        <i className="fas fa-angle-right fa-3x"/>
                    </div>
                </div>
                <cite>
                    <span className={quoteblockStyles.testimonial__name}>Jo Fobo</span>
                    <span className={quoteblockStyles.testimonial__company}>CEO @ Frogs Inc</span>
                </cite>
            </div>
        )
    }
}


export default QuoteBlock