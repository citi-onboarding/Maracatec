import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import BannerPrincipal from './pages/BannerPrincipal';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BannerPrincipal />
    </ThemeProvider>
  );
}

export default App;
