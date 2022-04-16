import React from 'react';
import Img from 'gatsby-image';
import { Avatar, Box, Grid, styled } from '@mui/material';

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

const SkillsList = ({ skills }) => {
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
};

export default SkillsList;
