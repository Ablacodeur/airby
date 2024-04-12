import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';


export default function CardCo({name,content}) {
  return (
    <Card sx={{ minWidth: 30, backgroundColor:"transparent", color:"white.main"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="secondary.main" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          {content}
        </Typography>
        <CardActions>
      </CardActions>
      </CardContent>
    </Card>
  );
}