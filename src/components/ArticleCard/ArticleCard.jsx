import React from 'react';
import styled, { css } from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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

const Wrapper = styled.div(
  ({ theme: { breakpoints } }) => css`
    width: 100%;
    border: 1px solid white;

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const Title = styled.span(
  ({ theme: { colors, fontSize } }) => css`
    margin-bottom: 1.5rem;
    font-size: ${fontSize.md};
    color: ${colors.blue};
  `
);

const Date = styled.span(
  ({ theme: { colors, fontSize } }) => css`
    font-size: ${fontSize.xs};
    color: ${colors.white};
  `
);
