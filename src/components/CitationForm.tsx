import React from 'react';
import { Box, TextField } from '@mui/material';
import { DocumentType } from './TabPanel';

const Form: React.FC<{ type: DocumentType }> = ({ type }) => {
  switch (type) {
    case DocumentType.JOURNAL: return <JournalForm>J</JournalForm>;
    case DocumentType.BOOK: return <span>BOOK</span>;
    case DocumentType.REPORT: return <span>REPORT</span>;
    case DocumentType.WEBSITE: return <span>WEBSITE</span>;
    default: return <></>;
  }
};

const JournalForm: React.FC = () => (
  <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1 },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        error
        id="outlined-error"
        label="Error"
        defaultValue="Hello World"
      />
      <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
      />
      <TextField
        error
        id="outlined-error"
        label="Error"
        defaultValue="Hello World"
      />
      <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
      />
    </div>
  </Box>
);

export default Form;
