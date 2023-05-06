import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

import Layout from 'components/Layout/Layout';
import ArticleCard from 'components/ArticleCard/ArticleCard';
import Heading from 'components/Text/Heading';
import Button from 'components/Button/Button';

import { Wrapper, CardList, StyledLink, customFilterStyles } from 'styles/pages/blog';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const [activeFilter, setActiveFilter] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const filterPosts = (filter) => {
    if (filter !== activeFilter) {
      setActiveFilter(filter);
      setFilteredPosts(filteredPosts.filter((item) => item.frontmatter?.topics === activeFilter));
    } else {
      setActiveFilter('');
      setFilteredPosts(posts);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Wrapper>
          <Heading type="h2">Статьи</Heading>
          <Button customStyles={customFilterStyles} onClick={() => filterPosts('fundamental')}>
            Фундаментал
          </Button>
          <Button customStyles={customFilterStyles} onClick={() => filterPosts('psychology')}>
            Мета-психология
          </Button>
          <Button customStyles={customFilterStyles} onClick={() => filterPosts('knowlege')}>
            Занания и технологии
          </Button>
          <CardList>
            {filteredPosts.map(({ frontmatter, fields }, index) => (
              // console.log(frontmatter, 'frontmatter');
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
          topics
        }
      }
    }
  }
`;
