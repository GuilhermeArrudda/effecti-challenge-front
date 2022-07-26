import { Box, Checkbox } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Check() {
  return (
    <Box>
      <Checkbox {...label}/>
    </Box>
  );
}