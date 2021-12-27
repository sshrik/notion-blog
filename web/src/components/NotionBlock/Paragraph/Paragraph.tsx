import React from 'react';
import S from './style';
import { ParagraphBlockObject } from 'type/notionBaseBlock.d';

const Paragraph = (props: ParagraphBlockObject) => (
  <S.Container>
    {props.text.map((element, index) => (
      <S.Paragraph key={index} {...element.annotations}>
        {element.plain_text}
      </S.Paragraph>
    ))}
  </S.Container>
);

export default Paragraph;
