import { ReactComponent as SettingIcon } from "assets/svg/setting-icon.svg";
import Layout from "components/Layout";
import MoodChart from "components/MoodChart";
import * as Typography from "components/ui/Typography";
import * as Wrapper from "components/ui/Wrapper";
import React from "react";
import { Helmet } from "react-helmet";
import ProfilePicture from "../../assets/profile-picture.png";
import * as Styled from "./Dashboard.styled";

const Homepage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Wrapper.Page>
        <Styled.Header>
          <Typography.PageTitle>DashBoard</Typography.PageTitle>
        </Styled.Header>

        <Styled.SectionsWrapper>
          <section>
            <img src={ProfilePicture} alt="profile" />
          </section>
          <section>
            <Styled.FullName>Zaved Nair</Styled.FullName>
            <Styled.Email>junbinjaved@gmail.com</Styled.Email>
          </section>
        </Styled.SectionsWrapper>

        <Styled.SectionsWrapper style={{ flexDirection: "column" }}>
          <section>
            <Styled.SectionTitle>Your Mood Chart</Styled.SectionTitle>
          </section>

          <section>
            <MoodChart />
          </section>
        </Styled.SectionsWrapper>

        <Styled.SettingWrapper>
          <section>
            <Styled.SettingHeader>
              <SettingIcon />
              Account Settings
            </Styled.SettingHeader>
          </section>
          <section>
            <Styled.SettingBody>
              <Styled.SettingButton>Account Details</Styled.SettingButton>
              <Styled.SettingButton>Log Out</Styled.SettingButton>
            </Styled.SettingBody>
          </section>
        </Styled.SettingWrapper>
      </Wrapper.Page>
    </Layout>
  );
};

export default Homepage;
