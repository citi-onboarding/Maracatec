import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import BannerPrincipal from './pages/BannerPrincipal';
import { Banner2, EndPage, TimerCard } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BannerPrincipal />
      <Banner2 />
      <TimerCard />
      <EndPage />
    </ThemeProvider>
  );
}

export default App;