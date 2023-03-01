import React from 'react';

import Button from '@mui/material/Button';
import CallMadeIcon from '@mui/icons-material/CallMade';
import ClearIcon from '@mui/icons-material/Clear';
import Stack from '@mui/material/Stack';

export default function ConvertButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<CallMadeIcon />}>
        Convert
      </Button>
      {/* <Button variant="contained" startIcon={<ClearIcon />}>
        Send
      </Button> */}
    </Stack>
  )
}
