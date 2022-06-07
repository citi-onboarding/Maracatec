import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import BannerPrincipal from './pages/BannerPrincipal';
import { Footer } from './pages';
import { Banner2, Carousel, CommentBox, TimerCard } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BannerPrincipal />
      <Banner2/>
      <TimerCard/>  
      <Carousel/>
      <CommentBox/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;