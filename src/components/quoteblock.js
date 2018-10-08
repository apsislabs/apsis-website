import React from "react"
import quoteblockStyles from "../styles/components/quoteblock.module.scss"

export default props => (
    <div className={quoteblockStyles.testimonial}>  
        <h2>What People Say</h2>
        <blockquote className={quoteblockStyles.testimonial__quote}>
            Apsis has been exceptional to work with. More than just a vendor, Apsis is a partner whom we trust to interact directly with clients. Their work has consistently exceeded expectations, delivered on-time and on-budget. Developers who can thoughtfully problem solve and think critically are surprisingly rare and I look forward to working with them more in the future.
        </blockquote>
        <cite>
            <span className={quoteblockStyles.testimonial__name}>Jo Fobo</span>
            <span className={quoteblockStyles.testimonial__company}>CEO @ Frogs Inc</span>
        </cite>
    </div>
)