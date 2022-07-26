import { Skeleton, Stack } from '@mui/material';

export default function Variants() {
  return (
    <Stack spacing={1}>
					<Skeleton height={60}/>
						<Skeleton variant="rectangular" animation="wave" width={1000} height={500} />
    </Stack>
  );
}