import React from "react";
import Layout from "../components/layout";
import HireUsFooter from "../components/Footer/hireusfooter";
import Header from "../components/header";
import MapBlock from "../components/mapblock";
import TeamGrid from "../components/TeamGrid/teamgrid";
import Navigation from "../components/navigation";
import Helmet from "react-helmet";
import styles from "../styles/components/shared.module.scss";
import buttonStyles from "../styles/components/button.module.scss";
import Button from "gatsby-link";
import ContentBlock from "../components/contentblock";
import { cl } from "../utils/helpers";

const blueWideButtonClasses = `${buttonStyles.button__blue} ${
  buttonStyles.button__wide
}`;

class TeamPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 47.659298,
      longitude: -122.31794,
      title: "Our Team | Apsis Labs",
      cityName: "seattle"
    };
  }
  render() {
    return (
      <Layout>
        <Helmet title={this.state.title} />
        <Navigation blue={true} />
        <Header title="A developer in every timezone.">
          <p>
            Why does that matter? We know when it comes to finding the right
            team to build your next project, communication is king. As a remote
            company, we’ve always placed an emphasis on clear and concise
            communication, and developing strong teams over long distances.
          </p>
          <p>
            This means less time spent sending emails asking for clarification,
            and fewer headaches for you.
          </p>
        </Header>
        <TeamGrid />
        <div className={cl(styles.paddingBottom, styles.sidesSmallPadding)}>
          <ContentBlock vertical={true} title="Knowledge and Experience">
            <p>
              We hire senior developers only. Each of our team members comes
              armed with experience in numerous technology platforms and
              industries. When you pay for our service, you are paying for years
              of experience and knowledge.
            </p>
            <div className={styles.centeredRow}>
              <Button className={blueWideButtonClasses} to="/portfolio">
                See Our Work
              </Button>
              <Button className={blueWideButtonClasses} to="/contact">
                Hire Us
              </Button>
            </div>
          </ContentBlock>
        </div>
        <MapBlock
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          cityName={this.state.cityName}
        />
        <HireUsFooter />
      </Layout>
    );
  }
}

export default TeamPage;
