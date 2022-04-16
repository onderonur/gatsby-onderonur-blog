import React, { useMemo } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';
import { useTheme, Stack } from '@mui/material';
import ShareButtonTooltip from './ShareButtonTooltip';

function ShareButtons({ url }) {
  const shareButtonProps = useMemo(
    () => ({
      url: url ?? '',
    }),
    [url],
  );

  const theme = useTheme();
  const shareIconSize = theme.typography.fontSize * 2;

  const shareIconProps = useMemo(
    () => ({
      size: shareIconSize,
      // To make buttons vertically centered
      style: { display: 'flex' },
    }),
    [shareIconSize],
  );

  if (!url) {
    return null;
  }

  return (
    <Stack spacing={1} direction="row" flexWrap="wrap" marginY={1}>
      <ShareButtonTooltip name="Facebook">
        <FacebookShareButton {...shareButtonProps}>
          <FacebookIcon {...shareIconProps} />
        </FacebookShareButton>
      </ShareButtonTooltip>
      <ShareButtonTooltip name="Twitter">
        <TwitterShareButton {...shareButtonProps}>
          <TwitterIcon {...shareIconProps} />
        </TwitterShareButton>
      </ShareButtonTooltip>
      <ShareButtonTooltip name="LinkedIn">
        <LinkedinShareButton {...shareButtonProps}>
          <LinkedinIcon {...shareIconProps} />
        </LinkedinShareButton>
      </ShareButtonTooltip>
      <ShareButtonTooltip name="Reddit">
        <RedditShareButton {...shareButtonProps}>
          <RedditIcon {...shareIconProps} />
        </RedditShareButton>
      </ShareButtonTooltip>
    </Stack>
  );
}

export default ShareButtons;
