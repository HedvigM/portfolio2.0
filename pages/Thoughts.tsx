import { Box, Card, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import { ThoughtsText, MoreThoughtsText } from './Text';
import styled from '@emotion/styled';
import { propsToClassKey } from '@mui/styles';

/* Link to the thoughts */
export const Thoughts = () => {
  return (
    <Box sx={{ backgroundColor: 'secondary.main', paddingBottom: '50px' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <Typography
            variant='h2'
            sx={{
              backgroundColor: 'primary.contrastText',
              color: 'text.primary',
            }}
          >
            My Thoughts
          </Typography>
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
                <Typography variant='h4' color='primary.contrastText'>
                  {text.date}
                </Typography>
                <Typography variant='h5' color='text.primary'>
                  {text.name}
                </Typography>
                <Typography variant='body1' color='text.primary'>
                  {text.text}
                  <Typography
                    variant='h4'
                    color='primary.contrastText'
                    sx={{ display: 'inline' }}
                  >
                    &nbsp;&gt;&gt;
                  </Typography>
                </Typography>
                <H6Variant
                  aria-label='Link to the deployed project'
                  aria-pressed='false'
                  role='button'
                  target='_blank'
                  href={text.href}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      backgroundColor: 'secondary.contrastText',
                      '&:hover': {
                        color: 'text.primary',
                        backgroundColor: 'primary.main',
                      },
                    }}
                  >
                    {text.more}
                  </Typography>
                </H6Variant>
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
                <Typography
                  variant='h4'
                  color='primary.contrastText'
                  sx={{ display: 'inline', paddingRight: '10px' }}
                >
                  {text.date}
                </Typography>
                <Typography variant='h5' sx={{ display: 'inline' }}>
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
                  <Typography
                    variant='h4'
                    color='primary.contrastText'
                    sx={{ display: 'inline' }}
                  >
                    &nbsp;&gt;&gt;
                  </Typography>
                </Typography>
              </Box>
              <H6Variant
                aria-label='Link to the deployed project'
                aria-pressed='false'
                role='button'
                target='_blank'
                href={text.href}
              >
                <Typography
                  variant='h6'
                  sx={{
                    backgroundColor: 'secondary.contrastText',
                    '&:hover': {
                      color: 'text.primary',
                      backgroundColor: 'primary.main',
                    },
                  }}
                >
                  {text.more}
                </Typography>
              </H6Variant>
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

const H6Variant = styled('a')((props) => ({
  textDecoration: 'none',
  color: props.theme.palette.text.secondary,
  '&:hover': {
    color: props.theme.palette.text.primary,
  },
}));
