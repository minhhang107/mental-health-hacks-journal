import React, { useState, useEffect } from "react";
import * as Styled from "./JournalPosts.styled";
import axios from "axios";

const JournalPosts = (token) => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-mental-health-1bd2d.cloudfunctions.net/api/journals/",
        { headers: { Authorization: `Bearer ${token.token}` } }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.length !== 0) setJournals(res.data);
        else setJournals([]);
        // setPosts(res);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  }, []);

  // journals.map((journal) => {
  //   var dateCreated = new Date(journal.dateCreated);
  //   return (
  //     <div>
  //       <Styled.SectionWrapper>
  //         <section>
  //           <Styled.DateWrapper>{dateCreated.getDate()}</Styled.DateWrapper>
  //         </section>
  //         <section>
  //           <Styled.ContentWrapper>
  //             {journal.content.slice(0, 49)} ...
  //           </Styled.ContentWrapper>
  //         </section>
  //       </Styled.SectionWrapper>
  //     </div>
  //   );
  // });

  return (
    <div>
      <Styled.SectionWrapper>
        <section>
          <Styled.DateWrapper>22 May</Styled.DateWrapper>
        </section>
        <section>
          <Styled.ContentWrapper>
            Lorem ipsum dolor sit amet
          </Styled.ContentWrapper>
        </section>
      </Styled.SectionWrapper>
      <Styled.SectionWrapper>
        <section>
          <Styled.DateWrapper>19 Apr</Styled.DateWrapper>
        </section>
        <section>
          <Styled.ContentWrapper>
            Lorem ipsum dolor sit amet
          </Styled.ContentWrapper>
        </section>
      </Styled.SectionWrapper>
    </div>
  );
};

export default JournalPosts;
