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
  flex-directrion: row;
  flex-wrap: wrap;
`;

const S = {
  Paragraph,
  Container,
};

export default S;
