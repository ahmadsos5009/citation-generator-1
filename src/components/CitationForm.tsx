import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import {
  Alert, Box,
  Snackbar,
} from '@mui/material';
import { DocumentType } from './TabPanel';
import {
  AuthorsInput, LinkInput, NumberFieldInput, PagesInput, TextFieldInput,
} from './Input';
import { StoreContext } from '../provider/Store';
import { CiteResourceButton } from './Buttons';
import { CitationOutput } from '../types';
import { generateCitation, storeCitation } from './utilities/citationGenerator';
import { isEmptyObject } from './utilities/object';
import { useClipboard } from './hooks';
import { OnFlyCitationBox } from './Citation';

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
  const [error, setError] = useState({
    articleTitle: false,
    journalTitle: false,
    year: false,
  });

  const { state } = useContext(StoreContext);
  const [citation, setCitation] = useState<CitationOutput | undefined>();

  useEffect(() => {
    if (!isEmptyObject(state.journal)) {
      generateCitation(state.journal, 'article-journal')
        .then(({ html, inText }) => setCitation({
          html, inText,
        }))
        .catch(() => {
          //  TODO:: show error in the UI
        });
    } else {
      setCitation(undefined);
    }
  }, [state]);

  const onCiteResource = useCallback(() => {
    const { articleTitle, journalTitle, year } = state.journal;

    if (isEmpty(articleTitle) || isEmpty(journalTitle) || isEmpty(year)) {
      setError({
        articleTitle: isEmpty(articleTitle),
        journalTitle: isEmpty(journalTitle),
        year: isEmpty(year),
      });
    } else {
      setError({
        articleTitle: false,
        journalTitle: false,
        year: false,
      });
      if ('journal' in state) {
        generateCitation(state.journal, 'article-journal')
          .then(() => storeCitation(state.journal))
          .catch(() => {
            //  TODO:: show error in the UI
          });
      }
    }
  }, [setCitation]);

  const { showAlert, handleClick, handleClose } = useClipboard(citation);

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
    >
      <OnFlyCitationBox citation={citation} handleClick={handleClick} />

      <TextFieldInput label="Article Title *" id="articleTitle" required documentType="journal" error={error.articleTitle} />
      <TextFieldInput label="Journal Title *" id="journalTitle" required documentType="journal" error={error.journalTitle} />
      <NumberFieldInput
        label="Year *"
        id="year"
        required
        documentType="journal"
        error={error.year}
        inputProps={{ minLength: 4, maxLength: 4, min: 0 }}
      />
      <AuthorsInput documentType="journal" />
      <NumberFieldInput label="Volume" id="volume" width={200} documentType="journal" inputProps={{ min: 0 }} />
      <NumberFieldInput label="Issue" id="issue" width={200} documentType="journal" inputProps={{ min: 0 }} />
      <PagesInput documentType="journal" />
      <LinkInput documentType="journal" />
      <TextFieldInput label="Annotation" id="annotation" documentType="journal" multiline />

      <Box display="flex" justifyContent="end">
        <CiteResourceButton onCiteResource={onCiteResource} />
      </Box>

      <Snackbar open={showAlert} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Citation Copied to clipboard
        </Alert>
      </Snackbar>
    </Box>
  );
};

const isEmpty = (text: string | number | undefined) => !text
    || (!!text && (text as string).length < 1);

export default Form;
