
import React from "react";
import "./PlayerBlock.scss";
import Block from "../Block/Block";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import Paragraph from "../Paragraph";
import { primary } from "../../consts/colors";

export default function PlayerBlock(props) {
  const { isPlaying, onClick, text } = props;

  return (
    <div className="player-block" onClick={onClick}>
      <Block>
        <Paragraph>
          {
            isPlaying ?
              <MdPauseCircleFilled size={40} color={primary} /> :
              <MdPlayCircleFilled size={40} color={primary} />
          }
          {text}
        </Paragraph>
      </Block>
    </div>
  );
}
