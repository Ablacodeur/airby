import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, FormControlLabel, Stack } from '@mui/material';
import Switch from '@mui/material/Switch';
import ComboBox from '../AutoComplete/ComboBox';

export default function FilterContent() {

  return (
    <Box sx={{ 
        position:'absolute',
        top:{xs:'25vh',md:'35vh', lg:'25%',sm:'25vh'},
        width: "100vw",

        

    }}>
    <Container  sx={{ 
        height:{xs:"12vh", md:'15vh'},
        backgroundColor:"rgba(30, 40, 57, 0.9)",
        color:'white.main',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        width:'90vw',
        // marginTop:'-8%',
        borderRadius:'10px',
        border: 3 ,


    }}>
      <Stack 
        direction={{ xs: 'column',md:'row' }}
        justifyContent='space-between'
        width='80%'
      >
        <Box
            display='flex'
            alignItems='center'
            textAlign='center'
            justifyContent='center'
        >
            <Button variant="text" color="white">Text</Button>
            <Button variant="text" color="white">Text</Button>
            <Button variant="text" color="white">Text</Button>
            <Button variant="text" color="white">Text</Button>
            <Button variant="text"color="white">Text</Button>
        </Box>
        <Box >
        <Stack 
            direction='row'
            justifyContent='space-between'
            color='whitesmoke'
        >
            <FormControlLabel control={<Switch defaultChecked />}  label="Superhost" />
            <ComboBox />
        </Stack>
        </Box>
      </Stack>

    </Container>
    </Box>
  );
}