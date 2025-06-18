import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function MediaCard({ id, name, image, species, status, location}) {
  return (
    <Card sx={{ width: 300 , display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <CardMedia
        sx={{ height: 250 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 500 }}>
          {name}
        </Typography>
        <Divider />
        <div style={{ margin: '1rem 0 1rem 0', display: 'flex', flexDirection: 'column' , gap: '0.5rem'}}>
          <Typography style={{ fontWeight: 500 }}>Species: {species}</Typography>
          <Typography>Status: {status}</Typography>
          <Typography>Location: {location}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="large" href={`/character/${id}`}>Подробнее</Button>
      </CardActions>
    </Card>
  );
}