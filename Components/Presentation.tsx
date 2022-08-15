import { Box, Container, styled } from '@mui/material';
import React from 'react';
import { Body1 } from 'styles/theme';
import { PresentationText } from './Text';

export const Presentation = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Container maxWidth='sm' sx={{ padding: '50px' }}>
        {PresentationText.map((text, index) => (
          <Body1 key={index}>
            <Line aria-hidden='true'></Line>
            <Dot aria-hidden='true'></Dot>

            {text.paragraphOne}
            <br />
            <br />
            {text.paragraphTwo}
          </Body1>
        ))}
      </Container>
    </Box>
  );
};

const Line = styled('span')((props) => ({
  border: '1px solid',
  color: props.theme.palette.secondary.contrastText,
  width: '40px',
  display: 'inline-block',
  marginBottom: '4px',
}));

const Dot = styled('span')((props) => ({
  height: '10px',
  width: '10px',
  backgroundColor: props.theme.palette.secondary.contrastText,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  left: '-5px',
}));
