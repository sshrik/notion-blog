import React from 'react';
import * as S from 'components/NotionBlock/Typography/typo.style';
import { ParagraphBlockObject } from 'types/notionBaseBlock.d';

const Paragraph = (props: ParagraphBlockObject) => (
  <S.Container>
    {props.text.map((element, index) => {
      if (element.annotations.code) {
        return (
          <S.Code key={index} {...element.annotations}>
            {element.href ? (
              <a href={element.href}>{element.plain_text}</a>
            ) : (
              element.plain_text
            )}
          </S.Code>
        );
      }
      return (
        <S.Paragraph key={index} {...element.annotations}>
          {element.href ? (
            <a href={element.href}>{element.plain_text}</a>
          ) : (
            element.plain_text
          )}
        </S.Paragraph>
      );
    })}
  </S.Container>
);

export default Paragraph;
