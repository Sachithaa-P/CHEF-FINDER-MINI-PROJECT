import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Message.css'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import  Box  from "@mui/material/Box";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
    <h1>REVIEW </h1>
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Message() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = React.useState('');
  const navigate = useNavigate();
  const handleReview = async() => {

    try{
  
        const data = {
            username : username,
            name : name,
            email : email,
            message : message
        }
        console.log(email, username, email,message);
        const response = await axios.post("http://localhost:8080/Review/addReview", data);
        console.log(response.data);
            navigate('/');
    }
    catch(e){
        setError(e.message);
    }
}
 
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  return (
    <div>
        <h1 id='head'>
            Review
        </h1>
        <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">

          <p className="py-6">Feel free to comment your views and opinion</p>
        </div>

        <div className=" flex justify-center items-center" >
          <form
            // action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            // method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
             <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={e => setUsername(e.target.value)} 
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
           
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={e => setName(e.target.value)} 
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)} 
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              onChange={e => setMessage(e.target.value)} 
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
        

            <button variant="outlined"  color="error" onClick = {handleReview} className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              SUBMIT RESPONSE
            </button>
            
          </form>
        </div>
      </div>
    </div>
<br></br><br></br>

        <div className='card' style={{marginTop: 0}}>
            <div id='card1'>
                <Card sx={{ maxWidth: 345,background: "#ada996",background: "-webkit-linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",background: "linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)"}} >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            S
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Sanjeev Kapoor"
                        
                        subheader="
                        Indian chef
                        "
                    />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://yt3.googleusercontent.com/GVTtEiBD6Mt1FR_Y5FKgYa8mHXcJiNfzDTa991tu1LZ3OrOANZC4J1-kSMmuaEys86yY336pcg=s900-c-k-c0x00ffffff-no-rj"
                    alt="Paella dish"
                    
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                   Sanjeev Kapoor's favourite dish recipe "Shaam Savera"
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
                    Trim the spinach leaves and blanch them in eight cups of boiling water for two to three minutes. Drain and refresh under cold water. Squeeze out the excess water, cool and chop finely. Transfer into a deep bowl.
                    </Typography>
                    <Typography paragraph>
                    In another bowl mash the paneer with a little salt and a pinch of green cardamom powder. Divide into eight equal portions and roll into balls
                    Heat two tablespoons oil in a non stick shallow pan, add the cumin seeds, garlic and green chillies and sauté. Add the gram flour and continue to sauté for one to two minutes. Add the turmeric powder and stir. Add the spinach and salt sauté, stirring continuously, until the mixture is dry and begins to leave the sides of the pan. Set aside to cool. Divide into eight equal portions.
                    </Typography>
                    <Typography paragraph>
                    For the makhni gravy puree the tomatoes till smooth. Heat the oil in a deep non stick pan. Add the cardamoms and mace and sauté for one minute or till fragrant. Add the garlic and sauté for one minute.
                    Add the tomato puree and salt and mix well. Add the red chilli powder and cook for fifteen minutes or till the raw flavour of tomatoes disappear. Add the butter and cook for some more time.
                    Take each spinach portion, flatten it on your palm and place a paneer ball in the center. Gather the edges and shape into a ball.
                    </Typography>
                    <Typography>
                    Spread the cornstarch in a plate and rolls the stuffed spinach balls in it. Shake off the excess. Heat sufficient oil in a kadai. Gently slide in the stuffed spinach balls, two at a time, and deep fry on low heat for two to three minutes or till golden brown. Drain on absorbent paper. Add the dried fenugreek leaves and honey to the gravy. Stir and cook for five minutes more. Add the cream and cook for two minutes more.
                    Pour the makhni gravy into a serving bowl, halve the koftas and place on the gravy and serve immediately.
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
                </div>
        <div id='card2'>
        <Card sx={{ maxWidth: 345,background: "#ada996",background: "-webkit-linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",background: "linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)" }}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                K
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVertIcon />
                </IconButton>
            }
            title="Kunal Kapur"
            subheader="Indian Chef"
            />
            <CardMedia
            component="img"
            height="194"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOxUwQ80Pt5iM9gMHAqfNRxepzzrTRJ12XQ&usqp=CAU"
            alt="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                Kunal Kapoor's favourite dish recipe "Ghee Roast Chicken"
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
                Ingredients:
Chicken drumsticks- 4
Salt to taste
Turmeric- ¼ tsp
Curd- ½ cup
Kashmiri Chili, dry- 4
Peppercorns- 8
Coriander seeds- 2 tablespoon
Cumin seeds- ½ tablespoon
Fennel seeds 2 teaspoon
Garlic cloves- 4
Ginger- 1 tablespoon
Lemon juice- 2 tablespoon
Ghee- 3 tablespoon
Onion, chopped- ½ cup
Jaggery- 1 tablespoon
Curry leaves for garnishing
                </Typography>
                <Typography paragraph>
                Method:
                </Typography>
                <Typography paragraph>
                Take a bowl, and add chicken, salt, turmeric, and curd. Mix well.
                Take a pan and add Kashmiri chili. Toss for two minutes.
                Add it into the mixer grinder.
                Heat peppercorns, coriander seeds, cumin seeds, and fennel seeds in the same pan. Toss for two minutes.
                Add these into the mixer grinder with garlic, ginger, and lemon juice. Add little water. Grind.
                </Typography>
                <Typography>
                Heat ghee in a pan and add onions. Sauté till light brown.
                Add the prepared paste and mix for three minutes.
                Now, add the chicken pieces and cook till the chicken is cooked.
                Add jaggery and salt to taste.
                Serve immediately.
                </Typography>
            </CardContent>
            </Collapse>
        </Card>
        </div>
        <div id='card3'>
        <Card sx={{ maxWidth: 345,background: "#ada996",background: "-webkit-linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",background: "linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)", }}>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title="Shipra Khanna"
        subheader="Indian celebrity Chef"
        />
        <CardMedia
        component="img"
        height="194"
        image="https://images.news18.com/ibnlive/uploads/2022/06/untitled-design-19-11-165659208616x9.png"
        alt="Paella dish"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
           Shipra Khanna's favourite dish recipe "Mountain Goat Masala Recipe".
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
            Ingredients of Mountain Goat Masala
            For Marination
4 pinches salt
1 cup onion paste
1 teaspoon garam masala powder
1 teaspoon powdered turmeric
1/4 cup garlic paste
1 tablespoon powdered red chilli
1 cup tomato puree
1 cup beaten yoghurt (curd)
1/4 cup ginger paste
            </Typography>
            <Typography paragraph>
            For The Main Dish
            1/2 cup refined oil
            </Typography>
            <Typography paragraph>
            Step 1
Mix all the ingredients and prepare a marinade. Pour this marinade over the muttton and let it marinate overnight.
Step 2
Heat oil in a skillet over medium flame and add the meat along with the marination.
    
            </Typography>
            <Typography>
            Step 3
Cook the marinated mutton for 1 hour or more on low heat till it becomes tender.

Step 4
Serve hot with rumali roti or butter naan.
            </Typography>
        </CardContent>
        </Collapse>
        </Card>
        </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
    <Box
        sx={{ textAlign: "center", background: "#870000",background: "-webkit-linear-gradient(to right, #190A05, #870000)",background: "linear-gradient(to right, #190A05, #870000)", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:100px)": {
              fontSize: "0.8rem",
            },
          }}
        >
          All Rights Reserved &copy; ChefKart
        </Typography>
      </Box>
</div>


);
};

