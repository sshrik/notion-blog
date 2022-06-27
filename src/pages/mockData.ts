import { ColorType } from 'types/notionBaseType.d';

export type PageListMock = {
  coverImageLink: string;
  iconImageLink: string;
  blogTitle: string;
  blogFolders: {
    blogFloderName: string;
    blogFeeds: {
      title: string;
      lastEdited: string;
      tags: { color: ColorType; label: string }[];
      description: string;
      replImageLink: string;
    }[];
  }[];
};

const mock: PageListMock = {
  coverImageLink:
    'https://images.unsplash.com/photo-1656265932544-1772c9a8eb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  iconImageLink:
    'https://i.pinimg.com/564x/13/08/90/130890ce93dd9735743dbc1afe45eaae.jpg',
  blogTitle: 'Notion Blog Main Title',
  blogFolders: [
    {
      blogFloderName: 'Study - Computer',
      blogFeeds: [
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
      ],
    },
    {
      blogFloderName: 'Study - Computer',
      blogFeeds: [
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
      ],
    },
    {
      blogFloderName: 'Study - Computer',
      blogFeeds: [
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
        {
          title: '[VS Code] formatOnSave 지정해보기',
          lastEdited: '2021년 12월 27일 오전 10시 13분',
          tags: [
            { color: 'orange_background', label: 'tag1' },
            { color: 'blue_background', label: 'tag2' },
            { color: 'pink_background', label: 'Some Long Tag Name 3' },
            { color: 'red_background', label: 'Other Tags4' },
          ],
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...',
          replImageLink:
            'https://i.pinimg.com/564x/59/58/bf/5958bfd70651d866032321e9f4b06874.jpg',
        },
      ],
    },
  ],
};

export default mock;
