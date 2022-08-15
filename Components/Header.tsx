import { Avatar, Box, Container, styled } from '@mui/material';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HeaderText, IconText } from './Text';
import ProfilePic from '../pages/Images';
import { H1 } from 'styles/theme';

export const Header = () => {
  library.add(fab);
  return (
    <BGImage>
      <Container maxWidth='md'>
        <Box sx={{ display: 'flex' }}>
          <Icons>
            {IconText.map((text, index) => (
              <Icon
                key={index}
                href={text.href}
                target='_blank'
                rel='noreferrer noopener'
                aria-label={text.ariaLabel}
              >
                <FontAwesomeIcon icon={text.icon} />
              </Icon>
            ))}
          </Icons>
        </Box>
        {HeaderText.map((text, index) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Box
              key={index}
              sx={{
                maxWidth: '200px',
              }}
            >
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
                <H1>{text.title}</H1>
                {/*  <Typography variant={'h1'} color='primary.contrastText'>
                  {text.title}
                </Typography> */}
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
              }}
            >
              <Avatar
                sx={{
                  width: '150px',
                  height: '150px',
                  bottom: '-120px',
                  border: '3px solid white',
                }}
              >
                <ProfilePic />
              </Avatar>
            </Box>
          </Box>
        ))}
      </Container>
    </BGImage>
  );
};

const BGImage = styled('a')((props) => ({
  /*  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('./Pictures/mountains.JPG'); */
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
}));

const Icons = styled('a')((props) => ({
  display: 'flex',
  justifyContent: 'end',
  width: '100%',
  fontSize: 'xx-large',
  padding: '10px',
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
    /*  -webkitTransform: 'scale(1.5)',  */
    transform: 'scale(1.1)',
    color: props.theme.palette.text.secondary,
    backgroundColor: props.theme.palette.secondary.contrastText,
    border: 'none',
  },
}));
