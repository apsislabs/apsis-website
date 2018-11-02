import React from "react"
import serviceStyles from "../../styles/components/servicelist.module.scss"
import Service from "./serviceitem"

export default () => (
    <div className={serviceStyles.service}>
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