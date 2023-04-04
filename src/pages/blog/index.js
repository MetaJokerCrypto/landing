import * as React from 'react';
import { graphql } from 'gatsby';

import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

import Layout from 'components/Layout/Layout';
import ArticleCard from 'components/ArticleCard/ArticleCard';
import Heading from 'components/Text/Heading';

import { Wrapper, List, StyledLink } from 'styles/pages/blog';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Wrapper>
          <Heading type="h2">Статьи</Heading>
          <List>
            {posts.map(({ frontmatter, fields }, index) => {
              return (
                <StyledLink to={fields.slug}>
                  <ArticleCard key={index} slug={fields.slug} title={frontmatter.title} date={frontmatter.date} />
                </StyledLink>
              );
            })}
          </List>
        </Wrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
