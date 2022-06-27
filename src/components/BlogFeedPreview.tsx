import React from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import TagChip from 'components/TagChip';
import { ColorType } from 'types/notionBaseType.d';

type BlogFeedPreviewProps = {
  title: string;
  lastEdited: string;
  tags: { color: ColorType; label: string }[];
  description: string;
  replImageLink: string;
};

const Container = styled.div`
  width: 100%;
  border: 1px solid #e3e2e0;
  border-radius: 5px;
  padding: 24.5px 30px;

  display: flex;
  gap: 24px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  background-color: #fdfdfd;

  transition-duration: 500ms;

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
`;

const ContentsWrapper = styled.div`
  width: calc('100% - 125px - 24px');
`;

const MetadataWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  margin-top: 6px;
  margin-bottom: 8px;
`;

const DescriptionImage = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 5px;
  object-fit: contain;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

const BlogFeedPreview: React.FC<BlogFeedPreviewProps> = (props) => {
  const { title, lastEdited, tags, description, replImageLink } = props;

  return (
    <Container>
      <ContentsWrapper>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <MetadataWrapper>
          <p
            style={{
              color: '#B3B3B3',
              fontSize: '12px',
              fontWeight: 'regular',
            }}
          >
            {lastEdited}
          </p>
          <p
            style={{
              color: '#B3B3B3',
              fontSize: '12px',
              fontWeight: 'regular',
            }}
          >
            |
          </p>
          <TagWrapper>
            {tags.map((item) => (
              <TagChip key={nanoid()} {...item} />
            ))}
          </TagWrapper>
        </MetadataWrapper>
        <p style={{ color: '#808080', fontWeight: 300, margin: 0 }}>
          {description}
        </p>
      </ContentsWrapper>
      <DescriptionImage src={replImageLink} />
    </Container>
  );
};

export default BlogFeedPreview;
