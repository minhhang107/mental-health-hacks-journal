import { ReactComponent as BellIcon } from "assets/svg/bell-icon.svg";
import { ReactComponent as EditIcon } from "assets/svg/edit-icon.svg";
import Layout from "components/Layout";
import MoodChart from "components/MoodChart";
import * as Typography from "components/ui/Typography";
import * as Wrapper from "components/ui/Wrapper";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import * as Styled from "./Homepage.styled";

const Homepage = () => {
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
              <Link to="/entry/add">
                <Styled.EditButton>
                  <EditIcon />
                  How are you feeling today?
                </Styled.EditButton>
              </Link>
            </Styled.SectionBody>
          </section>

          <section>
            <Typography.SectionTitle>Your Activity</Typography.SectionTitle>
          </section>
        </Styled.SectionsWrapper>

        <MoodChart />
      </Wrapper.Page>
    </Layout>
  );
};

export default Homepage;
