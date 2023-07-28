import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./Feed1c.css";
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  
}));

  

export default function Feed1c() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  return (
    <div>
        <div>
        <div>
    <br></br><br></br>
    <h1>WELCOME TO MY HOMEPAGE</h1>
</div>
<div className="chefimg">
<Card sx={{ maxWidth: 345, boxShadow: '#ffffff' }}>
<CardActionArea>
<CardMedia
  component="img"
  height="140"
  image="https://static.vecteezy.com/system/resources/previews/002/703/297/original/restaurant-food-and-cuisine-chef-avatar-profile-character-icon-cartoons-illustration-graphic-design-free-vector.jpg"
  alt="green iguana"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  The rockstar Indian chef
  </Typography>
  <Typography variant="body2" color="text.secondary">
  Vikas Khanna is an award winning, Michelin Starred Indian chef, restaurateur, food writer, filmmaker, humanitarian and the host of the TV Show MasterChef India. He is based in New York City.
  </Typography>
</CardContent>
</CardActionArea>
<CardActions>

</CardActions>
</Card>
</div><br></br><br></br><br></br><br></br>
<div className="redButton">
<Button variant="outlined">
SIGNATURE DISH SHOWCASES
</Button>
        </div>
        <div className="card">
            <div className="card1">
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chicken Biriyani"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    <div className="card2">
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Vindaloo"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.recipetineats.com/wp-content/uploads/2021/07/Beef-Vindaloo_2.jpg"
        alt="Vindaloo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Goan Vindaloo or vindalho is an Indian curry dish, which is originally from Goa, based on the Portuguese dish carne de vinha d'alhos. It is known globally in its British Indian form as a staple of curry house 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    <div className="card3">
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="chicken tikka"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg"
        alt="chicken tikka"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Chicken tikka is a chicken dish popularised in the Indian subcontinent during the Mughal era. The dish is popular in India, Bangladesh, Pakistan and the United Kingdom.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </div>
    </div>
    <br></br><br></br>
    <br></br><br></br><br></br>
    <div>
        <h3>COOKING PHILOSOPHY AND MY STORY </h3>
    <div className="cp">
    <Box
      sx={{
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 8,
        border: '1px solid darkgray',
        width: 800,
        height: 500,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        placeItems: 'center',
        
      }}
    >
        <img
        src="https://foodie.sysco.com/wp-content/uploads/2019/07/MarcusMeansChefProfile_800x850.jpg"
        alt="Description of the image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <Typography>
      Introduction:
Chef John Smith is an accomplished Executive Chef with over 15 years of experience in the culinary industry. Known for his innovative approach to cooking and dedication to using fresh, locally sourced ingredients, Chef Smith has made a significant impact on the food scene.

Culinary Experience:

Executive Chef, Michelin-starred Restaurant XYZ, New York City, NY
Sous Chef, Five-star Hotel ABC, Paris, France
Chef de Partie, Trendy Bistro DEF, London, UK
Specialization and Expertise:
Chef Smith specializes in modern European cuisine with a focus on French and Italian flavors. His signature dishes often feature a delightful fusion of traditional techniques and contemporary presentation.
      </Typography>
    </Box>
    </div>
    </div>
    </div>
  );
}