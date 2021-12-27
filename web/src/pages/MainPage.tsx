import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import NotionBlock from 'components/NotionBlock/NotionBlock';
import BlogPage from 'model/BlogPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const MainPage = observer(() => {
  useEffect(() => {
    BlogPage.changePage('/');
  }, []);

  useEffect(() => {
    console.log(BlogPage.response);
  }, [BlogPage.response]);

  return (
    <Container>
      {BlogPage.response.map((blockValue, index) => (
        <NotionBlock {...blockValue} key={index} />
      ))}
    </Container>
  );
});

export default MainPage;
