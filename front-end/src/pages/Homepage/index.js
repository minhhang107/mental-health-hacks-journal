import { ReactComponent as BellIcon } from "assets/svg/bell-icon.svg";
import { ReactComponent as EditIcon } from "assets/svg/edit-icon.svg";
import Layout from "components/Layout";
import MoodPicker from "components/MoodPicker";
import * as Typography from "components/ui/Typography";
import * as Wrapper from "components/ui/Wrapper";
import React from "react";
import { Helmet } from "react-helmet";
import * as Styled from "./Homepage.styled";
import JournalPosts from "components/JournalPosts";
import { useLocation } from "react-router-dom";
const Homepage = (props) => {
  const location = useLocation();

  return (
    <Layout>
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <Wrapper.Page>
        <Styled.Header>
          <div>
            <p>Welcome to</p>
            <Typography.PageTitle>Zaved’s Journal</Typography.PageTitle>
          </div>

          <BellIcon />
        </Styled.Header>

        <Styled.SectionsWrapper>
          <section>
            <Styled.SectionBody>
              <Styled.EditButton>
                <EditIcon />
                How are you feeling today?
              </Styled.EditButton>

              <MoodPicker />
            </Styled.SectionBody>
          </section>

          <section>
            <Styled.SectionTitle>Your Activity</Styled.SectionTitle>
          </section>
        </Styled.SectionsWrapper>

        {/* <JournalPosts token={location.state.tokenValue} /> */}
      </Wrapper.Page>
    </Layout>
  );
};

export default Homepage;
