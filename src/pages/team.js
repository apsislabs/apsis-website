import React from "react"
import Layout from "../components/layout"
import HireUsFooter from "../components/Footer/hireusfooter"
import Header from "../components/header";
import MapBlock from "../components/mapblock";
import TeamGrid from "../components/TeamGrid/teamgrid";
import Navbar from "../components/navbar"
import Helmet from "react-helmet";
import buttonStyles from "../styles/components/button.module.scss"
import Button from "gatsby-link"
import ContentBlock from "../components/contentblock";

const blueWideButtonClasses = `${buttonStyles.button__blue} ${buttonStyles.button__wide}`;

class TeamPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: 47.659298,
            longitude: -122.317940,
            title: "Our Team | Apsis Labs",
            cityName: "seattle"
        }
      }
    render () {
        return (
            <Layout>
                <Helmet title={this.state.title} />
                <Navbar
                    blue={true}
                />
                <Header
                    title="A developer in every timezone."
                >
                Why does that matter? We know when it comes to finding the right team to build your next project, communication is king. As a remote company, we’ve always placed an emphasis on clear and concise communication, and developing strong teams over long distances.
                <p/>
                This means less time spent sending emails asking for clarification, and fewer headaches for you."
                </Header>
                <TeamGrid/>
                <ContentBlock
                    vertical={false}
                    title="Knowledge and Experience"
                >
                    We hire senior developers only. Each of our team members comes armed with experience in numerous technology platforms and industries. When you pay for our service, you are paying for years of experience and knowledge. <p/>
                    <span>
                        <Button className={blueWideButtonClasses} to="/portfolio">
                            See Our Work
                        </Button>
                        <Button className={blueWideButtonClasses} to="/hire" >
                            Hire Us
                        </Button>
                    </span>
                </ContentBlock>
                <MapBlock
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    cityName={this.state.cityName}/>
                <HireUsFooter />
            </Layout>
        )
    }
}

export default TeamPage

