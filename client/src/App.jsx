import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import BannerPrincipal from './pages/BannerPrincipal';
import { Banner2, Carousel } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BannerPrincipal />
      <Banner2/>
      <Carousel/>
    </ThemeProvider>
  );
}

export default App;