import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import BannerPrincipal from './pages/BannerPrincipal';
import { Banner2, CommentBox, TimerCard } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BannerPrincipal />
      <TimerCard/>
      <Banner2/>
      <CommentBox/>
    </ThemeProvider>
  );
}

export default App;