import { Box } from '@mui/material';

interface Props {
  bgcolor?: string;
}

export default function ScrollSlideCurtain({ bgcolor = '#f5f3ef' }: Props) {
  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: bgcolor }} />
  );
}
