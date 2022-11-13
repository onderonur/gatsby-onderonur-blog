import styled from '@emotion/styled';

const GridList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: theme.spacing(4),
}));

export default GridList;
