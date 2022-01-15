import React from 'react';
import HeadingOne from 'components/NotionBlock/Typography/HeadingOne';
import HeadingThree from 'components/NotionBlock/Typography/HeadingThree';
import HeadingTwo from 'components/NotionBlock/Typography/HeadingTwo';
import Paragraph from 'components/NotionBlock/Typography/Paragraph';
import { NotionBlockObject } from 'types/notion.d';

const NotionBlock = (props: NotionBlockObject) => {
  if (props.paragraph) {
    return <Paragraph {...props.paragraph}></Paragraph>;
  } else if (props.heading_1) {
    return <HeadingOne {...props.heading_1}></HeadingOne>;
  } else if (props.heading_2) {
    return <HeadingTwo {...props.heading_2}></HeadingTwo>;
  } else if (props.heading_3) {
    return <HeadingThree {...props.heading_3}></HeadingThree>;
  } else {
    return <></>;
  }
};

export default NotionBlock;
