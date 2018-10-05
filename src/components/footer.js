import React from "react"

import footerStyles from "./footer.module.css"

export default props => (
    <div className={footerStyles.footer}>
        <div className={footerStyles.map}>
            <div className={footerStyles.mapbox}>
                <h4>Contact Us</h4>
                <div className={footerStyles.contact}>
                    <span>
                        Apsis Labs
                        PO Box 85866
                        Seattle, WA 98145
                    </span>
                    <span>
                        206-555-5555
                        contact@apsis.io
                    </span>
                </div>
            </div>
        </div>
        <div className={footerStyles.copyright}>
            © 2018 apsis labs | development chop shop
        </div>
    </div>
)