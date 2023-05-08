import * as React from 'react';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';
import SEO from 'components/SEO/SEO';

import Layout from 'components/Layout/Layout';

const BlogPostTemplate = ({ data: { site, markdownRemark: post }, location }) => {
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Wrapper>
        <article className="blog-post" itemScope itemType="http://schema.org/Article">
          <Header>
            <Title itemProp="headline">{post.frontmatter.title}</Title>
            <p>{post.frontmatter.date}</p>
          </Header>
          <TextSection dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
        </article>
      </Wrapper>
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head = () => <SEO />;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

const Wrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 7rem 0;
  line-height: 1.7rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 32px;
  text-transform: uppercase;
`;

const TextSection = styled.section(
  ({ theme: { breakpoints, colors, fontSize } }) => css`
    background-color: ${colors.textArea};
    padding: 2rem 3rem;
    border-radius: 2rem;
    color: #d6d6d6;
    font-size: ${fontSize.sm};

    @media (max-width: ${breakpoints.md}) {
      padding: 2rem 1rem;
    }
  `
);
