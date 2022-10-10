import React from 'react';
import Img from 'gatsby-image';
import { Avatar, Box, Grid, styled } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';

const skillAvatarStyle = {
  size: 30,
  marginRight: 1,
};

const skillAvatarBaseStyle = ({ theme }) => ({
  width: `${skillAvatarStyle.size}px`,
  height: `${skillAvatarStyle.marginRight}px`,
  marginRight: theme.spacing(skillAvatarStyle.marginRight),
});

const SkillAvatar = styled(Avatar)(({ theme }) => ({
  ...skillAvatarBaseStyle({ theme }),
  backgroundColor: 'transparent',
  borderRadius: 0,
}));

const SkillAvatarOffset = styled('div')(({ theme }) => ({
  ...skillAvatarBaseStyle({ theme }),
}));

function SkillsList() {
  const {
    markdownRemark: {
      frontmatter: { skills },
    },
  } = useStaticQuery(graphql`
    query SkillsQuery {
      markdownRemark(fileAbsolutePath: { regex: "/common/skills.md/" }) {
        frontmatter {
          skills {
            icon {
              childImageSharp {
                fixed(width: 30, height: 30, quality: 80, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            name
          }
        }
      }
    }
  `);

  return (
    <Grid container spacing={2}>
      {skills.map((skill) => {
        return (
          <Grid key={skill.name} item xs={12} sm={4} md={3} lg={2}>
            <Box display="flex" alignItems="center">
              {skill.icon ? (
                <SkillAvatar
                  component={Img}
                  fixed={skill.icon.childImageSharp.fixed}
                  alt={`${skill.name} - icon`}
                />
              ) : (
                <SkillAvatarOffset />
              )}
              {skill.name}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SkillsList;
