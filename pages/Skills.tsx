import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { SkillsText } from './Text';
import styled from '@emotion/styled';

export const Skills = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
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
            Skills
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '30px',
          }}
        >
          {SkillsText.map((text, index) => (
            <Box key={index} sx={{ paddingBottom: '50px' }}>
              <Heading>{text.name}</Heading>
              {text.list.map((list, index) =>
                list.startsWith('*') ? (
                  <Typography
                    variant='body1'
                    color='primary.contrastText'
                    textAlign='center'
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {list.replace('*', '')}
                  </Typography>
                ) : (
                  <Typography
                    variant='body1'
                    color='text.primary'
                    textAlign='center'
                  >
                    {list}
                  </Typography>
                )
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* Is also used in more thoughts and contact */
const Heading = styled('p')((props) => ({
  fontSize: '1.7rem',
  fontWeight: '700',
  fontFamily: 'Roboto',
  textTransform: 'uppercase',
  color: props.theme.palette.primary.contrastText,
  margin: '0',
}));
