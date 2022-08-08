import { Avatar, Box, Container, Typography } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HeaderIconText, HeaderText } from './Text';

export const Header = () => {
  library.add(fab);
  return (
    <Box sx={{ background: 'black' }}>
      <Container maxWidth='md'>
        <Icons>
          {HeaderIconText.map((text, index) => (
            <Icon
              href={text.href}
              target='_blank'
              rel='noreferrer noopener'
              aria-label={text.ariaLabel}
            >
              <FontAwesomeIcon icon={[text.iconImage1, text.iconImage2]} />
            </Icon>
          ))}
        </Icons>
        {HeaderText.map((text, index) => (
          <Box
            sx={{
              background: 'pink',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box key={index} sx={{ maxWidth: '200px' }}>
              <Box
                sx={{
                  color: 'white',
                  textTransform: 'uppercase',
                  fontSize: 'large',
                }}
              >
                <p>
                  {text.portfolio}
                  <br />
                  <strong>{text.name}</strong>
                </p>
              </Box>
              <Box>
                <Typography variant={'h1'}>{text.title}</Typography>
              </Box>
              <Box
                sx={{
                  color: 'white',
                  textTransform: 'uppercase',
                  fontSize: 'large',
                }}
              >
                <p>{text.more}</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                background: 'hotpink',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#66BFBF',
                  width: '150px',
                  height: '150px',
                  bottom: '-120px',
                  right: '20px',
                  border: '3px solid white',
                }}
              >
                <LogoutIcon />
              </Avatar>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

const Icons = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  font-size: xx-large;
  background-color: #66bfbf;
  padding: 10px;
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
    -webkit-transform: scale(1.5);
    transform: scale(1.1);
    color: white;
    background-color: #ff0063;
  }
`;
