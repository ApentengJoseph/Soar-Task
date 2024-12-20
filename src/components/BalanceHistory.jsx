import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const BalanceHistory = () => {
  const chartParams = {
    series: [
      {
        id: 'balance-series',
        data: [100, 300, 500, 800, 600, 500, 650],
        area: true,
        curve: 'natural',
        highlightScope: {
          highlight: 'item',
        },
        color: '#3673ff94',
      },
    ],
    xAxis: [
      {
        data: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        scaleType: 'band',
        id: 'month-axis',
      },
    ],
    height: 300, // Adjust height as needed
    yAxis: [
      {
        scaleType: 'linear',
        label: '',
        min: 0, // Set minimum value for y-axis
        max: 1000, // Set maximum value for y-axis
      },
    ],
  };

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: '100%' }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <div className='card-border-radius p-3 bg-white'>
          <LineChart {...chartParams} />
        </div>
      </Box>
    </Stack>
  );
};

export default BalanceHistory;
