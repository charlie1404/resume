import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

import Header from './components/header';
import Jobs from './components/jobs';
import RightSidebar from './components/sidebar';

const Layout = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    /* width: 220mm;
    height: 362mm; */
    width: 210mm;
    height: 297mm;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0 auto;
    overscroll-behavior: none;
  }
  header,
  aside,
  section {
    box-sizing: border-box;
  }

  @media only screen {
    body {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Layout>
      <Header />
      <Jobs />
      <RightSidebar />
    </Layout>
  </React.StrictMode>,
);
