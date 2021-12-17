import React from 'react';
import {
  Fab, Stack, Tooltip, Typography,
} from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

export const ShowMoreOptionsButton:
React.FC<{ toggleShowOptions: () => void }> = ({ toggleShowOptions }) => (
  <Stack>
    <Stack spacing={2} direction="row">
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        Click To show more options:
      </Typography>
      <Fab color="primary" aria-label="options" onClick={toggleShowOptions}>
        <UnfoldMoreIcon />
      </Fab>
    </Stack>
    <Typography color="primary">
      Authors, Volume, Issue, Pages
      <br />
      (DOI,URL), Annotation
    </Typography>
  </Stack>
);

export const ShowLessOptionsButton:
React.FC<{ toggleShowOptions: () => void }> = ({ toggleShowOptions }) => (
  <Tooltip title="hide">
    <Fab color="primary" aria-label="options" onClick={toggleShowOptions}>
      <UnfoldLessIcon />
    </Fab>
  </Tooltip>
);

export const CiteResourceButton:
React.FC<{ onCiteResource: () => void }> = ({ onCiteResource }) => (
  <Tooltip title="cite source">
    <Fab
      color="secondary"
      aria-label="cite"
      size="large"
      onClick={onCiteResource}
    >
      Cite
    </Fab>
  </Tooltip>
);
