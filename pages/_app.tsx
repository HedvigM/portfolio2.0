import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ThemeProvider, CssBaseline, PaletteMode } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { getDesignTokens } from 'styles/theme';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, createTheme, Theme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ToggleTheme() {
  const theme: Theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color='inherit'
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const router = useRouter();
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToggleTheme />
          <Component {...pageProps} key={router.asPath} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}

export default MyApp;
