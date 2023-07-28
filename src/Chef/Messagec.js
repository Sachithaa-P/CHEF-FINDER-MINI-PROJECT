import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function MultiActionAreaCard() {
  return (
    <div>
        <div><br></br><br></br>
            <h1>Upcoming Events or Specials</h1>
        </div>
        <div className="card">
            <div className="card1">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://snacknation.com/wp-content/uploads/2022/05/charity-team-building-e1651509883636.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Charity nights
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A wildlife charity night could feature animal-themed food, drink, and staff uniforms. You could let out your wild side with leopard print and tiger stripes.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        To know more
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card2">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://storage.googleapis.com/sales.appinst.io/2019/04/image22-1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Traffic light party event
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Invite customers to a traffic light party where each guest wears a red, yellow or green ribbon or wristband to highlight their relationship status.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          To know more
        </Button>
      </CardActions>
    </Card>
    </div>
    <div className="card3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://storage.googleapis.com/sales.appinst.io/2019/04/image52-1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Big eats
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Experimenting with size is a surefire way to attract customers and headlines. If your area is known for something, try to recreate it in a giant form.

Alternatively, hold a food challenge. Make the biggest version of a popular dish and give people a time limit to finish it.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        To know more
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
    <div>
        <br></br><br></br><br></br>
        <h2>My BLOG</h2>
        <br></br><br></br><br></br>
    </div>
 <div>
    <div className="blogcard">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/588595864/photo/steaming-mixed-vegetables-in-the-wok-asian-style-cooking.jpg?s=612x612&w=0&k=20&c=NZWe4QUwFmEqPAwHa3s0u3Zak6JjlRm36gMgmXx8roA="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MY BLOG
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Welcome to our Cooking Blog, where we embark on a delightful culinary journey filled with mouthwatering recipes, cooking tips, and food-related adventures. Whether you are a seasoned home cook or a beginner in the kitchen, our blog aims to inspire, educate, and entertain food enthusiasts of all levels. Get ready to explore new flavors, experiment with diverse cuisines, and discover the joys of creating delicious dishes that will tantalize your taste buds.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
    </div>

   
   
  );
}
