import React from 'react';
import styled from 'styled-components';
import { color as colorConfig } from 'GlobalStyle';
import { ColorType } from 'types/notionBaseType.d';

export type TagChipProps = {
  color: ColorType;
  label: string;
};

type TagChipContainerProps = {
  color: ColorType;
};

function getBackgroundColor(color: ColorType) {
  switch (color) {
    case 'gray_background':
      return colorConfig.grayBackground;
    case 'brown_background':
      return colorConfig.brownBackground;
    case 'orange_background':
      return colorConfig.orangeBackground;
    case 'yellow_background':
      return colorConfig.yellowBackground;
    case 'green_background':
      return colorConfig.tealBackground;
    case 'blue_background':
      return colorConfig.blueBackground;
    case 'purple_background':
      return colorConfig.purpleBackground;
    case 'pink_background':
      return colorConfig.pinkBackground;
    case 'red_background':
      return colorConfig.redBackground;
    default:
      return '#FFFFFF';
  }
}

const Container = styled.div<TagChipContainerProps>`
  background-color: ${({ color }) => getBackgroundColor(color)};
  padding: 2.5px 6px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 350;
`;

const TagChip: React.FC<TagChipProps> = (props) => {
  const { color, label } = props;

  return <Container color={color}>{label}</Container>;
};

export default TagChip;
