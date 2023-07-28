import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Menu.css'
import Footer from './Footer';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Menu() {
  return (
    <div>
    <div>
        <br></br><br></br>
        <h1>MENU</h1>
        <div>
        </div>
        <div className="image">
        <div className="IC">
            <h2>SOUTH INDIAN CUISNE</h2>
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Button variant="outlined" color="error" component={NavLink} to='/Customisationm'>
        CUSTOMISE MENU
      </Button>
    </div>
    <div className="NI">
    <h2>NORTH INDIAN CUISNE</h2>
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemD.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Button variant="outlined" color="error" component={NavLink} to='/Customisationm'>
        CUSTOMISE MENU
      </Button>
    </div>
    <div className="CC">
    <h2>CHINESE CUISNE</h2>
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemDC.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Button variant="outlined" color="error" component={NavLink} to='/Customisationm'>
        CUSTOMISE MENU
      </Button>
    </div>
    </div>
    </div><br></br><br></br><br></br><br></br><br></br><br></br>
    <Footer/>
    </div>

  );
}

const itemData = [
  {
    img: 'https://i0.wp.com/swadishta.de/wp-content/uploads/2021/01/Idle.jpg?fit=1200%2C800&ssl=1',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    title: 'Burger',
  },
  {
    img: 'https://st2.depositphotos.com/1354142/7950/i/950/depositphotos_79501064-stock-photo-south-indian-meals-served-on.jpg',
    title: 'Camera',
  },
  {
    img: 'https://foodiewish.com/wp-content/uploads/2020/04/meduvada.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.news18.com/ibnlive/uploads/2022/08/rawa-pongal-1-166180296516x9.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpa-YKvET35_rygCny4IT12L0p6N6D8w92w&usqp=CAU',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://curlytales.com/wp-content/uploads/2023/04/Lesser-Known-South-Indian-Cuisines.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://static.india.com/wp-content/uploads/2017/04/shutterstock_277804382.jpg',
    title: 'Fern',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAS0fAVMUV4MpgPomXOOgfK7rgbkE9B_CyIg&usqp=CAU',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.chefspencil.com/wp-content/uploads/Puttu.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVa5pu3DoMY2Qg5F8Cb06XHy9vB3MCy6vAig&usqp=CAU',
    title: 'Sea star',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-pkBD-4TC-9vZV2rtOW0QXZm4lxUZOpnuFu_0Hj21mJxYFN84C24o2g6dFO386wSn5I&usqp=CAU',
    title: 'Bike',
    cols: 2,
  },
];
const itemD= [
    {
      img: 'https://www.thespruceeats.com/thmb/hqqNrNhIpqPqV2u0T0K-IUzUsEo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-cuisine-of-north-india-1957883-d32a933f506d43f59ac38a8eb956884a.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg',
      title: 'Camera',
    },
    {
      img: 'https://www.nehascookbook.com/wp-content/uploads/2022/09/Punjabi-thali-WS-1-500x500.jpg',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROblPnX0v2CrmVdSruNygjfj6gMN4jWWdxmrHIj-hnWbFmlDHaGEOPOua7l9Z970h9hFA&usqp=CAU',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://www.thespruceeats.com/thmb/Rci484g2g12snQzgm8DfDAqbGXg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lachcha-paratha-layered-indian-bread-1957343-hero-01-d9a77d131da94bc5ba7d6fe04d806c9b.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg',
      title: 'Basketball',
    },
    {
      img: 'https://curlytales.com/wp-content/uploads/2019/08/Kapoors-Cafe.jpg',
      title: 'Fern',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzFYuQZl63W_yqntpUcb6Nik98S7UUgD2Mg&usqp=CAU',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://www.thespruceeats.com/thmb/hukuLYS0nidDGxPucTs4tLC18eE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/authentic-butter-chicken-1957382-Hero-5b61b398c9e77c0050160f54.jpg',
      title: 'Tomato basil',
    },
    {
      img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-1-280x280.jpg',
      title: 'Sea star',
    },
    {
      img: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/5/16/india-chutneys-full-width.jpg',
      title: 'Bike',
      cols: 2,
    },
  ];
  const itemDC= [
    {
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/13/39/f1/a8/ground-pork.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpgF7SUIMNksT_Z8Hqs-4fzaMVjQq7OI8MFSU3IX8pjwW5G58O_ag8z58oBmqajzf81w&usqp=CAU',
      title: 'Burger',
    },
    {
      img: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?cs=srgb&dl=pexels-engin-akyurt-2456435.jpg&fm=jpg',
      title: 'Camera',
    },
    {
      img: 'https://freedesignfile.com/upload/2016/12/Tasty-Chinese-Food-HD-picture-03.jpg',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://publish.purewow.net/wp-content/uploads/sites/2/2021/12/traditional-chinese-food-cat.jpg?fit=728%2C524',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uO3oD1ob2g5bqfKJILOzSekBLB5GGvnTSzXI5YS9SKXg82BKOqnzqK3SGz_bTGPUgqY&usqp=CAU',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52IU6k-9SOAhgDUBkUfVHr9nJnLrfiPmpsQ&usqp=CAU',
      title: 'Basketball',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQWEJKxvHWev1UhcbBbiQRyGG4FYMKCn0aq7doLphbKH0ypPyQJgBU0qEdCMXE4CAf3k&usqp=CAU',
      title: 'Fern',
    },
    {
      img: 'https://png.pngtree.com/background/20230426/original/pngtree-chinese-chinese-food-on-a-wooden-table-picture-image_2493575.jpg',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://cdn.pixabay.com/photo/2019/12/19/19/27/chinese-characteristics-4706920_640.jpg',
      title: 'Tomato basil',
    },
    {
      img: 'https://images2.alphacoders.com/201/201292.jpg',
      title: 'Sea star',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrYE1kTWxyQeMQLQM7zFSeqT8ctEOp6q1g-dmTVecarlw8A1McjQlt5SwxtH9LuEXyDg&usqp=CAU',
      title: 'Bike',
      cols: 2,
    },
  ];
  

