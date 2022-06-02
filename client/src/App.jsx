import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import BannerPrincipal from './pages/BannerPrincipal';
import { Banner2 } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BannerPrincipal />
      <Banner2/>
    </ThemeProvider>
  );
}

export default App;