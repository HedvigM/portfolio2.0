import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconText } from './Text';

export const ForMore = () => {
  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Container maxWidth='md'>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <Typography variant='h2'>For more</Typography>
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
              <Typography variant='h4' sx={{ color: 'black' }}>
                {icon.iconName}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const Icons = styled.div`
  display: flex;
  justify-content: center;
  font-size: xx-large;
  padding: 0 10px 0px 10px;
`;
const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ff0063;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin: 10px;
  font-size: xx-large;
  color: #ff0063;
  cursor: pointer;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    color: white;
    background-color: #ff0063;
  }
`;
