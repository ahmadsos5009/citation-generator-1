import React, { useCallback } from 'react';
import { CitationOutput } from '../../types';

export default (citation?: CitationOutput) => {
  const [showAlert, setShowAlert] = React.useState(false);

  const handleClick = useCallback((event: Event) => {
    if (!citation) {
      return;
    }

    const target = ((event.target as HTMLElement)?.parentNode as HTMLButtonElement).value;
    let clipboardText = '';

    if (target === 'citation') {
      clipboardText = citation.html;
    } else {
      clipboardText = citation.inText;
    }

    (async () => { await navigator.clipboard.writeText(clipboardText); })();
    setShowAlert(true);
  }, [citation]);

  const handleClose = useCallback((event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowAlert(false);
  }, []);

  return { handleClick, handleClose, showAlert };
};
