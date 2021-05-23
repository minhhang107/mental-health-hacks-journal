import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";
import axios from "axios";
import Layout from "components/Layout";
import Button from "components/ui/Button";
import * as Typography from "components/ui/Typography";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import * as Styled from "./Add/Add.styled";
import { useHistory } from "react-router-dom";

const EntryPage = () => {
  const history = useHistory();

  return (
    <Layout>
      <Styled.PageWrapper
        style={{ backgroundColor: "#fffaf5", height: "auto" }}
      >
        <Styled.Header>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button onClick={() => history.push("/user/dashboard")}>
              <ArrowRight />
            </Button>
          </div>
          <Typography.Title style={{ marginLeft: "1rem" }}>
            {dayjs().format("MM.DD.YYYY")}
          </Typography.Title>
        </Styled.Header>

        <Typography.SectionTitleUnderline style={{ marginLeft: "5%" }}>
          Catchy Title Here
        </Typography.SectionTitleUnderline>
        <Styled.ContentWrapper>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          aenean sed adipiscing diam donec. At erat pellentesque adipiscing
          commodo elit at imperdiet dui accumsan. Quis lectus nulla at volutpat
          diam ut. Integer malesuada nunc vel risus commodo viverra maecenas.
          Dolor morbi non arcu risus quis varius quam quisque id. Fermentum odio
          eu feugiat pretium nibh ipsum consequat. Fringilla phasellus faucibus
          scelerisque eleifend donec pretium vulputate sapien nec. Lectus nulla
          at volutpat diam ut venenatis. Amet consectetur adipiscing elit ut
          aliquam purus. Id diam vel quam elementum. Blandit libero volutpat sed
          cras ornare arcu. Nunc sed augue lacus viverra vitae congue. Tortor at
          auctor urna nunc. Semper eget duis at tellus at urna condimentum.
          Interdum varius sit amet mattis vulputate enim nulla. Aliquam sem et
          tortor consequat id porta nibh venenatis. Vitae aliquet nec
          ullamcorper sit amet. Eget est lorem ipsum dolor. Semper eget duis at
          tellus at. Aenean pharetra magna ac placerat vestibulum. Pretium
          aenean pharetra magna ac placerat vestibulum lectus.
        </Styled.ContentWrapper>
      </Styled.PageWrapper>
    </Layout>
  );
};

export default EntryPage;
