import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { Wrapper, Content, Title, Date } from './styled';

function ArticleCard({ slug, title, date, previewImage }) {
  const image = getImage(previewImage);

  return (
    <Wrapper key={slug}>
      {previewImage && <GatsbyImage image={image} alt="" />}
      <Content>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </Content>
    </Wrapper>
  );
}

export default ArticleCard;
