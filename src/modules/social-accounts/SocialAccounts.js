import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IconButton, Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

const query = graphql`
  query SocialAccountsQuery {
    site {
      siteMetadata {
        twitterUsername
        linkedinUsername
        githubUsername
        mail
      }
    }
  }
`;

function SocialAccountLink({ url, icon }) {
  if (!url) {
    return null;
  }

  const Icon = icon;

  return (
    <IconButton
      color="inherit"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
    </IconButton>
  );
}

function SocialAccounts() {
  const { site } = useStaticQuery(query);
  const { siteMetadata } = site;
  const { twitterUsername, githubUsername, linkedinUsername, mail } =
    siteMetadata;

  return (
    <Stack spacing={0.5} direction="row" justifyContent="center">
      <SocialAccountLink
        icon={TwitterIcon}
        url={`https://twitter.com/${twitterUsername}`}
      />
      <SocialAccountLink
        icon={GitHubIcon}
        url={`https://github.com/${githubUsername}`}
      />
      <SocialAccountLink
        icon={LinkedInIcon}
        url={`https://linkedin.com/in/${linkedinUsername}`}
      />
      <SocialAccountLink icon={MailIcon} url={`mailto:${mail}`} />
    </Stack>
  );
}

export default SocialAccounts;
