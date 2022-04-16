import React from 'react';
import styled from '@emotion/styled';

const Grid = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: theme.spacing(4),
}));

const GridList = ({ data, getItemKey, renderItem }) => {
  return (
    <Grid>
      {data.map((item) => (
        <li key={getItemKey(item)}>{renderItem(item)}</li>
      ))}
    </Grid>
  );
};

export default GridList;
