import React from 'react';
import Paragraph from 'components/NotionBlock/Paragraph/Paragraph';
import { NotionBlockObject } from 'type/notion.d';

const NotionBlock = (props: NotionBlockObject) => {
  if (props.paragraph) {
    console.log(props.paragraph);
    return <Paragraph {...props.paragraph}></Paragraph>;
  } else {
    console.log(props);
    return <></>;
  }
};

export default NotionBlock;
