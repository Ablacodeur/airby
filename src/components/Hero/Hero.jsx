import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import heroImage from "../../assets/images/hero-image.jpg"
import s from "./style.module.css"
export default function Hero() {
  return (
    <Box 
      className={s.container}
        sx={{ 
            backgroundImage:`url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            fontFamily: 'Outfit, sans-serif',
            width:" 100%",
            display:"flex",
            direction:"row",
            color:'black.main',
            alignItems:'center',
            justifyContent: "start",
            height: {xs: '30vh',sm: '40', md:'50vh', lg:'85vh'},
            
         }}
    >
    <Container>
    <Typography  sx={{typography: { md: 'h3', xs: 'h4', lg: 'h2' }}}> Peace,nature,dream </Typography>    
    <Typography  variant='h6'> Find and book a great experience. </Typography>    

    </Container>
    </Box>
  )
}
