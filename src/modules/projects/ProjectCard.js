import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  styled,
} from '@mui/material';
import BaseCardMedia from '../shared/BaseCardMedia';
import BaseCardTitle from '../shared/BaseCardTitle';
import BaseCardSubtitle from '../shared/BaseCardSubtitle';
import ExternalLinkButton from '../shared/ExternalLinkButton';

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ProjectCard = ({ data }) => {
  return (
    <Card>
      <BaseCardMedia
        src={data.featuredImage?.childImageSharp.fluid}
        alt={`${data.title} - Featured image`}
      />
      <CardContent>
        <BaseCardTitle>{data.title}</BaseCardTitle>
        <BaseCardSubtitle>{data.description}</BaseCardSubtitle>
        <Box marginTop={1}>
          {data.techStack.map((tech) => {
            return (
              <StyledChip
                key={tech.name}
                label={tech.name}
                variant="outlined"
                color="primary"
                size="small"
              />
            );
          })}
        </Box>
      </CardContent>
      <CardActions>
        {data.sourceCodeUrl && (
          <ExternalLinkButton href={data.sourceCodeUrl}>
            Source Code
          </ExternalLinkButton>
        )}
        <Box flexGrow={1} />
        {data.demoUrl && (
          <ExternalLinkButton href={data.demoUrl}>Demo</ExternalLinkButton>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
