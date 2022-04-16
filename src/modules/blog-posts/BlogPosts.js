import React from 'react';
import { Link as MuiLink, styled } from '@mui/material';
import SEO from '../seo/SEO';
import { Bold } from '../shared/StyledUtils';
import GridList from '../shared/GridList';
import Section from '../shared/Section';
import BlogPostCard from '../blog-posts/BlogPostCard';
import PaginationLink from './PaginationLink';
import GatsbyLink from '../shared/GatsbyLink';

const blogPrefix = '/blog/';

const PaginationRoot = styled('ul')(({ theme }) => ({
  padding: 0,
  listStyle: 'none',
  display: 'block',
  margin: theme.spacing(3, 0),
  textAlign: 'center',
}));

const PaginationItem = styled('li')(({ theme }) => ({
  display: 'inline-block',
  margin: theme.spacing(0, 1),
  verticalAlign: 'middle',
}));

const Pagination = ({
  currentPage,
  prevPage,
  isFirst,
  pagesCount,
  nextPage,
  isLast,
}) => {
  return (
    <PaginationRoot>
      {!isFirst && (
        <PaginationItem>
          <PaginationLink to={prevPage} direction="previous" />
        </PaginationItem>
      )}
      {Array.from({ length: pagesCount }, (_, i) => {
        const pageNumber = i + 1;
        const linkContent = pageNumber;
        return (
          <PaginationItem key={`pagination-number${pageNumber}`}>
            <MuiLink
              component={GatsbyLink}
              to={`${blogPrefix}${i === 0 ? '' : pageNumber}`}
            >
              {currentPage === pageNumber ? (
                <Bold>{linkContent}</Bold>
              ) : (
                linkContent
              )}
            </MuiLink>
          </PaginationItem>
        );
      })}
      {!isLast && (
        <PaginationItem>
          <PaginationLink to={nextPage} direction="next" />
        </PaginationItem>
      )}
    </PaginationRoot>
  );
};

function BlogPosts({ data, pageContext }) {
  const { currentPage, pagesCount } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === pagesCount;
  const prevPage =
    currentPage - 1 === 1
      ? blogPrefix
      : blogPrefix + (currentPage - 1).toString();
  const nextPage = `${blogPrefix}${currentPage + 1}`;

  const postEdges = data.allMarkdownRemark.edges.filter(
    (edge) => !!edge.node.frontmatter.date,
  );
  return (
    <>
      <SEO
        title={`Blog - Page ${currentPage} of ${pagesCount}`}
        description={`Onur Önder's blog page ${currentPage} of ${pagesCount}`}
      />
      <Section title="Blog">
        <GridList
          data={postEdges}
          getItemKey={(edge) => edge.node.id}
          renderItem={(edge) => <BlogPostCard data={edge.node} />}
        />
        <Pagination
          {...{
            isFirst,
            prevPage,
            pagesCount,
            blogPrefix,
            currentPage,
            isLast,
            nextPage,
          }}
        />
      </Section>
    </>
  );
}

export default BlogPosts;
