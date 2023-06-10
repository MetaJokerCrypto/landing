import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled, { css, ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

import SEO from 'components/SEO/SEO';
import Layout from 'components/Layout/Layout';
import ArticleCard from 'components/ArticleCard/ArticleCard';
import Heading from 'components/Text/Heading';

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

export const Head = () => <SEO />;

const Wrapper = styled.div`
  max-width: 60rem;
  padding-top: 8rem;
  margin: 0 auto 5rem;
`;

const CardList = styled.ol(
  ({ theme: { breakpoints } }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem 5rem;
    padding: 0;
    list-style: none;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `
);

const StyledLink = styled(Link)`
  width: 100%;
  color: white;
  text-decoration: none;
`;

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
