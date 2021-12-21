import styled from 'styled-components';
import { Annotation } from 'type/notionBaseBlock.d';

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
