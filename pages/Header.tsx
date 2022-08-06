import { Avatar, Box, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import Github from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { blueGrey } from '@mui/material/colors';

export const Header = () => {
  library.add(fab);
  return (
    <Container sx={{ background: 'black' }}>
      <Container maxWidth='md'>
        <Icons>
          <Icon
            href='https://github.com/HedvigM'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='a link to my GitHub account'
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </Icon>
          <Icon
            href='https://www.linkedin.com/in/hedvig-mejstedt'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='a link to my linkedin account'
          >
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </Icon>
          <Icon
            href='https://stackoverflow.com/users/16650863/hedvig'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='a link to my stack-overflow account'
          >
            <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
          </Icon>
        </Icons>
        <Box
          sx={{
            background: 'pink',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Box
              sx={{
                color: 'white',
                textTransform: 'uppercase',
                fontSize: 'large',
              }}
            >
              <p>
                portfolio:
                <br />
                <strong> Hedvig Mejstedt</strong>
              </p>
            </Box>
            <Box>
              <Typography variant={'h1'}>
                frontend
                <br />
                developer
              </Typography>
            </Box>
            <Box
              sx={{
                color: 'white',
                textTransform: 'uppercase',
                fontSize: 'large',
              }}
            >
              <p>+ some thing more...</p>
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
      </Container>
    </Container>
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
