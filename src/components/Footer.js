import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/DrMundo_2.png'
const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px" textAlign="center" pb="40px">Hope everyone can find the suitable exercise workout ❤️ </Typography>
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '700px', height: '600px' }} />
    </Stack>
    
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px" textAlign="center" pb="40px">Dr. Mundo believes in you ❤️ </Typography>
    
  </Box>
);
export default Footer