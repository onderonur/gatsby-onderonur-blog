import React from 'react';
import { IconButton, Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import useSiteMetadata from '../seo/useSiteMetadata';

function SocialAccountLink({ ['aria-label']: ariaLabel, url, icon }) {
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
      aria-label={ariaLabel}
    >
      <Icon />
    </IconButton>
  );
}

function SocialAccounts() {
  const { twitterUsername, linkedinUsername, mail, githubUsername } =
    useSiteMetadata();

  return (
    <Stack spacing={0.5} direction="row" justifyContent="center">
      <SocialAccountLink
        icon={TwitterIcon}
        url={`https://twitter.com/${twitterUsername}`}
        aria-label="Twitter Profile"
      />
      <SocialAccountLink
        icon={GitHubIcon}
        url={`https://github.com/${githubUsername}`}
        aria-label="GitHub Profile"
      />
      <SocialAccountLink
        icon={LinkedInIcon}
        url={`https://www.linkedin.com/in/${linkedinUsername}`}
        aria-label="LinkedIn Profile"
      />
      <SocialAccountLink
        icon={MailIcon}
        url={`mailto:${mail}`}
        aria-label="Send E-Mail"
      />
    </Stack>
  );
}

export default SocialAccounts;
