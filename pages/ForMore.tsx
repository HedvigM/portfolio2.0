import { Box, Container, styled, Typography } from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconText } from './Text';
import { H2, H4 } from 'styles/theme';

export const ForMore = () => {
  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
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
            For more
          </H2>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          {IconText.map((icon, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                marginBottom: '50px',
              }}
            >
              <Icons>
                <Icon
                  href={icon.href}
                  target='_blank'
                  rel='noreferrer noopener'
                  aria-label={icon.ariaLabel}
                >
                  <FontAwesomeIcon icon={icon.icon} />
                </Icon>
              </Icons>
              <H4>{icon.iconName}</H4>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const Icons = styled('a')((props) => ({
  display: 'flex',
  justifyContent: 'center',
  fontSize: 'xx-large',
  padding: '0 10px 0px 10px',
}));

const Icon = styled('a')((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid',
  borderRadius: '50%',
  height: '60px',
  width: '60px',
  margin: '10px',
  fontSize: 'xx-large',
  color: props.theme.palette.secondary.contrastText,
  cursor: 'pointer',
  /*  -webkit-transition-duration: 0.3s,
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform; */
  '&:hover': {
    /* -webkit-transform: scale(1.5); */
    transform: 'scale(1.1)',
    color: props.theme.palette.text.secondary,
    backgroundColor: props.theme.palette.secondary.contrastText,
    border: 'none',
  },
}));
