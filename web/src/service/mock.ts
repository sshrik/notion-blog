import { GetPageResponse } from 'types/queryType.d';

const result: GetPageResponse = {
  results: [
    {
      object: 'block',
      id: '9a243ebf-ca46-4d9e-90e7-7bcf7a77bfd9',
      created_time: '2021-12-26T14:08:00.000Z',
      last_edited_time: '2021-12-26T14:08:00.000Z',
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: {
        text: [
          {
            type: 'text',
            text: {
              content: 'TEST TEXT',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'TEST TEXT',
            href: null,
          },
        ],
      },
    },
    {
      object: 'block',
      id: 'b1d01ad5-b700-4b68-a6e5-bccc4092a43c',
      created_time: '2021-12-26T14:16:00.000Z',
      last_edited_time: '2021-12-27T03:41:00.000Z',
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: {
        text: [
          {
            type: 'text',
            text: {
              content: 'Base Code',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: true,
              color: 'default',
            },
            plain_text: 'Base Code',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: 'Test Code',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: true,
              color: 'green',
            },
            plain_text: 'Test Code',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: ' ',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'green',
            },
            plain_text: ' ',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: 'Test Code with Background',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: true,
              color: 'green_background',
            },
            plain_text: 'Test Code with Background',
            href: null,
          },
        ],
      },
    },
    {
      object: 'block',
      id: 'dc5de591-30a3-4213-a708-f025450db4f9',
      created_time: '2021-12-26T14:08:00.000Z',
      last_edited_time: '2021-12-27T12:31:00.000Z',
      has_children: false,
      archived: false,
      type: 'heading_2',
      heading_2: {
        text: [
          {
            type: 'text',
            text: {
              content: 'TEST ',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'TEST ',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: 'CODE',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: true,
              color: 'default',
            },
            plain_text: 'CODE',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: ' ',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: ' ',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: 'TEXT',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'green',
            },
            plain_text: 'TEXT',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: ' ',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: ' ',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: 'WITH',
              link: {
                url: 'http://naver.com',
              },
            },
            annotations: {
              bold: false,
              italic: true,
              strikethrough: false,
              underline: false,
              code: true,
              color: 'default',
            },
            plain_text: 'WITH',
            href: 'http://naver.com',
          },
          {
            type: 'text',
            text: {
              content: ' ',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: ' ',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: 'LINK',
              link: {
                url: 'https://www.naver.com/',
              },
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: 'LINK',
            href: 'https://www.naver.com/',
          },
        ],
      },
    },
    {
      object: 'block',
      id: '49742556-6a1a-4bc3-b1ad-4afd18f6e7a5',
      created_time: '2021-12-26T14:09:00.000Z',
      last_edited_time: '2021-12-26T14:09:00.000Z',
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: {
        text: [
          {
            type: 'text',
            text: {
              content: '이것은 테스트 텍스트입니다. 그런데 ',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: '이것은 테스트 텍스트입니다. 그런데 ',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '볼드',
              link: null,
            },
            annotations: {
              bold: true,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: '볼드',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '와 ',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: '와 ',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '이텔릭',
              link: null,
            },
            annotations: {
              bold: false,
              italic: true,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: '이텔릭',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '을 곁들인',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: '을 곁들인',
            href: null,
          },
        ],
      },
    },
    {
      object: 'block',
      id: '167b4641-17cf-45b2-a6f0-3587362b6cbf',
      created_time: '2021-12-26T14:09:00.000Z',
      last_edited_time: '2021-12-26T14:10:00.000Z',
      has_children: true,
      archived: false,
      type: 'column_list',
      column_list: {},
    },
    {
      object: 'block',
      id: '7fabfb54-aad1-4068-9dbe-b701eb28d66a',
      created_time: '2021-12-26T14:10:00.000Z',
      last_edited_time: '2021-12-26T14:10:00.000Z',
      has_children: false,
      archived: false,
      type: 'heading_1',
      heading_1: {
        text: [
          {
            type: 'text',
            text: {
              content: '제목',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'green_background',
            },
            plain_text: '제목',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: ' 1은 ',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: ' 1은 ',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '이것입니다',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'pink',
            },
            plain_text: '이것입니다',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '.',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: '.',
            href: null,
          },
        ],
      },
    },
    {
      object: 'block',
      id: 'fd0f096b-99d7-4540-a3a1-ac59676e9dbc',
      created_time: '2021-12-26T14:10:00.000Z',
      last_edited_time: '2021-12-26T14:11:00.000Z',
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: {
        text: [
          {
            type: 'text',
            text: {
              content: '이',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'gray',
            },
            plain_text: '이',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '게',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'orange',
            },
            plain_text: '게',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '모',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'gray_background',
            },
            plain_text: '모',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '두',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'pink_background',
            },
            plain_text: '두',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '다',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'blue',
            },
            plain_text: '다',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '른',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'brown',
            },
            plain_text: '른',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '색',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'red',
            },
            plain_text: '색',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '이',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'yellow',
            },
            plain_text: '이',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '라',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'blue_background',
            },
            plain_text: '라',
            href: null,
          },
          {
            type: 'text',
            text: {
              content: '니',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'yellow_background',
            },
            plain_text: '니',
            href: null,
          },
        ],
      },
    },
    {
      object: 'block',
      id: '0212b8d6-f21d-4aef-beab-253056686d75',
      created_time: '2021-12-26T14:11:00.000Z',
      last_edited_time: '2021-12-26T14:11:00.000Z',
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: {
        text: [],
      },
    },
  ],
};

export default result;
