import { fireStoreApi } from "api/firestore-api";
import { useAuth } from "context/AuthContext";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import * as Styled from "./JournalPosts.styled";

const JournalPosts = () => {
  const [journals, setJournals] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    fireStoreApi
      .get(`/journals/getUsersJournals`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.length !== 0) setJournals(res.data);
        else setJournals([]);
        // setPosts(res);
      })
      .catch((err) => {
        console.log(err.response?.data.error);
      });
  }, [token]);

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
      {journals.length === 0 && "There is no journals"}
      {journals.map((journal) => (
        <Journal key={journal.dateCreated} {...journal} />
      ))}
    </div>
  );
};

function Journal({ content, dateCreated }) {
  const snippet = content.slice(0, 25);

  return (
    <Styled.SectionWrapper>
      <div>
        <Styled.DateWrapper>
          {dayjs(dateCreated).format("MMM DD")}
        </Styled.DateWrapper>
      </div>

      <section>
        <Styled.ContentWrapper>{snippet}</Styled.ContentWrapper>
      </section>
    </Styled.SectionWrapper>
  );
}

export default JournalPosts;
