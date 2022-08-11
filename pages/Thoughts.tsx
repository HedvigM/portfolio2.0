import { Box, Card, CardMedia, Container, Typography } from '@mui/material';
import React from 'react';
import { ThoughtsText, MoreThoughtsText } from './Text';
import styled from '@emotion/styled';

/* Link to the thoughts */
export const Thoughts = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.dark', paddingBottom: '50px' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <Typography variant='h2'>My Thoughts</Typography>
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
                <Typography variant='h4'>{text.date}</Typography>
                <Typography variant='h5'>{text.name}</Typography>
                <Typography variant='body1'>
                  {text.text}
                  <Typography sx={{ display: 'inline' }} variant='h4'>
                    &nbsp;&gt;&gt;
                  </Typography>
                </Typography>
                <Typography
                  variant='h6'
                  sx={{ backgroundColor: 'secondary.main', color: 'white' }}
                >
                  <H6Variant
                    aria-label='Link to the deployed project'
                    aria-pressed='false'
                    role='button'
                    target='_blank'
                    href={text.href}
                  >
                    {text.more}
                  </H6Variant>
                </Typography>
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
                  <Typography sx={{ display: 'inline' }} variant='h4'>
                    &nbsp;&gt;&gt;
                  </Typography>
                </Typography>
              </Box>
              <Typography
                variant='h6'
                sx={{ backgroundColor: 'secondary.main', color: 'white' }}
              >
                <H6Variant
                  aria-label='Link to the deployed project'
                  aria-pressed='false'
                  role='button'
                  target='_blank'
                  href={text.href}
                >
                  {text.more}
                </H6Variant>
              </Typography>
            </Box>
          ))}
        </Container>
      </Container>
    </Box>
  );
};

const Image = styled.div`
  background-color: #ff0063;
  width: 300px;
  height: 300px;
  display: block;

  :hover {
    background-color: turquoise;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
`;
/* Make a style in the library for this one */
const Heading = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  font-family: Roboto;
  text-transform: uppercase;
  color: #66bfbf;
  margin: 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  :hover {
    color: #ff0063;
    text-decoration: underline;
  }
`;

const H6Variant = styled.a`
  color: white;
  text-decoration: none;
`;
