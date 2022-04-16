import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Typography, styled, useTheme } from '@mui/material';
import { Bold } from './StyledUtils';

const StyledVerticalTimeline = styled(VerticalTimeline)({
  overflowX: 'hidden',
  '&:before': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)(
  ({ theme }) => ({
    '.vertical-timeline-element-content-arrow': {
      borderRightColor: `${theme.palette.primary.main} !important`,
    },
  }),
);

export function Timeline({ children }) {
  return <StyledVerticalTimeline>{children}</StyledVerticalTimeline>;
}

export function TimelineItem({
  date,
  icon,
  title,
  subtitle,
  location,
  content,
}) {
  const theme = useTheme();

  return (
    <StyledVerticalTimelineElement
      date={date}
      icon={icon}
      contentStyle={{
        borderTop: `5px solid ${theme.palette.primary.main}`,
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
      }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={{
        background: `${theme.palette.primary.main}`,
        color: '#fff',
      }}
    >
      <Typography variant="h6" component="h3">
        <Bold>{title}</Bold>
      </Typography>
      <Typography variant="subtitle2">{subtitle}</Typography>
      {location && (
        <Typography variant="subtitle2" color="textSecondary">
          {location}
        </Typography>
      )}
      <div>{content}</div>
    </StyledVerticalTimelineElement>
  );
}
