import React from 'react';
import { Box, Typography } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Timeline, TimelineItem } from '../shared/Timeline';
import { graphql, useStaticQuery } from 'gatsby';

function ExperienceTimeline() {
  const {
    markdownRemark: {
      frontmatter: { experience },
    },
  } = useStaticQuery(graphql`
    query ExperienceQuery {
      markdownRemark(fileAbsolutePath: { regex: "/common/experience.md/" }) {
        frontmatter {
          experience {
            dateRange
            jobTitle
            company
            description
            location
          }
        }
      }
    }
  `);

  return (
    <Timeline>
      {experience.map((item) => {
        return (
          <TimelineItem
            key={item.dateRange}
            date={item.dateRange}
            icon={<WorkOutlineIcon />}
            title={item.jobTitle}
            subtitle={item.company}
            location={item.location}
            content={
              item.description && (
                <Box marginTop={1}>
                  <Typography variant="subtitle2" component="p">
                    {item.description}
                  </Typography>
                </Box>
              )
            }
          />
        );
      })}
    </Timeline>
  );
}

export default ExperienceTimeline;
