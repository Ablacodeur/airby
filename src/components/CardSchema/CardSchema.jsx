import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Home,Person,StarRate} from '@mui/icons-material';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { Box, Stack } from '@mui/material';



export default function CardSchema({image,content,title,people,bedroom,price,rating,superhost,location}) {

  return (
    <Card sx={{ maxWidth: 345, borderRadius:'15px',backgroundColor:'transparent', borderBottom: 1 ,  borderColor: 'white.main' }}>
        <Box sx={{ 
                position:'relative',
             }}>
            <Chip 
            label={`${superhost}`} 
            variant="outlined" 
            icon={<StarRate />}
            sx={{ 
                position:'absolute',
                top:'10px',
             }} />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
            />
        </Box>
        <Box sx={{ border:1, borderTop:0,  borderColor: 'white.main' }}>
      <CardContent>
      <Typography variant="h6" color="white.main">{title}</Typography>
        <Typography variant="body2" color="secondary">{content}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"  color="white"><Home /></IconButton>
        <Typography variant=" body1"  color="secondary.main">{bedroom} bedroom </Typography>

        <IconButton aria-label="share" color="white"><Person /> </IconButton>
        <Typography variant="p" color="secondary.main">{people} guests</Typography>

      </CardActions>
      <Divider variant="middle" />
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        marginLeft='20px'
        marginRight='20px'
      >
      <Typography variant="p" color="white.main">${price}/nigth</Typography>
      <CardActions>
      <IconButton aria-label="share" color="yellow"><StarRate /> </IconButton>
      <Typography variant="p"  color="secondary.main">{rating}</Typography>
      </CardActions>  

      </Stack>
      </Box>
    </Card>
  );
}