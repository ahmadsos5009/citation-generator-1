// eslint-disable-next-line import/no-extraneous-dependencies
import _mapKeys from 'lodash/mapKeys';
import { Citation } from '../../types';

export async function generateCitation(citation: Citation, documentType: string) {
  await import(/* webpackChunkName: "citation-js" */'@citation-js/plugin-csl');
  const { Cite } = await import(/* webpackChunkName: "citation-js" */'@citation-js/core');

  // TODO:: add styles configuration
  // const cslPlugin = plugins.config.get('@csl');
  // cslPlugin.templates.add('apa', '');
  const cleanedCitation = cleansingCitation(citation);

  const cite = Cite({ ...cleanedCitation, type: documentType }, { format: 'string' });
  const htmlCitation = cite.format('bibliography', {
    format: 'html',
    template: 'apa',
    lang: 'en-US',
  });
  const inTextCitation = cite.format('citation', {
    format: 'html',
    template: 'apa',
    lang: 'en-US',
  });

  return {
    html: htmlCitation,
    inText: inTextCitation,
  };
}

const cleansingCitation = (citation: Citation & { page?: string, URL?: string, DOI?: string }) => {
  const keys = {
    articleTitle: 'title',
    journalTitle: 'container-title',
    authors: 'author',
    year: 'issued',
  };

  if (citation.from && citation.to) {
    citation.page = `${citation.from}-${citation.to}`;

    delete citation.from;
    delete citation.to;
  }

  if (citation.link) {
    citation[(citation.link?.includes('http') && 'URL') || 'DOI'] = citation.link;
    delete citation.link;
  }

  // @ts-ignore
  const mapKeys = _mapKeys(citation, (value, key) => (keys[key] && keys[key]) || key);
  // @ts-ignore
  mapKeys.issued = [{ 'date-parts': [mapKeys.issued] }];
  return mapKeys;
};

export const storeCitation = (citation: Citation) => {
  // const storedCitation = localStorage.getItem('citations') ? localStorage.getItem('citations')
  //   : localStorage.setItem('citations', JSON.stringify({ apa: [] }));
  // if (storedCitation) {
  //   const obj = JSON.parse(storedCitation) as { apa: {} };
  //   // if (obj.apa.jour)
  // } else {
  //   localStorage.setItem('citations', JSON.stringify(citation));
  // }
  // TODO:: implement store citation locally
  console.log(citation);
};
