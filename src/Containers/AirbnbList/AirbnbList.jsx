import { Box, Container, Grid } from '@mui/material';
import CardSchema from '../../components/CardSchema/CardSchema';
import FilterContent from '../../components/FilterContent/FilterContent.jsx';
import { useSelector } from 'react-redux';

export default function AirbnbList() {
    const data = useSelector((store)=>store.AIRBNB.airbnbList);

  return (
    <Box sx={{ 
        backgroundColor:'black.main',
     }}>
     <FilterContent />
    <Container>
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
