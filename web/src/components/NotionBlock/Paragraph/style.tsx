import styled from 'styled-components';
import { color } from 'GlobalStyle';
import { Annotation } from 'type/notionBaseBlock.d';

function getAppropriateColor(props: Annotation, isFont: boolean): string {
  const defaultFont = color.paragraphBlackFont;
  const defaultBackground = 'none';

  if (props.color === 'blue') {
    return isFont ? color.blueFont : defaultBackground;
  } else if (props.color === 'blue_background') {
    return isFont ? defaultFont : color.blueBackground;
  } else if (props.color === 'brown') {
    return isFont ? color.brownFont : defaultBackground;
  } else if (props.color === 'brown_background') {
    return isFont ? defaultFont : color.brownBackground;
  } else if (props.color === 'gray') {
    return isFont ? color.grayFont : defaultBackground;
  } else if (props.color === 'gray_background') {
    return isFont ? defaultFont : color.grayBackground;
  } else if (props.color === 'green') {
    return isFont ? color.tealFont : defaultBackground;
  } else if (props.color === 'green_background') {
    return isFont ? defaultFont : color.tealBackground;
  } else if (props.color === 'orange') {
    return isFont ? color.orangeFont : defaultBackground;
  } else if (props.color === 'orange_background') {
    return isFont ? defaultFont : color.orangeBackground;
  } else if (props.color === 'pink') {
    return isFont ? color.pinkFont : defaultBackground;
  } else if (props.color === 'pink_background') {
    return isFont ? defaultFont : color.pinkBackground;
  } else if (props.color === 'purple') {
    return isFont ? color.purpleFont : defaultBackground;
  } else if (props.color === 'purple_background') {
    return isFont ? defaultFont : color.purpleBackground;
  } else if (props.color === 'red') {
    return isFont ? color.redFont : defaultBackground;
  } else if (props.color === 'red_background') {
    return isFont ? defaultFont : color.redBackground;
  } else if (props.color === 'yellow') {
    return isFont ? color.redFont : defaultBackground;
  } else if (props.color === 'yellow_background') {
    return isFont ? defaultFont : color.yellowBackground;
  }
  return isFont ? defaultFont : defaultBackground;
}

const Paragraph = styled.p<Annotation>`
  font-size: 16px;
  font-family: 'Noto Sans KR';
  font-weight: ${(props: Annotation) => (props.bold ? 'bold' : 'regular')};
  font-style: ${(props: Annotation) => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${(props: Annotation) => {
    let textDecorate = '';
    if (props.strikethrough) textDecorate += 'line-through ';
    if (props.underline) textDecorate += 'underline';
    return textDecorate;
  }};
  color: ${(props: Annotation) => getAppropriateColor(props, true)};
  background-color: ${(props: Annotation) => getAppropriateColor(props, false)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const S = {
  Paragraph,
  Container,
};

export default S;
