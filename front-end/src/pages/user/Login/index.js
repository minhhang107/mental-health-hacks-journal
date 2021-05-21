import { ReactComponent as LoginHero } from "assets/svg/login-hero.svg";
import { ReactComponent as PasswordIcon } from "assets/svg/password.svg";
import { ReactComponent as ProfileIcon } from "assets/svg/profile.svg";
import Input from "components/Input/index";
import Link from "components/ui/Link";
import Wrapper from "components/ui/Wrapper";
import React from "react";
import { Helmet } from "react-helmet";
import * as Styled from "./Login.styled";

const UserLogin = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <header>
        <LoginHero />

        <Styled.PageTitle>Welcome Back</Styled.PageTitle>

        <p>Glad you&apos;re back with us</p>
      </header>

      <Styled.Section>
        <Input icon={<ProfileIcon />} placeholder="email" />
        <Input icon={<PasswordIcon />} placeholder="password" />
        <Styled.Button contained>Sign In</Styled.Button>

        <Styled.Footer>
          New here? <Link to="/user/signup">Sign up</Link>
        </Styled.Footer>
      </Styled.Section>
    </Wrapper>
  );
};

export default UserLogin;
