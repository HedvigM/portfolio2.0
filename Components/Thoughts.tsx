import { Box, Card, CardMedia, Container, styled } from '@mui/material';
import React from 'react';
import { Body1, H2, H4, H5, H6, H6Link } from 'styles/theme';
import { ThoughtsText, MoreThoughtsText } from './Text';

/* Link to the thoughts */
export const Thoughts = () => {
  return (
    <Box sx={{ backgroundColor: 'secondary.main', paddingBottom: '50px' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <H2
            sx={{
              backgroundColor: 'primary.contrastText',
              color: 'text.primary',
            }}
          >
            My Thoughts
          </H2>
        </Box>
        {/* mobile view - pic above instead. */}
        {ThoughtsText.map((text, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 900,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '30px',
              minHeight: '200px',
            }}
          >
            <CardMedia
              sx={{
                width: '500px',
                paddingLeft: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  padding: '10px',
                }}
              >
                <H4>{text.date}</H4>
                <H5 sx={{ color: 'text.primary' }}>{text.name}</H5>
                <Body1 sx={{ color: 'text.primary' }}>
                  {text.text}
                  <Span>&nbsp;&gt;&gt;</Span>
                </Body1>
                <H6Link>
                  <a
                    aria-label='Link to the deployed project'
                    aria-pressed='false'
                    role='button'
                    target='_blank'
                    rel='noreferrer'
                    href={text.href}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {text.more}
                  </a>
                </H6Link>
              </Box>
            </CardMedia>
            <CardMedia
              component='img'
              image={text.image}
              alt={text.alt}
              sx={{ maxWidth: '150px' }}
            ></CardMedia>
          </Card>
        ))}

        <Box
          sx={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}
        >
          <Heading>More Thoughts</Heading>
        </Box>
        <Container maxWidth='sm'>
          {MoreThoughtsText.map((text, index) => (
            <Box key={index} sx={{ paddingBottom: '20px' }}>
              <Box>
                <H4>{text.date}</H4>
                <H5 sx={{ display: 'inline' }}>
                  <Link
                    href={text.href}
                    role='button'
                    aria-pressed='false'
                    aria-label='Link to article'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {text.text}
                  </Link>
                </H5>
                <Span>&nbsp;&gt;&gt;</Span>
              </Box>
              <H6Link>
                <a
                  aria-label='Link to the deployed project'
                  aria-pressed='false'
                  role='button'
                  rel='noreferrer'
                  target='_blank'
                  href={text.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {text.more}
                </a>
              </H6Link>
            </Box>
          ))}
        </Container>
      </Container>
    </Box>
  );
};

/* Make a style in the library for this one */
const Heading = styled('p')((props) => ({
  fontSize: '1.7rem',
  fontWeight: '700',
  fontFamily: 'Roboto',
  textTransform: 'uppercase',
  color: props.theme.palette.primary.contrastText,
  margin: '0',
}));

const Link = styled('a')((props) => ({
  color: props.theme.palette.text.primary,
  textDecoration: 'none',

  '&:hover': {
    color: props.theme.palette.secondary.contrastText,
    textDecoration: 'underline',
  },
}));
const Span = styled('span')((props) => ({
  display: 'inline',
  fontSize: '1.15rem',
  fontWeight: 400,
  fontFamily: 'Roboto',
  textTransform: 'uppercase',
  color: props.theme.palette.primary.contrastText,
}));
