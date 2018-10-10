import React from "react"
import howweworkStyles from "../styles/components/howwework.module.scss"

export default props => (
    <div className={howweworkStyles.container}>  
        <div className={howweworkStyles.content}>
            <h2>How we work</h2>

            <div className={howweworkStyles.contentHeader}>
                <i className="fas fa-rocket"/>
                <h4>New Projects</h4>
            </div>
            <div className={howweworkStyles.contentParagraph}>
                We love to work on new projects, and it’s a place where our experience as entrepreneurs really shines. We’re experienced and prepared to help at every step of a product’s lifecycle: from standing at the whiteboard, to defining an initial MVP, to launching a public beta — we’ve done it all. Because we work with a broad array of technologies, we’re always ready to offer insight into new trends, while ensuring your product will be built to last.
                <p/>
                If you’re a startup looking to bring a proof of concept to find your first round of funding, or an established business looking to enter a new market, our passion for product development will ensure you come away with a functional application that does what it needs to and nothing more.
            </div>
            <div className={howweworkStyles.contentHeader}>
                <i className="far fa-hourglass"></i>
                <h4>Legacy Code</h4>
            </div >
            <div className={howweworkStyles.contentParagraph}>
                For most businesses, there’s no escaping legacy code. Whether it’s a solid application that’s been running your accounting team for years, or your core product with weekly updates, someone’s got to maintain it.
                <p/>
                The bad news? This can mean digging through years of documentation, hacky workarounds, and making sure you “don’t touch the javas” because Dave’s machine is the only place they compile. The good news? We love that stuff.
                <p/>
                If you’re looking to bring an old code base up to date, or simply to support legacy functionality, our team is here to help. We’ll work with you to understand why things work the way they do, so changes don’t bring your business to a screeching halt, and as we learn your application’s quirks we can offer advice on best practices and opportunities for improvement.
            </div>

            <div className={howweworkStyles.contentHeader}>
                <i className="fas fa-magic"></i>
                <h4>Augmented Teams</h4>
            </div>
            <div className={howweworkStyles.contentParagraph}>
                Sometimes you need a little extra help, but it’s hard to find a well-defined project or feature that you can hand off. That’s okay: we’re experts at augmenting existing engineering orgs. We specialize in slotting into your development workflow – either as part of your existing structure, or even bringing structure where it’s sorely needed.
                <p/>
                We can lend expertise in a specific new technology, help your team transition to the cloud, or just close some tickets that have been on your backlog for 18 months. If you need a helping hand — even for a short while — we’re here to provide leadership and expertise to get the job done.       
            </div>
        </div>
    </div>
)