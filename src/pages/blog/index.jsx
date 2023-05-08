import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from 'components/SEO/SEO';

import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

import Layout from 'components/Layout/Layout';
import ArticleCard from 'components/ArticleCard/ArticleCard';
import Heading from 'components/Text/Heading';

import { Wrapper, CardList, StyledLink } from 'styles/pages/blog';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Wrapper>
          <Heading type="h1">Статьи</Heading>
          <CardList>
            {posts.map(({ frontmatter, fields }, index) => (
              <li key={index}>
                <StyledLink to={fields?.slug}>
                  <ArticleCard
                    key={index}
                    slug={fields.slug}
                    previewImage={frontmatter.previewImage}
                    title={frontmatter.title}
                    date={frontmatter.date}
                  />
                </StyledLink>
              </li>
            ))}
          </CardList>
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
          previewImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export const Head = () => <SEO />;
