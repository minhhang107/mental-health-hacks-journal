import { ReactComponent as AngryEmoji } from "assets/svg/angry-emoji.svg";
import { ReactComponent as BoredEmoji } from "assets/svg/bored-emoji.svg";
import { ReactComponent as HappyEmoji } from "assets/svg/happy-emoji.svg";
import { ReactComponent as SadEmoji } from "assets/svg/sad-emoji.svg";
import React, { useState } from "react";
import * as Styled from "./MoodPicker.styled";

export const emojis = [
  ["angry", <AngryEmoji />],
  ["happy", <HappyEmoji />],
  ["bored", <BoredEmoji />],
  ["sad", <SadEmoji />],
];

export function emojiLookup(mood) {
  return emojis.find(([value]) => value === mood)?.[1];
}

const MoodPickerRow = ({ onClick }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleClick = (ev) => {
    const { value } = ev.target.dataset;

    setSelectedMood(value);
    onClick?.(value);
  };

  return (
    <Styled.Wrapper aria-label="List of selectable moods">
      {emojis.map(([value, emoji], index) => (
        <li key={index}>
          <Styled.MoodButton
            type="button"
            data-value={value}
            onClick={handleClick}
            isSelected={selectedMood === value}
          >
            {emoji}
          </Styled.MoodButton>
        </li>
      ))}
    </Styled.Wrapper>
  );
};

export default MoodPickerRow;
