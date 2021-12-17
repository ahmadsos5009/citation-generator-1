import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import {
  Box,
  FilledInput, FormControl, IconButton, InputBaseComponentProps, Stack, TextField,
} from '@mui/material';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
// eslint-disable-next-line import/no-extraneous-dependencies
import _uniqueId from 'lodash/uniqueId';
import { Author } from '../types';
import { callBack, StoreContext } from '../provider/Store';

interface FieldProps {
  label: string
  id: string
  required?: boolean | false
  multiline?: boolean
}

interface NumberFieldProps {
  width?: number
  inputProps?: InputBaseComponentProps | undefined
}

export const TextFieldInput: React.FC<FieldProps> = ({
  label, id, required, multiline,
}) => {
  const onChange = callBack(id);

  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
      <FormLabel id={id}>
        {label}
      </FormLabel>
      <FilledInput
        required={required}
        multiline={multiline}
        onChange={onChange}
        fullWidth
        id={id}
      />
    </FormControl>
  );
};

export const NumberFieldInput: React.FC<FieldProps & NumberFieldProps> = ({
  label, id, required, width, inputProps,
}) => {
  const onChange = callBack(id);

  return (
    <FormControl fullWidth sx={{ m: 1, maxWidth: width || 100 }} variant="outlined">
      <FormLabel id={id}>
        {label}
      </FormLabel>
      <FilledInput
        required={required}
        type="number"
        name="test"
        onChange={onChange}
        inputProps={inputProps}
        id={id}
      />
    </FormControl>
  );
};

export const AuthorsInput: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([{ id: _uniqueId() }]);

  const handleOnAddClick = useCallback(() => {
    setAuthors([...authors, { id: _uniqueId() }]);
  }, [authors, setAuthors]);

  const handleOnDeleteClick = useCallback((event) => {
    setAuthors([...authors.filter((author) => author.id !== event.currentTarget.value.replace('delete-', ''))]);
  }, [authors, setAuthors]);

  const onGivenTextChange = useCallback((event) => {
    setAuthors([...authors.map((author) => (author.id === event.currentTarget.id.replace('given-', '')
      ? { ...author, given: event.currentTarget.value } : author))]);
  }, [authors, setAuthors]);

  const onFamilyTextChange = useCallback((event) => {
    setAuthors([...authors.map((author) => (author.id === event.currentTarget.id.replace('family-', '')
      ? { ...author, family: event.currentTarget.value } : author))]);
  }, [authors, setAuthors]);

  const { citation, setCitation } = useContext(StoreContext);
  useEffect(() => {
    // @ts-ignore
    citation.authors = authors;
    setCitation(citation);
  }, [authors]);

  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
      <Stack spacing={4} direction="row">
        <AuthorsLabel id="authors">
          Author(s)
        </AuthorsLabel>
        <IconButton aria-label="add" onClick={handleOnAddClick}>
          <AddIcon />
        </IconButton>
      </Stack>
      {authors.map((author) => (
        <Stack key={author.id.toString()} spacing={2} direction="row">
          <TextField
            id={`given-${author.id}`}
            label="Given"
            onChange={onGivenTextChange}
          />
          <TextField
            id={`family-${author.id}`}
            label="Family"
            onChange={onFamilyTextChange}
          />
          <IconButton aria-label="delete" value={`delete-${author.id}`} onClick={handleOnDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}
    </FormControl>
  );
};

export const PagesInput: React.FC = () => (
  <Box sx={{ m: 1 }}>
    <AuthorsLabel id="pages">
      Pages
    </AuthorsLabel>
    <NumberFieldInput label="From" id="from" />
    <NumberFieldInput label="To" id="to" />
  </Box>
);

export const LinkInput: React.FC = () => (
  <Box sx={{ m: 1 }}>
    <AuthorsLabel id="link">
      Use Doi or URL of the journal home page
    </AuthorsLabel>
    <TextFieldInput label="" id="link" />
  </Box>
);

const FormLabel = styled.p`
    margin: 0 0 4px 0;
`;

const AuthorsLabel = styled(FormLabel)`
  display: flex;
  align-items: center;
  padding: 0;
`;
