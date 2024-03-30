import React, { useEffect, useState } from 'react'
import { DataAPI } from '../../api/data-api';
import { Box, Container, Grid } from '@mui/material';
import CardSchema from '../CardSchema/CardSchema.jsx';
import FilterContent from '../FilterContent/FilterContent.jsx';

export default function AirbnbList() {
    const  [data,setData]=useState([]);

    async function fecthproperties(){
        try{
            const properties = await DataAPI.fetchAll();
            setData(properties);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
    }

    useEffect(()=>{
        fecthproperties();
    },[])
  return (
    <Box sx={{ 
        backgroundColor:'black.main'
     }}>
     <FilterContent />
    <Container >
        <Grid container spacing={{ xs: 2, md: 6 }} >
        {data.map((property,index) => (
            <Grid item xs={12} sm={6} lg={4} key={index} sx={{ 
                alignItems:'center',
                width:'100%',
                display:'flex',
                justifyContent:'center',
                marginTop:{xs:'25%',  md:"5%"},

             }}>
            <CardSchema  
            image= {property.image} 
            title={property.title} 
            content={property.description} 
            people={property.capacity.people} 
            bedroom={property.capacity.bedroom}
            price={property.price}
            rating={property.rating}
            superhost={property.superhostt}
            />
            </Grid>
        ))}
        </Grid>
    </Container>
    </Box>
  )
}
