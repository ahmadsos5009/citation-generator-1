import * as React from 'react';
import {
  Box, CardContent, Container, Tab, Tabs, Typography,
} from '@mui/material';
import { useCallback, useState } from 'react';
import Layout from './Layout';
import Seo from '../Seo';
import TabPanel, { DocumentType } from '../TabPanel';
import CitationForm from '../CitationForm';
import { StoreProvider } from '../../provider/Store';

interface PageProps{
  pageContext: { id: string, title: string }
}

const Generator: React.FC<PageProps> = ({ pageContext }) => {
  const [documentType, setDocumentType] = useState(DocumentType.JOURNAL);
  const onDocumentTypeClick = useCallback((event, type) => setDocumentType(type), []);

  return (
    <Layout>
      {/* TODO:: add more info */}
      <Seo title={`${pageContext.title}`} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          p: 1,
          m: 1,
        }}
      >
        <Container>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{ p: 1 }}
            >
              {pageContext.title}
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={documentType}
                onChange={onDocumentTypeClick}
                centered
              >
                <Tab value={DocumentType.JOURNAL} label="Journal" />
                <Tab value={DocumentType.BOOK} label="Book" />
                <Tab value={DocumentType.REPORT} label="Report" />
                <Tab value={DocumentType.WEBSITE} label="Website" />
              </Tabs>
            </Box>
          </CardContent>

          <StoreProvider>
            {(Object.keys(DocumentType) as Array<keyof typeof DocumentType>).map(
              (document) => (
                <TabPanel key={document} value={DocumentType[document]} index={documentType}>
                  <CitationForm type={DocumentType[document]} />
                </TabPanel>
              ),
            )}
          </StoreProvider>
        </Container>
        <Container sx={{
          width: '20%',
          p: 4,
          m: 0,
          textAlign: 'center',
        }}
        >
          Citation sources
        </Container>
      </Box>
    </Layout>
  );
};

export default Generator;
