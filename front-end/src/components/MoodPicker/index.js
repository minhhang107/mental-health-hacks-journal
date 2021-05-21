import { ReactComponent as AngryEmoji } from "assets/svg/angry-emoji.svg";
import { ReactComponent as BoredEmoji } from "assets/svg/bored-emoji.svg";
import { ReactComponent as HappyEmoji } from "assets/svg/happy-emoji.svg";
import { ReactComponent as SadEmoji } from "assets/svg/sad-emoji.svg";
import React from "react";
import * as Styled from "./MoodPicker.styled";

const emojis = [<AngryEmoji />, <HappyEmoji />, <BoredEmoji />, <SadEmoji />];

const MoodPicker = () => {
  return (
    <Styled.Wrapper>
      {emojis.map((emoji, index) => (
        <Styled.MoodButton
          style={index <= 1 ? { alignItems: "flex-end" } : undefined}
          key={index}
        >
          {emoji}
        </Styled.MoodButton>
      ))}

      <Styled.Avatar />
    </Styled.Wrapper>
  );
};

export default MoodPicker;
