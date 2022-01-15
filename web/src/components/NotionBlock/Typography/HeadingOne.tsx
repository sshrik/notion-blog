import React from 'react';
import * as S from './typo.style';
import { HeadingOneBlockObject } from 'types/notionBaseBlock.d';

const HeadingOne = (props: HeadingOneBlockObject) => (
  <S.Container variant="h1">
    {props.text.map((element, index) => {
      let className = '';
      className += element.annotations.code ? 'code ' : '';
      className += element.href ? 'link' : '';

      return (
        <S.HeadingOne
          className={className}
          key={index}
          {...element.annotations}
        >
          {element.href ? (
            <a href={element.href}>{element.plain_text}</a>
          ) : (
            element.plain_text
          )}
        </S.HeadingOne>
      );
    })}
  </S.Container>
);

export default HeadingOne;
