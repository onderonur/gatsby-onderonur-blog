import React from 'react';
import { Typography } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Timeline, TimelineItem } from '../shared/Timeline';

function EducationTimeline({ items }) {
  return (
    <Timeline>
      {items.map((item) => {
        const dateRange = `${item.startYear} - ${item.endYear}`;
        return (
          <TimelineItem
            key={dateRange}
            date={dateRange}
            icon={<SchoolOutlinedIcon />}
            title={item.school}
            subtitle={item.fieldOfStudy}
            location={item.location}
            content={
              item.grade && (
                <Typography
                  variant="subtitle2"
                  component="div"
                  color="textSecondary"
                >
                  {item.grade}
                </Typography>
              )
            }
          />
        );
      })}
    </Timeline>
  );
}

export default EducationTimeline;
