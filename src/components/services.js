import React from "react"
import serviceStyles from "./service.module.css"
import Service from "./service"

export default props => (
    <div className={serviceStyles.container}>
        <Service
            icon="far fa-compass"
            title="Web Development"
        >
            <ul>
                <li>Ruby on Rails</li>
                <li>React</li>
                <li>WordPress</li>
            </ul>
        </Service>
        <Service
            icon="fas fa-mobile-alt"
            title="Mobile Development"
        >
            <ul>
                <li>React Native</li>
                <li>iOS & Android</li>
                <li>Unity</li>
            </ul>
        </Service>
        <Service
            icon="fas fa-sitemap"
            title="Operations & Strategy"
        >
            <ul>
                <li>Project Management</li>
                <li>Sysops & Consulting</li>
                <li>HIPAA & Security</li>
            </ul>
        </Service>
    </div>
)