import React from 'react';
import { Fab, Tooltip } from '@mui/material';

export const CiteResourceButton:
React.FC<{ onCiteResource: () => void }> = ({ onCiteResource }) => (
  <Tooltip title="save citation to the References list">
    <Fab
      color="primary"
      aria-label="cite"
      size="large"
      onClick={onCiteResource}
    >
      Save
    </Fab>
  </Tooltip>
);
