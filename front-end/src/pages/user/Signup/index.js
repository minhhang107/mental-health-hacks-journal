import { ReactComponent as PasswordIcon } from "assets/svg/password.svg";
import { ReactComponent as ProfileIcon } from "assets/svg/profile.svg";
import { ReactComponent as RegisterHero } from "assets/svg/register-hero.svg";
import Input from "components/Input/index";
import Link from "components/ui/Link";
import axios from "axios";
// import Wrapper from "components/ui/Wrapper";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Styled from "../User.styled";

const UserSignup = () => {
  return (
    <Styled.Wrapper>
      <Helmet>
        <title>Signup</title>
      </Helmet>

      <header>
        <RegisterHero />

        <Styled.PageTitle>Register</Styled.PageTitle>

        <p>Fill up your credentials below</p>
      </header>

      <Styled.Section>
        <SignupForm />

        <Styled.Footer>
          Already have an account? <Link to="/user/login">Log In</Link>
        </Styled.Footer>
      </Styled.Section>
    </Styled.Wrapper>
  );
};

const SignupForm = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    axios
      .post(
        "https://us-central1-mental-health-1bd2d.cloudfunctions.net/api/users/signup",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }
      )
      .then((res) => {
        console.log(res.data.message);
        history.push("/");
      })
      .catch((err) => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        setError(err.response.data.error);
        console.log(err.response.data.error);
      });
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Container>
        <Input
          required
          autocomplete="firstName"
          name="firstName"
          placeholder="first name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          required
          autocomplete="lastName"
          name="lastName"
          placeholder="last name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Styled.Container>

      <Input
        required
        autocomplete="email"
        name="email"
        icon={<ProfileIcon />}
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        required
        name="password"
        autocomplete="password"
        type="password"
        icon={<PasswordIcon />}
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      />

      {error ? <Styled.Error>{error}</Styled.Error> : null}
      <Styled.Button contained>Sign Up</Styled.Button>
    </Styled.Form>
  );
};

export default UserSignup;
