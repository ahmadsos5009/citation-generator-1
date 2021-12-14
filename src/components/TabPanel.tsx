import React from 'react';
import { Box } from '@mui/material';

export enum DocumentType {
  JOURNAL,
  BOOK,
  REPORT,
  WEBSITE,
}

interface TabPanelProps {
  children: React.ReactNode;
  index: DocumentType;
  value: DocumentType;
}

export default (props: TabPanelProps) => {
  const {
    children, value, index,
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        {children}
      </Box>
      )}
    </div>
  );
};
