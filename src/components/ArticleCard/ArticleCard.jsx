import React from 'react';

import { Wrapper, Content, Title, StyledLink, Date } from './styled';

const ArticleCard = ({ slug, title, date }) => {

  return (
      <Wrapper key={slug}>
        <Content>
          <Title>
            <StyledLink slug={slug}>{title}</StyledLink>
          </Title>
          <Date>{date}</Date>
        </Content>
      </Wrapper>
    );
  };

export default ArticleCard;
