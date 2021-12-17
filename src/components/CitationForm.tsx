import React, { useCallback, useContext, useState } from 'react';
import { Box } from '@mui/material';
import { DocumentType } from './TabPanel';
import {
  AuthorsInput, LinkInput, NumberFieldInput, PagesInput, TextFieldInput,
} from './Input';
import { StoreContext } from '../provider/Store';
import { CiteResourceButton, ShowLessOptionsButton, ShowMoreOptionsButton } from './Buttons';

const Form: React.FC<{ type: DocumentType }> = ({ type }) => {
  switch (type) {
    case DocumentType.JOURNAL: return <JournalForm />;
    case DocumentType.BOOK: return <span>BOOK</span>;
    case DocumentType.REPORT: return <span>REPORT</span>;
    case DocumentType.WEBSITE: return <span>WEBSITE</span>;
    default: return <></>;
  }
};

const JournalForm: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);
  const toggleShowOptions = useCallback(() => setShowOptions(!showOptions),
    [showOptions, setShowOptions]);
  const { citation } = useContext(StoreContext);
  const onCiteResource = useCallback(() => console.log(citation), [citation]);

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
    >
      <TextFieldInput label="Article Title *" id="articleTitle" required />
      <TextFieldInput label="Journal Title *" id="journalTitle" required />
      <NumberFieldInput label="Year *" id="year" required inputProps={{ minLength: 4, maxLength: 4, min: 0 }} />

      {showOptions && (
      <>
        <AuthorsInput />
        <NumberFieldInput label="Volume" id="volume" width={200} inputProps={{ min: 0 }} />
        <NumberFieldInput label="Issue" id="issue" width={200} inputProps={{ min: 0 }} />
        <PagesInput />
        <LinkInput />
        <TextFieldInput label="Annotation" id="annotation" multiline />
      </>
      )}

      <Box display="flex" justifyContent="space-between">
        {!showOptions
          ? (
            <ShowMoreOptionsButton toggleShowOptions={toggleShowOptions} />
          ) : (
            <ShowLessOptionsButton toggleShowOptions={toggleShowOptions} />
          )}
        <CiteResourceButton onCiteResource={onCiteResource} />
      </Box>
    </Box>
  );
};

export default Form;
