import { Author, Citation } from '../../types';

export const isEmptyObject = (citation: Citation) => Object.values(citation).every((value) => {
  switch (typeof value) {
    case 'string': return value === undefined || value === '';
    case 'number': return value === undefined;
    case 'object': return value === undefined || !value.find((auth: Author) => (auth.given && auth.given.length > 0) || (auth.family && auth.family.length > 0));
    default: return false;
  }
});
