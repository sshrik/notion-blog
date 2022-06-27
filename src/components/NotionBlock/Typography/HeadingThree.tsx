import React from 'react';
import * as S from 'components/NotionBlock/Typography/typo.style';
import { HeadingThreeBlockObject } from 'types/notionBaseBlock.d';

const HeadingThree = (props: HeadingThreeBlockObject) => (
  <S.Container variant="h3">
    {props.text.map((element, index) => {
      let className = '';
      className += element.annotations.code ? 'code ' : '';
      className += element.href ? 'link' : '';

      return (
        <S.HeadingThree
          className={className}
          key={index}
          {...element.annotations}
        >
          {element.href ? (
            <a href={element.href}>{element.plain_text}</a>
          ) : (
            element.plain_text
          )}
        </S.HeadingThree>
      );
    })}
  </S.Container>
);

export default HeadingThree;
