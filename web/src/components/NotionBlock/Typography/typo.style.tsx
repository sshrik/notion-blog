import styled from 'styled-components';
import { color } from 'GlobalStyle';
import { Annotation } from 'types/notionBaseBlock.d';

function getAppropriateColor(
  props: Annotation,
  isFont: boolean,
  isCode: boolean
): string {
  const defaultFont = isCode ? color.codeFont : color.paragraphBlackFont;
  const defaultBackground = isCode ? color.codeBackground : 'none';

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

export const Paragraph = styled.p<Annotation>`
  font-size: 16px;
  font-weight: ${(props: Annotation) => (props.bold ? 'bold' : 'regular')};
  font-style: ${(props: Annotation) => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${(props: Annotation) => {
    let textDecorate = '';
    if (props.strikethrough) textDecorate += 'line-through ';
    if (props.underline) textDecorate += 'underline';
    return textDecorate;
  }};
  color: ${(props: Annotation) => getAppropriateColor(props, true, props.code)};
  background-color: ${(props: Annotation) =>
    getAppropriateColor(props, false, props.code)};
`;

export const Code = styled.code<Annotation>`
  font-weight: ${(props: Annotation) => (props.bold ? 'bold' : 'regular')};
  font-style: ${(props: Annotation) => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${(props: Annotation) => {
    let textDecorate = '';
    if (props.strikethrough) textDecorate += 'line-through ';
    if (props.underline) textDecorate += 'underline';
    return textDecorate;
  }};
  color: ${(props: Annotation) => getAppropriateColor(props, true, props.code)};
  background-color: ${(props: Annotation) =>
    getAppropriateColor(props, false, props.code)};
`;

export const HeadingOne = styled.h1<Annotation>`
  font-weight: ${(props: Annotation) => (props.bold ? 'bold' : 'regular')};
  font-style: ${(props: Annotation) => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${(props: Annotation) => {
    let textDecorate = '';
    if (props.strikethrough) textDecorate += 'line-through ';
    if (props.underline) textDecorate += 'underline';
    return textDecorate;
  }};
  color: ${(props: Annotation) => getAppropriateColor(props, true, props.code)};
  background-color: ${(props: Annotation) =>
    getAppropriateColor(props, false, props.code)};
`;

export const HeadingTwo = styled.h2<Annotation>`
  font-weight: ${(props: Annotation) => (props.bold ? 'bold' : 'regular')};
  font-style: ${(props: Annotation) => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${(props: Annotation) => {
    let textDecorate = '';
    if (props.strikethrough) textDecorate += 'line-through ';
    if (props.underline) textDecorate += 'underline';
    return textDecorate;
  }};
  color: ${(props: Annotation) => getAppropriateColor(props, true, props.code)};
  background-color: ${(props: Annotation) =>
    getAppropriateColor(props, false, props.code)};
`;

export const HeadingThree = styled.h3<Annotation>`
  font-weight: ${(props: Annotation) => (props.bold ? 'bold' : 'regular')};
  font-style: ${(props: Annotation) => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${(props: Annotation) => {
    let textDecorate = '';
    if (props.strikethrough) textDecorate += 'line-through ';
    if (props.underline) textDecorate += 'underline';
    return textDecorate;
  }};
  color: ${(props: Annotation) => getAppropriateColor(props, true, props.code)};
  background-color: ${(props: Annotation) =>
    getAppropriateColor(props, false, props.code)};
`;

interface ContainerProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body';
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: ${(props) => {
    if (props.variant === 'h1') return '1.875rem';
    if (props.variant === 'h2') return '1.5rem';
    if (props.variant === 'h3') return '1.25rem';
    return '1rem';
  }};
`;
