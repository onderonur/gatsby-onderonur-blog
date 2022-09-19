import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import BaseCardMedia from '../shared/BaseCardMedia';
import BaseCardTitle from '../shared/BaseCardTitle';
import GatsbyLink from '../shared/GatsbyLink';

function BlogPostCard({ data }) {
  return (
    <Card>
      <CardActionArea LinkComponent={GatsbyLink} to={data.fields.route}>
        <BaseCardMedia
          src={data.frontmatter.featuredImage?.childImageSharp.fluid}
          alt={`${data.frontmatter.title} - Featured Image`}
        />
        <CardContent>
          <BaseCardTitle>{data.frontmatter.title}</BaseCardTitle>
          <Typography component="p" variant="subtitle2" color="textSecondary">
            <time>{data.frontmatter.date}</time> ·{' '}
            {data.fields.readingTime.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogPostCard;
