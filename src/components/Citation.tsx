import React from 'react';
import {
  Box, IconButton, SxProps, Theme, Typography,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CitationOutput } from '../types';

const boxStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '12px',
  margin: '8px',
  borderRadius: '16px',
  borderColor: '#bdbdbd',
  border: 1,
};

export const OnFlyCitationBox: React.FC<{ citation?: CitationOutput,
  handleClick: (event: Event) => void }> = ({ citation, handleClick }) => {
  if (!citation) {
    return <></>;
  }

  return (
    <Box sx={{ ...boxStyle }}>
      <Box sx={{ display: 'flex', padding: '8px', alignItems: 'center' }}>
        <IconButton onClick={handleClick} value="citation">
          <ContentCopyIcon />
        </IconButton>
        <div
          className="output-viewer"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: citation?.html || '' }}
        />
      </Box>

      <Box sx={{ display: 'flex', padding: '8px', alignItems: 'center' }}>
        <IconButton onClick={handleClick} value="in-text">
          <ContentCopyIcon />
        </IconButton>
        <Box>
          <Typography align="center" color="text.secondary" padding={0}>
            In text citation:
          </Typography>
          <div
            className="output-viewer"
             // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: citation?.inText || '' }}
          />
        </Box>
      </Box>
    </Box>
  );
};
