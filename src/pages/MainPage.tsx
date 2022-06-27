import React from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import mock, { PageListMock } from './mockData';
import BlogFeedPreview from 'components/BlogFeedPreview';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 230px;
`;

const CoverImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 300px;
  object-fit: cover;
  z-index: -1;
`;

const IconImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 6px;
`;

const BlogFolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  gap: 18px;
`;

const MainPage = () => {
  const pageListMock: PageListMock = mock;

  return (
    <Container>
      <CoverImage src={pageListMock.coverImageLink} />
      <IconImage src={pageListMock.iconImageLink} />
      <h1>{pageListMock.blogTitle}</h1>
      <div>
        {pageListMock.blogFolders.map((item) => (
          <BlogFolderContainer key={nanoid()}>
            <h2>{item.blogFloderName}</h2>
            {item.blogFeeds.map((blogFeed) => (
              <BlogFeedPreview key={nanoid()} {...blogFeed} />
            ))}
          </BlogFolderContainer>
        ))}
      </div>
    </Container>
  );
};

export default MainPage;
