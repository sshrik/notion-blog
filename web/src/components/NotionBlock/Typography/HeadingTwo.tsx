import React from 'react';
import * as S from 'components/NotionBlock/Typography/typo.style';
import { HeadingTwoBlockObject } from 'types/notionBaseBlock.d';

const HeadingTwo = (props: HeadingTwoBlockObject) => (
  <S.Container variant="h2">
    {props.text.map((element, index) => {
      let className = '';
      className += element.annotations.code ? 'code ' : '';
      className += element.href ? 'link' : '';

      return (
        <S.HeadingTwo
          className={className}
          key={index}
          {...element.annotations}
        >
          {element.href ? (
            <a href={element.href}>{element.plain_text}</a>
          ) : (
            element.plain_text
          )}
        </S.HeadingTwo>
      );
    })}
  </S.Container>
);

export default HeadingTwo;
