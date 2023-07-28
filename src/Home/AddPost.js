import React from 'react'
import "./AddPost.css";
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import  Box  from "@mui/material/Box";
import { NavLink, useNavigate } from 'react-router-dom';


function AddPost({placeholder, data }) {
    // const [filteredData, setFilteredData] = useState([]);
  return (
    <div style={{marginTop: "5rem"}}>
    <h1>BOOKING</h1>
<div className="search">
<div className="searchInputs">
<input type="text" placeholder="ENTER CHEF NAME OR CUISNE TYPE"/>
<div className="searchIcon">
    <SearchIcon />
    </div>
</div>
<br></br><br></br>
<div>
<Button variant="outlined" color="error" component={NavLink} to='/Bookingf'>
        BOOK CHEF NOW
      </Button>
</div>
<div className="cc">
<h1>OUR AMAZING CHEFS</h1>
<div class="container">
  <div class="faders">
    <div class="left"></div>
    <div class="right"></div>
  </div>

  <div class="items">
    <div class="entry">
      <p class="name">Rishi kapoor</p>
      <img className="imgcv" src="https://myfreedo.in/img/2019/04/8383184_IMG-20170316-WA0009.jpg" alt="Smiling person"/>
      <p class="quote">"Cooking is like snow skiing: If you don’t fall at least 10 times, then you’re not skiing hard enough"</p>
    </div>
    <div class="entry">
      <p class="name">Rahul Singh</p>
      <img className="imgcv"  src="https://i.pinimg.com/474x/d4/eb/05/d4eb057f10947bfec8ca39e274165771.jpg" alt="Smiling person" />
      <p class="quote">"Cooking is like snow skiing: If you don’t fall at least 10 times, then you’re not skiing hard enough"</p>
    </div>
    <div class="entry">
      <p class="name">Mahir Modi</p>
      <img className="imgcv"  src="https://img.freepik.com/premium-photo/portrait-young-handsome-indian-man-chef-smiling_251136-32078.jpg?w=2000" alt="Smiling person" />
      <p class="quote">“The only real stumbling block is fear of failure. In cooking, you’ve got to have a what-the-hell attitude.”</p>
    </div>
    <div class="entry">
      <p class="name">Rishab Bafna</p>
      <img className="imgcv"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9iFSOes_8PkdjVp74jng_BZYDr6RJsiYdw&usqp=CAU" alt="Smiling person" />
      <p class="quote">“So when people ask me, ‘What do you think of Michelin?’ I don’t cook for guides. I cook for customers.”</p>
    </div>
    <div class="entry">
      <p class="name">Riya Jain</p>
      <img className="imgcv"  src="https://media.istockphoto.com/id/491784275/photo/young-indian-woman-cutting-vegetables.jpg?s=612x612&w=0&k=20&c=ApbmagdwQLmlV7huAT_ppxkV-j2u8ELeL8YB2LpBb8k=" alt="Smiling person" />
      <p class="quote">“So when people ask me, ‘What do you think of Michelin?’ I don’t cook for guides. I cook for customers.”
</p>
    </div>
    <div class="entry">
      <p class="name">Tanuj Jain</p>
      <img className="imgcv"  src="https://dipna.com/wp-content/uploads/2022/01/Ranveer-Brar-696x694.jpg" alt="Smiling person" />
      <p class="quote">"Real cooking is more about following your heart than following recipes."</p>
    </div>
    <div class="entry">
      <p class="name">Aswin Singh</p>
      <img className="imgcv"  src="https://c.ndtvimg.com/food-authors/akshay_chef-330.jpg" alt="Smiling person" />
      <p class="quote">"A recipe has no soul. You as the cook must bring soul to the recipe."</p>
    </div>
    <div class="entry">
      <p class="name">Lakshi Jain</p>
      <img className="imgcv"  src="https://static.toiimg.com/thumb/imgsize-23456,msid-68320586,width-600,resizemode-4/68320586.jpg" alt="Smiling person" />
      <p class="quote">"Cooking is like love. It should be entered into with abandon or not at all."</p>
    </div>
  </div>
</div>
</div>


{/* <div className="dataResult"></div>
{data.map((value, key) =>{
    return <a className="dataItem" href={value.link}> 
    {" "}
    {value.title} {" "}
    </a>
})} */}
</div>
<div className="bcard">
    <div className="bcard1">
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kPq57_Cljcd73oQwsrRVytCNkiGCUyhzTQ&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Dinner Parties
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Customers looking for a authentic restaurant quality meal experience prepared in their home. Generally party size of 2 to 10 people.
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">BOOK</Button> */}
        <Button variant="outlined" color="error" component={NavLink} to='/Bookingf'>
        BOOK 
      </Button>
      </CardActions>
    </Card>
    </div>
    <div className="bcard2">
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://5.imimg.com/data5/KQ/CU/MY-29117278/indian-food-catering-500x500.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Small event catering
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Vacation rental catering, Brunches, Special Celebrations, Party Canapes, BBQs. Anything where customers want a chef to prepare great cuisine on site for 2-30 people.        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" color="error" component={NavLink} to='/Bookingf'>
        BOOK 
      </Button>
      </CardActions>
    </Card>
    </div>
    <div className="bcard3">
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUVExcVFRUYGBcZGhocGhoZGh8hIBwaGhwaGhkaIRwbICsjHB8oHxgZJDUlKCwuMjIyGiE3PDcxOysxMjEBCwsLDw4PHRERHTEoISgxMS4xOjMyMTExMS4xMTExMTEzMzExMTExMTEzMzExMTExMTExMTExMTExMTExMTExMf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABEEAACAQIEAwYDBQYEBQMFAAABAhEAAwQSITEFQVEGEyJhcYEykaFSscHR8AcUI0Ji4TNykvEVQ4KisiTC4hZTY3PS/8QAGwEAAgMBAQEAAAAAAAAAAAAAAgMBBAUABgf/xAAtEQACAgEEAQIFBAMBAQAAAAABAgARAwQSITFBE1EFFCJhcTKRsdGBofAjFf/aAAwDAQACEQMRAD8AJXL2UiVMj7NTI5Y5pIA+LSDOwBBH1qCyNSWIIgwInWOv9qjt3jogHLl68+XzrK2jxNiz5hOw7cmBneRH1AqPu2NxZPgyvIEbgaa/FB8ulZhs0CSAY2/tXrXGnwkHTnI0PsfvqKIMngjiU7xkQDPMEbmfXeo72DKswDTBgyPymvXxOVAviDfzaGDAnwk7j8q8GPkeLnrI018+U0SmuDOKk8iaWrcuoZD8yBGp5VOzojEKxOka6iToNRrUGcMfCYMc5GvqNBvUVt2XVgG1156DaSD1Jpg5gEG+YRe7ncyBHKRuTBPtpSn24uhrwj7Cj7yY9zTJfuKy+EgGOZ9THmdKUO110Nfb2HpAAj5zTMQ+q4jOfpAgtBUyJVa29WLb08yqJcwwHSiNpVIiBQm3cq3axIpLgx6MJZa4tsiVBFErGIwpEtaT1GhHuNaAY29Ioc98x00iR+td6H090k5AstcYxlrOWt286eZyuPR13HkZrzDcSDCBcDj7F4aj0uDT7qCXQV8x1rS2mpMU9U8RLP5EOYqxYf8AxFa0x2Lar7XV1++qGN4O6DMpzp9rcf6l0+YHrVVcU1vQMQDuNx7g6GvbHEQhkBrZ+1aMfNDoRUlSJAYGa4fEMh5rPXY++x9qKWscTAVS7dAdB/mb+X76o4riCNLMweRsqBc3XMIgfWas4R3yKyIuUj4eQ9CPyoD1GryYxcO7NXb0PiG8G4QaL1Hh3b1b5U04PC27YhAogATpJ1AA9fFsPOpuG+KxaMb20PzUUM4hft22uG62dmyjIm/hykEsCIMrVM5Cxox2yuoTFvMo0BBJHI7eXvvQLiVvDW2m4xYj/lIf/I8vnQvinH7jjKv8NOi7n1bc/SlriV9wBlAM6kTGlGuMmCzAdx57N8ZN3Ed2ERLYRiFUcwyak89CfnUHaVrbX2tqsZPWMx+7Sl/9n2JnFpv4luLB65SY/wC2nnGdnlfFd6fhYeIeYGn0rtu1pINiLFlIMmffWqmPYNOn0p/HA7fSq1zgtoHYGpBMbQ6nNb1uPL9eVaYaw9xgFBjmYrqI4Jbj4APavcNwu3bByoPM1IPvOr2in2awpW/lYaEA6rOnIiiXbjAPIvpyRQ4/yzB+VHeHYcnO6JLgQCdJA2FTJYNy0wuCCZketQvcl24nF72OliSN6ymHiHZK4LjZRKzp6VlO3CI2mPV22NIeCeRE6ae/OtrawpgBmO8abbRPqefOoLeQglcusagAbDTUfjNbKhOxI31iYH01qtLP5lvDXyQAVJkSNJ06+VbaGcvPfy9jW1o6bD5wfurcpmOkwdzA1gDn8xvyogtwC1cmVUtwQS43mMu0jQA69azGWFYTAnrH4irV3DzJ8h030FV2tHbWagrXE4NfMgbCquZd5O89P96o3rIRTD6kg7QfSrbIVVnK5jEek7HqRvQu7igxGYaiBIPL0NTCHM1sXZOgkNGvvH4x70o8dkYi6CdnaPSTFN5JYqA2hbbYCYnXY7H50qdrbcYm56j/AMV/On4ezK2oPAlFTU9p6qW2qZWp1StcuZ69E1XRqmR6ip1yVpIqjdWKvG7NaYhZFcvE48weTWoaNBoKnFoTrVe4sGmQZFdX+1E+E9iMdiLYu2rINthKs1xFzCSNAWnccwKH27TOwRRLMQqjqzEKo9yRX0TwfBrZtW7SfDbRUHogAn6V06fO/HOzOMwsm/YuIoPxxmT/AFrK/WaI8IP8BBpBGsjbXeeVfRSLIIOoO4POk/tL2EtOGfDRacySm1tid9P+WT1Gm+ms0GRCRxDxOFbmCuGjNhbQk/4agwSDoANxQTjPDrdtM/eBR0bck7ARuT0ii2CLW8KA6kNbDBlOhBQkEfQ0i9o+JvcuI6+HJ8McjMhvWQvyrPRbapcdqFyvelwSAQsx5z+HpVjGYK3+727mcloOYQBB2A31nKTy5dapC+1zMzMSzEsxPMnUnpUnEHixuIg8xP3/AIVpKigVKDOSblfsFi5x1kGNWIkc5Vh+NdrB0B8hXGf2ccKvHEJeFtsi65yIG42J30nauuYjFqiyxCiNyap5638SzisrzKHGcc+e0qf4beJj5DYVWuYz+Pbt5pZjsNgOVb8OxdtrqW7asbcwdPCJ5ydZn76JXOD2UvC8F8YnX9dKESyD4l1xyre0nWhWO4h4oFTWMUQNaHcLhFDUMWIG1Q4510jnVEYo0PuY0vdyD+XU0RfiLCG4a/d1PKsqmuLr2u3iRsMHtcEQQI1MkefU+1ZbZIGU6cgDp86q3bYiVhiPiyxPLUjfnUlsR4iNdRJHzEkeVRGCT2yZ1BiR+tPyqyxygwCD1PyNVrWIBI9eU/nVnEIC2jyOkfiNfpQgziOeZt3gAgGPx8/OonxQB8QmgHEe0Fq0RbBNx5OYpGWTpAJ3iOVQWu0FozKsAYGoAgzvynTlTKYi6gWgNXDuKZXBIYCInMIGvTfoapYqydIAZRABgNoNB5isDhgAPhYgg76AE8+etVr9goSwceZOke/5mgBjKoT226xKj66TryOo186VO2Tzibh6kf8AitNlu6GWSVYzuCD9RSf2nM33Pn+Aqxh/UZX1AG0EQWjVMtQqKnQ1ZlOSpUqGoQKmw9sswUDUz9BJ+gNQZIksDrWrtpRywqW1Ia2rAAGWCMc3ijrvO20KNagxQt3G7tkCt9tYECCRoohjoNInfWlh4RXxAqPUF5NdKu4nBZRKvnETsRvHI+elUs+tMBB6gkEdw9+zbh/e4+1I0tZrp0+xonyuMh9q7jZH6/X61rnH7G8KIv3urJbH/SC7f+afKuk2h+v17VI7gnqTTUOIvKis7GFUFmPQKJJ+QNbsaTf2q8W7vDd0ph7xjzFtYNw+8qvoxrmNC5yLuIEG8PxzYi0brjW49wkdFzuFX2WF9q5rxHDv3rWkVnYMQFUEkidNB7V0bs3ZdMKhcSCC3h18LHMNBrsaw4xVBa2iqGJl3hQSNDoPE21Zm/axM0NtioqcI7I3m1uxbB6wT8ht8x6UwYfCYW0AkG6wMgHxa9Y+EGoMZjZ+JmueXwp8tzQvFYx4gHKOiafXc/OjOV24ucuFR4hzG8XYaFltDp8T/wCkbe9BcVxJSZVC7fbumfkoMD3JqtgcDcumLVtn6wNB6nYe5oieyuK0i2CegdZ+pj60AFwzQg/DY5jetNcc5VuIegADDkNBTh2p7QIn8NN2iX5KOcdTSTxDB3LTFLiMjbwwjTqOo8xVdbbN8IJ+750QNcSRXcdcVbW4VFoCfCzv0E7DzNX8WkaikzhXe2iTm0I+GSdtvKmTG8QXuAynU/Q1BquIamzNjxBUVmPIfWhHZXEk3XLbtrRPs1w0uBdumRPhX3iTVyzaVVVsoDZRJ9qAmo3GA77RJGuAVlKXEOJEXG9ayu2mafy6+0LcCL3Hfu2RisMQCTptsV0669DVjFYoh9VYk7kA7+3PSdaTezHEFbGs1u6VzW7q5XtjWEJAmWGrKuu9MNjDmCc0EQuhk9Nxy0/UU9xtoTBRt5Jl6ziswmdNMu2q6jQjUjTehPbbizCz3akqzkSUGyA6/wAwImI05TRDCpcEwzbcjP8Aalni2HGJztbJLIxRDAhsiq7TpAnOY6x0qE5a/EPJwtDuLZugQADpoNh99T4HENM5ojz+4jb0pz7KdjAhW5iIfScjDwj1DGKdX4XYdMrWbTLy8I+hH4VZ9RRwJSOInkmc64bxLuLqEgBLoXQn4ZGh121n2Ipjd8xaV8IHXQnTQefOq3bvgFpcObtsMjWhoAT8MxAnmJ061Li70BIOoGsjyA9jvSclHkSxiBH0mCH4YFIZHI8QIDDoZ3H5UK7YE/vLnaT+C0xopLqiZVzTrEwVDPABPPKRQbt1Zy3EeQc6jlGoAB+4fOjxMS3MDOoVeIvoKlWorbVOKsypMWivBmCZ7hIELlE8y8g+mgI96FLTJw/Dm5hbVtFEvd1bq5dlgx0tlG1/AUvKaWNwrub8cyg2IZhohyhgdAY5A/QAVTuYtDqdPikdOUesEV1vg3D7dq0LYggb66+8bUJ4j2Hw1y5nbMN9FgTPU0hWjjjBnPcBjMygblgCQBtAWfoT71TdBPSjHFsJbw2IuW7ckJlCzyJUEn6/fQcJnYKN2YKPVjA+pp6e8Q/gTtX7OMF3WBsjm4N1tN+8OZZ8wmRf+mmgGufYXjWLt4g2hbYoFJU5RlyKNBJ36cqM8D7ZWbwgnKZjYjUbiDzHQGfKpTIpkPhYdRlY1xDtnxxcXiblxWBtqTbtHkVQ/F/1NmYHoR0rof7S+OCxw+49tgWu/wAK2QebghiD5IHPqBXG+BiUC6RJ3H9q7KeJ2EfVOt9nLk4a1/8ArX7qpYrB2+/RyuYvKGTIHhZ5APmraf1UO4H2ht27K22jwW40nUrMAQI1gfOfKhl3taxdXKjKpkLO+hG8Ts31qlsbxLVi4ZxXB0J8JK+W4+tecN7O5jnuEMskBFkTH2jyHkPmK14J2gtYhsqnI/2WO/oedMfDMQEkdW18tqXtN0Yzca4lzCYRVUCIAEKo0A9IirWDWW10jy/GtUxNtwcrBl6rBj26fSvLbshlRmHUa/3pwUCV2syt2vsJdTKwBK6qSNj112nbzpHxGGdPiUin/jN4G3mML5nQT7zS9x233mHD29rZh4jnoDG+pHy2oHB3RmJqFRXeoLhqyyCobkdKER5jX2Sf/wBOP6Sw+pP41Dxe7ktsfWo+y7nuWnm5j0gUN7W4mFy0B5NTQ0OLyfMT8RdlieprK0Y1lMmxLvBb2BW7nl1kNMgHcdZro3ZjtDgkwuQ30zlmJDAiQToNRB0jnSWeEJzRdN9Kr8UwmHtA5lUHkARMx1BqwCCbnkHQgVcav2idqLX7utuwUZnQSwiEXoOjHbyHtSL2LxzfvHdLlyOCzyNQUDAEdCZAPlQXEXWaQqGD0Gw50U7H4ZkuG6QR4SB6Tr91MIUKYhdxYTqQti9ayLcCXF+FjqJHJgDsRWljh9y13lxHDNE92k5c/kCd/lQ/D4QOi3VOoPiBEqR/Uo186gx/Frlm07G4otZl7saEyDORYktoCInQHU6UgDiWj7yfH4t3RBfHhZg0FChlIIkMSYDFdeqjpVA4gMwCHUyZHL7jVX/iJxP8S4jAkAABohQTHLUnf3qfBqi8mEiJgH9fKobujDUGrEtXCJGmfQwyzMkEMQy6jdvnVbHYe3dTu7isQDKkscyctCfxmtbGCGZSrjRlJEEeHeTyOx08qnsYe+1xAhD5mnKGGxMkHNAGm/TX1ol4PBim5H1CBbnY5wWyXgADAFxdToDupjnG3Kqb9nMVrC23A+y+/sQK6xwjg+HQHOltnJMtvOgHPmBpMToKIjh9i3Ld1aWJOYqs9Scx1+dXVRq5lFmF0s4kOB4zwj92u6kARlOpMDZtBJ3Ogp07LYVcPbUOys7sboI2ggWxHMgwSDzDDQUbw+ONzEd8g/gW5QbTnYDxlekMV8tdPFS12icWryFCWtqxUMAYA0Y25PNJH+8gIzBmWx1ctY1CPtPdc/Y+0K4zBW71wGzee20yQqk7RmhhBHpNWMVdxNu4R3lvuUWWdviECWBWQNpgifahRwhLK1psqHx94HHgMDMdZ0MaiI+Zpj4V2YN+33l27cAuKPCIkoDKz0nUxqdd6Siluo3IwQWZz/jtlGDXnfMzEOcigEZ3cZZJP9O/ShHZ7DtcxVtbalsrhyOYRPGWMbaL89OddixXZLCIpm1nByznZiDlOhIBA5kxEeVXMPZt2kyW7aW1BPhRQojbYCrHQqUrs3ETg3Gykpc3YjxuwXKBsBMyI+ZJnyJ4TG2ihfu0W5qWYAQY/mnaOc1Q4oEwjZnICsxCtmI3BaGUnLOnxDeKPcE7Md4jC/oly2ylAdQrqV1MaNDecGkhCeBLbZVAuck7bcZt32RbJcopZyXkA3HCBiqnYRbG/MmoMGnd2xIJJ1I9RoPOPxov20/Z/fwT51m9hyf8RV1Rf/yATl0/n+E+W1AsfdI2YKTrO3nA8qcwqlldWu2M2u3J8UsPX7qqo/iMkmOQ/Xl91GuzHZK7i1Du5CGNzrHUCmnFfs8ti0zW3c3AJUMYBiOmk6UJdQahbHPM5zeuLuo18vz36bV0bsZjjiktq5JOY2ri6QwK6E6dByjciuecQs5LjI4ysNwQRrtPvRfsfiXti81t8oVQQejkwp/DXr50OQAi4eMkGp1Th1i3ZvEtdJKqECkABToTymTpvsNt6NXcOlyG1B8jv50pcCcXVFtiRlOZoaBmJnbeCZJkk8tAKMpj0Ru7DAmeVIuu49hfUk4jwnvLLLMsDmHWRO877n50tYy+696JgOZMkAkSDoJ6gD2p8wpkStK3bLhEt3ltM5IJ7ucp0IzR13GnrHSubaBubqK3G4v4WytxC63ASCAVg6TMST6H5VFhlBYSJHpoaHY/E4i2gdrDWrZ0DNbYCZIjMwABmdKo3bmI0dlu5eRKMqkeRgA11ewjFPP1GPB4vh0GQOqnoI39qVO0V/O0gyKFfuLuSVBPMjnE7/Wt7NogFTS9vNz0Gn2gAr1K81lZkPUVlFUs7xHDCOFtrnWWgFs2sabRtIqLEcPtOcxtp10A/CsY8j+uX4is4bekDrA09q9SmHGg2gCfFc2qz5CchY3+eJ5xHCWu4IVAjHKNBuJkweW1MXDeCqMMogSUmfVfzoFxHXIvU/kPxNWRjHtAlWI8uR9QdKzcmjDuwXgCv3M9Hi+KNg02FsostZ47ABofvAvFcRi8EmcHu5MCSCGPoDP3Us4rid3FXla8xdtgAICjfKqjbb1PtVztRxm5fYC4wgHQARryERr/AHodwi3N0TsJPuBNVlxbTXmaDZt43C6q6j5wS5buQi2wuwFr4ysaQWCjUwTHtV/FW1UtCMMu5AMAyAQJOhg9OVDMOhcDxsrjRLimGWJCkMBMc486O2+CXbuHVGZ1d3zXGHi1UQTmjUkxqYrs2lbGR5scSNF8QXUAjqjRgfGtcGMWzbzsBnMTqQFYjNprAg028NtiyAsSx+Nufp5Dy586o8KwuHwRLu7Xb149291uQIJyKOQ8AG+umvKmPh7W0Xwu5H2WeRp0A/OuQJj5fuNyln4Tr+ZYsrIBEGddaAdvMQRbWyCVW5mLwdQFKxDcgZM+kUfGISWCrmYKrLGmdG2ynaZBGvQToQaS+1CuWS6HNy1ck2866p1SDtpHSY1Gk0WXOCpAjdDpv/cFuh/sxo7P4NRhrahcoKSVjQ5hJ85M6mZJoJ2i7OG4lxLZALkPrJ1BAMQRGgidNGHQzQw/aq/aUfA6DSGEED1Uj8asYftyhY95YYGP5XzddgVAG/WiTPjK0Yeb4bqQ5ZRfN8GacG7MLaIzMWUQTmEzEEAAkqoBEmROvxUxdl+JumfD3XzvbjxxGdG1DwNAdYIGkx1qlhu0+GaP4hTydD96SKoXMXb/AH+1ctsri4mVyhB1OYDQaz4U38uhoiyUNtd/zEJp81sMinokWPIj/buq40IO/tWlzBIdTPPY6b9PahWHxGUyJ8/MUWuXxGh/R1/GpdKlNWuVMayW1OVR6Rv69aHPxdzsBUmKuZyZoe1rWksSOo1QPMuNxItKsARBBB2IOhFcR7XcLe1ddAvhDeFoJGVj4RmIEmIn0NdbO0/rWocXZt3ABcUMAZAYbMOdCWhqIucBxvcWLZKLJVAVZiHB2ICZdTIIiZ0pju3cSrqwRntssqLZAyk/bMgn2MeRqvxUi2puJbU5jBaPgLGWYeZBJ9ZrbCYw3FyknbKuXwAMNiSZafTqRFVGFNL6/UtwB+0Ps/nu2nAm4/gIjfTNz8gdT50OvWrWCEDCs0wS9xsyzrHhA0jMRB600WsSe8W3dYM4B8XLMIAAnmQWMeVVe1D5LewMkKZ5AzJ+lBuJ48TgtsAIqt2kvXPAiqi/Zt2wPvmr3Z17hvqbhYzI8TTHhzgxOmhEeRnpRvs32StInf3VYhlkJJhVPiViBq0wBGwkSDOhnh3C/wCIcQchzKoWAfAhgBRpHOdOUdKlgAaEgtTbb6hrhLFRDe1Q8WnOrcoI/GrVhczAAaxp9POt+PWotg/1DbYyP1rsaXqVJ07H2ERkYAyxwuTbWRIPlqYPLrEbfKiBZY36Hyjz6bbmqPB3/gIOctEb6MdvprsJqe3KHxHUnRQf5j0n4iRJM7QfM1d0xvEp+w/iVzyYjcf4CuFxIv2xFq4CrJ9h2EgD+hspI6ERsRQXiWDRtcommP8AahjO7t2EH899Q0beGTA8h9/nNB7w0qrqBTcTf+Fn/wAyfvFm5whSTXtGIrKXuM1aEFYy5CkzEf7VnBrRIUsQGgfCwMeWmlTY7hTNhrl37JUqNdQD4j7DX2ofbxgtqSAoMaRO+2s16oZlLMfAnyQaPJtVK5aql/GPmc+Wny3Pzmq2Mv3O7ZfiBB315dfwqthsVOk1mLVm/mhYOg5n16Vieq/qFgaJnvRosPy64SoNAAX9vMVnxMOWbfQex3Me1MHCbCNaLWwykElXY/E2WDvy5ctRVY8ItkaqZ6yZotgwEUKBAAgD0rmy31A0+iKn6qIhXBXRCjaVB9tNPXyqLCcRu96c925BZvArsAdTEgGIA5elZgEBJjlG3n/cfWqjYRgxggEmRJA3M6E+1ajZ1OJWPm55bHomw6vLjXwQf8HkS9xO9nsle8i5KlTuQVYQYnoPrQvD8TxWGvCbjOwiLcQQN5eRz6an8SOD4c0hmuLIlssHWNRJ9daJXuCYX9xGKdW7+5dINzM8R3uQMVnLosHaqLsrmhyZsqrY1s8QnwLiwcWmQkm3nKjpacKQvrJUR1URW3ai2xtAoAbecONzplYSDOg12jbn1UHRrVpbLEh8xDgHRlUhkaRvqwg9Ka+znExeU2Lx+LZzyf7fodA3WZ5khLoqsVuaOnD7BnA4v/XvAKCRHX9RQ9T4iIiKNcUwL2LjKw0kweQPSfqDzHnIAnEIA56mKr1RozeRw6hl6mmUE6itri6R1qRRzrawq94geSpYAgCSZPwgdTEe9So3GhOyuEUk+OZ0nB4gPbV5k5QSOhIDQfPUUZy5kUjmo+4UBweFCKFG7bwTEDUnX1j3o9hUJRY6aVrZBxPCj9UHXsIwM1WxAMRRm+jRQXiTxoefSq7CNBlcIXYKOv3c/SrFjDojqCM7dTy9B68/KtMFcGZoGoUD/VPT/LV/A4VWI0AI8vz/AAJpREO6gDtVw5ne26N/QqEaF3MySNYkKSIPwih9nA4q0w/gksNM6pm020I2+hpxfDo99YIOQE+WaR/t/tV42yYM/L+4/WlLOIGNTOV4ihZ7N3bs5kCg6zc5n/KNT7xWvBMMqRaUtCsQwJ1AJJyyOUGm/EXSqn0P49falTh4y4pl5OM+nXcDSY2051HpKooTvVZjzCXEE75hZtsBClmJ0IEgfMGNOsTtV/FWnYqEGxGaIGgUgAzsJg+opbuYm4LrurENOUmFmBAAkSJGUajpUd669z43YgyYJMb9KyT8QRGawSSfxwPEiyDGjC3EtsS7pI5FhHoPPnUfH8fbe0FRgfEDHlB3J9aWQADpt+jUyHoTVbL8TZ0KBQAeJBFmzGXs+4FnNEfFm84JOnQgfP7truLD3MgDoQCPEABlOUkkehTXQjNy1FU+zzZlKE7NPqSNB6eEk9YipcbcFu/bkaXAbZPRlVriiOhVXE9CvStzRuG06kdUB+0CueIm/tffK+CXZRcJA5chofwNauNJrf8AbRbLWbF1drbifJWiCTykjaqN3GqqAzyFBqRzN74YfoImNWUL/wCKJ1rKr7TNaGi4ew6K8rlZTBnWDpAO+u1I+PJLZdBGpgbf3p54s7W7DEaEWxPmSPEdJ8/lSQi8zqTWkmTajL7meVXAHzrkI6B/c/1NsNby1aGtQWqsqtJM106nipW4ArAta7VEO4R4cY9/w/Rr3GXbAsK7WxLPdMkKYCXO7Df9h1jSq/Drvn89Pvql2jxNo4ZrYIN0Mw0LSFa5fuERGUzntazI25mtd8argUH/AK54vHqDk12Zvvx+BxLz4m3kLAkgjRp6e1OC4Rn4RaAhvCXiMxbMzNpBg6co5VzU30OHy5gNwxknLJO4XXany1x9Vw9q2RbUW0RZe6onIrANvmU6g7cqzV+gkj/E18hLgRNulhdKkki2MgDTIAkkGdZBJHtV7DuRBG9U+MYo3MRduaHO5MjUHzBgSPOvLWKUcjp60tyWNz0OlULiCn2nSeH4xcRYTPbS5cAg94JUKpgM2hkyIHM/M1Pe4Xh7lvKbSDmLioLcejbsPmKTeA8eVZV2zKxEKx0JAVFUgA+EbxsfPm3mxcPjy6Ekm5dYZIA2VAY/1Sa4We5l5g2F+DQuxzFTH8MuWzBUsvJlEhgNZ/PpVXhOLtJiU7xWYkPkKgFVaApdtZ0BIETq/pRziPaJbYuC88kLmGQ6gahXXmpBGh0gimO3h7Vxhce1aNyAc2UTrBiYkj1qzpsX1bvaL1fxFnxnGw78ia8NxquWANs6D4bgZgOUqB4dSedM2DXwLH2R9woJfRCNgI20Eg+R5HzFWeD4himu6syMdpKnRo2Egq3vVzJyLmMvcLFJpf7R4m1aGpzOBoo1Pv096Mm1mHxPr05fKgnaLCAhAZJJiRrBMxMaxsNBpVdjQjUFmoC4ViiXd22ZNhyAI/OjuAxSmUBhipgDQH067j5UDwfC7qXLmZ7WUgBMtzlrMrlkHbrVvh2BNq8jPcJgMQq22APL43ygRO1IuOIl7AY0WwNCQdyNdNwQD5RM1eTjdk/zHbYqZ6GYgUp43Hd6wNi6EQSWLgMxJiCAIygevOvLNvJ4mvPdaIhssb7gBZn1J3iuDG6ricca7bLc+0Lcf46FXwAn+pj/AO325nntQnstJu3r75iAir6ZvETG2gVAemeNqH48Xbj6W7h6QjH08qO8CwX/AKUo3he5maOYJVVWQPIDQkRO07Q90a7kKJWF2c3U6mOpNYtLyXLtu8veAgExMyp5aEaUYx2MW3ba4WAgaHzPTz3ivKPpX9UKezH48TZHCr2ZtxLEC0hdgdtABJPtQ3s9xG7dLXG/wyQFUgaROaPLb5UvDtbcRy+SV2U8wNonnTDwDtCLwIVBmA5gfo1pj4eoxlR2fJl58SohxgAn3/qOHAsSVuEAA5l2PONdydNJPtRDjdvvLBdTrbPeLO/h1aeakz7QPOlvAXclxGuEFQ3i/wAp0I896cLzKyggghxuDIjoep6ddRV74fjbHi2P4Jr8GZuRCrQD2jwa3sLcRoYOMxP80nUSNjGkHpFcZ4r31pjbcmBseRFdm4dfz4REUMAqG2c6y2a2TbYEzIINsicuuh0Bmk/i2GS4CrqCKVqc/pZRYsESzpszY7qc+XF15R252YSTDGOVZRfM4feXvnjDGLwveKVW5lncbg+0igeL4ddtySpZR/MuojqQNR7/ADqW3xHI2RyoYR66iYn3pm7O8StiS0MdOnh8yNxuNa3tQmnKFx39p5D4fn1+LKMLcr9+wPsYn2LoNXLbU+cV7MYa+M6r3bnUOkiSeqiA30PnSnjOyuLQ6ILq8jbaDH+Vo+k1lET1uLOpHPEotcHyry04efuqpflGKEMrKSGB3BGhG1RWyJ0mfWoAjmaEeHMQSo0hmBjyYjcyT86i4/g2uSACSY946/IVZ4QPE3qT8zNX71ud5Cj4iOWaY+41sakgaYN+J4nRAn4k2Pq7BgHhGAa8y4e44tBlYBisgEAkDluRFS38My3CXRlk6EqRI5ESNQY0pm4Lfso5m4XyZSZEQ7ytudPM/TShfajENnsqWMrb115iRH1FYoclp6ZsFELd8gcQLdfKpOmgOnmBWq3CdSPv+6tHuIFIMyQdh1qfDSd9dCfeKMCzU2GcY1JPQFyEYgbCfpTCvbV1w62mXNcXZmPh/pYgbkbfqKM9jLqsqW7di01x4Pe3Nl1y5QqrJ155vajParhr22ZmtoVbQZHOgPOHGhHlMg8uRhSBcysusRztZevvOV2+LW2uK1+2rlSSLktJ1zBWUGGQaeGOXmaeMB2nLISlsXN5UXYJ81GUzz0GvkaE4Ak37iEmAQQPpRXG4ZDZRmzEsi8zvpOlNXMU4lHIq5DYFRh4fjmu21uKsB5EDXxDTdgD0OwI1pj4cjLbGfQkkmDpJJj10ge1cyt4dQj6ai2pHkZWTRH9nPEApvBm52wM7ExAeYBOkmPpR/Mb221EeltFzpSf5vupZ7bYVDYNyMpjOzqcpPIKxgyCCAQCD0onex9s22htYifImDHtUXamHw7NBZAPhAnMfSDp/eiYAichIYERP4DxhGsshuW7QkeKNGE+PLmjLpt0o7h+0+FB7sXMxA/l8Wm0nKK5KwBxBOWMxJOkCRpCqNgB5Ue7NYNHN0TDkkDzygMF19T9Kp9GXWPE6CON4Fj8dqfMAH6ijfA8baZGFsqVDcogSAY026x51yw4BAMxQNP2vL/apVxzKp7qLazOW3oJiCfpUo1G4l6K1OlcUxCg7wDp/wDGeQM/hzpe4pxFN1ZdTOo5SGdmIkgaBQRsORBmlS3inuSHdogzJ5GJny0GlV7uKQMYZm0jXn89658kdg0rOOJYfEi7euXJ/h2ydSdFzHNPsNhvryofeV8SwOUiyvwA/wA39R60W4LhluI2ZRlLaDqep60ZxNq13VtFXxjPnPkT4R7AVn5e2YHn/uo71RhBRf1dE/b7QKmHR0FhkARirMoIElQJ15AkA+tBuJYdcPfNyyUVcwUW82YxGpnppT32awdu5dUNbBUZmMjcBToeusUHxGFtF/Ci6npQfNemo3C7ixmPmUTijdQMJE6R50Q4LimQQX286q43DqWyIADHtpUFvhN4DxXEjos/lT21GNa3GiZPqAjmNKYwEatQHHDxEDrXnBMHdvBzbKnu2ytJjXy8t/lTLwnhGWHuwX6chQajAcoUr/wgkg9QNZ4DdZQYiaymzvq9ofkU9zOucRfs5iLtxiQBrqT51R43wm5hWXMwJI0IOo/KugpcJUnaBPy3obYwlvE3M11M06Ak6+R/tUYta5Ntwo7ikzM7ixxJuw3aO+6BHWQi6ORow0GU/wBWpM+VOmAxQOQuZLJMnlsY+sexqlh8Paw9sKqouygEdalxF62IDAR5cyaX/wDSJtgvHiXDp2ugRcBcYw9rGsyEdziUzKrkeG5l0AJWcw6HRh0I0oB/9FY2MxQDyzrP5fWnnDWrYulhm10ToORpjwNnMIZx/aoHxB3NKBcMB8a/XOVdnMFcBZWturrIKldYDGD5iCNRNaccsvCxbY5mABg5TE89tN/auocYTKhCAaTl6+e3LyrmlziV1xL52VZGYqY3JJ+ZrVHxP1cHpleRX+pR0XwQPqzqdxo3Y/MJcJ7MrHeXiQrEMoQ66GVknlzqjxzhyPcAtjK3wjM0hpIPTw6jlVzC9okOREVoAAYEgz1y9JqfAWsxLLauN4pQbHQyDJ6VUbIQQfM3Ww49KpZx+P3iRi7LI2Vl1H639qk4X/iqu2aV12EgidPWnLtD2Xe6Ea3CNqWW4wJE6mGXfUfWoeCdljZuLcvXFeNlTkepPl0qwHOzcBzK+fWYWxkA9ioW/Z1wW6rKXUottjM/zMCdhzHnTxxbh1u/8c+UHahOE4uiALkb2irA40v2Xj0qk+XUsKIIH2mNuUm75izxHs22HZ7ieNHdWJjVAobTzXxfdQDimIK2lU6FVA15afSuiX+LWmBXxaiDKn8qU+N8JN1IDCTqXZJb5yD0pmny5QSrqfzU5sigQEMUpt3CGHwAb89D+FS9g7JuHEQuYqbZAmN8/wCVAuJcNuW7YIQlpM5ddNddNtvrR79kAZe/JBE93uDyN3rWhjUFtwgF+IZxlu4mrqFRQXbXZV1LGDyANbDtbaT+GcRaUAabkkdfL0pjuOHuA6GFK5SNDO8nWk/tb2UwEFoa28AxaJygaxOcMOohROm3OntxzBH1GooY822xXeWsvdnaDsI1nXST+FWeH3mR3KZZDhhrvoNjP9P1pc7TcJ/d7720ZiFy5TIMyATqunXbpUIx91cy96VKEDwka7jRl3HOedK2c3Gs5rbOq32ttazD4W8S+THdfnIoNh8MzvkRSM0wD9QCd6rfs64odbV051uS1ssZ8Q+Jfx+dNltQ1zQeS/0zMmszPmfA5Fd+ZYUI4XwfMD3OC3WtEINQfgjViefSpcH2QuaNcOXqo+6aMYN7ys58dyNlXn5zVu0mKuGWUWweTMCfkPzqkdTqcnGNbHvLhcodoIodQOLNu2GS2SYE+nvWrOoXNlfz0+s1Zvdl7pVpvqpJOy7ydOdVLfZ3FopUYhGHKQRTvRzN9TCVdwZwWXjz/cnucVdO7VTAVHG3K58WtQWsnibMPCJn8KHcSwOKVRbNouOTJr9eVT8M7PYq4kOotqebHX1gUA07swLRLCmIHU24SSwNzLIYkanWBRbCYC4/w6KetE8Bwu3aUD4iBzq4+JG3Kj+SORy+Q/4+3iSF95V4Jwu3hkZU1LGXY/zHX8zUuKxMVWxOL6UMxOImtEChUMCWmxdZQj94HWsqYUlwlibYUr8SNMHUMCNPMR91a8NwcXUIg8/fTLp86E2uKtbaCCUSBr0Okg0wcKCk3bouqAy+FSOmoPkdxWQ+NmND7yrhdQ4LdCQcYzyzGAXJC5tpNDuIsS6zyUARsaziBJCkknICxB5k0vYbF3nuAAyJGh5A+dKxYiVPMPPq2bICvFdR8wNwIEZ2BAk5esjb7qG4rjTHNck+GNOmugAEVVuYS4GS73lm2qiMt14La66ERH51JgLdjvRddgwzEqZ+Jp8KiOQ/KreBEwqGYXf+Y99VfLG/xJcTxXGqMrqpB8RRSMyjcZhv7VJw/HXLv8O4jWgVJBYQNBMeVDLmMuW7txgCzMST4flVrC8T7wsbrlCBsQfupuPOFJ+kfxE/NuBwvErcKwgtO91rYYzAU9eRAqbE8ZxI8KW8gPPWi/De7ZTcS4biD7QiCKl/eVuIxkCKk5SD+nmXflsmpXe7H+ooPjMYxJMaeVWcDh8Xd+G5lHOiHCsQO8YaEGiN9O78a7bkcq5s7VxBT4Ztfa3MUuIYjE2XytcJ6EVFa4xiB/zHo4HXFXoiMp1A8qNf8KsAEBQWo1z0Oe4vP8NZWIXqJI45iB/zGq9Y4/dO9w+8Vax/AkOYqIjlQpezWKuNFq0XA3MqI/1EfSrGPIG6MoPgdLsQvhsXOkgE76iCDUr3TgsQhUq1u6JYEg6jz5dKH2uwuOPxLaQf1Xf/AOVNEeHdlrdlw2Jvq5HwpbJ+pPL2prqSvHBilBviPNl1dEuCyqhxOsEgEaHRZoDx+wWUqVyZgTCABt9AJOXkBr51BxPthbtt3YuKIGuu3QVYw97v1FxuYhdTt1igWwbJMs1xOV9oeHXbhnu3DAmMxnTzMkfKgLcJvgwbZk/rnXZMfg5bYRQm9wa5nLJcUTEqynbpIO2/KnDIIG0kzmzd5Za00Fbiaj56beVdKF9r1m3etZgXXVRuDzFa8S7PW3ibQzRqReP/ALlmPKp+y+FawcpUqm+jhoMexpGZVypfkRuL6Xoyxf4vdsEOLdzKygMAhMEbbCh2L7YX2JCWyWjYgj8Kb7OPMbggdRr8jUqY63MlAPOKRixemoVTxL5dfaCezTYm5bFy+Mk6hecefSjJvgedV7+OVtjVZ8SBy+dPHEUxJhizi1AqviMd50Ev8SA2qBcWDuY8qi5G0Qs+KqvdxPnQnG4/IJAoaceXBkup5ZcpH1INRcEkQzfxgHOg3EuMIo1YD3oLxB78+EsR/lj8aD4m3cJ8VufVRTAnuYs5faE7naa3J1PyrygncP8A/a/7a8o9ixfqtH7C4m2tsl1zaZR7/lUGCxHeQBpBg+lZWVjFQRKk24ljO9VwmnhK+emo1PkSKHWrDm1nRf8ADyqSSNZ1HnWVlNAFGce5dwHD72JdRccC0CSU326UwngiFi+wgZV5LFZWUkuSK8TT0OBHB3CbcPJDZTBM7mouJ5O8IYakRWVlNAEtFQUKnqV78omVdFjYdKF2XB0zGsrKkC+5Zw5WTFwZF+5XFbMr77zTBaxjC1kIB86ysrmjfVZwpMi4TiFtOfDuK1fibLcZhseVe1lA0taZQ13LOHxB1dtjyot2cDXL4WWVCpOh3iOXvXtZTsP6hKOpA2PD3EOz5aQt9l9gfwpcxHYXxZ2K3D1aZ++srK1WAnnBJMJ2ftLP8NQfQUQSwEWBWVlKoQ7g+9hcx3Naf8PPWsrKCEDIL3DiedQHAEc/rWVlRDEw4m+jeJFuL6gEfnUVzi665gy+Wh+6srKESwCZTvdo7YBCrqPKgHEe0hnXesrKMASGYypb4yXMa686J4ZiNZn1rKyq2cniJZjclxbsyx51FhlMisrKPH+mLaXbiGRrvUq4Gaysp6dTpE3D/IVlZWUU6f/Z"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Private Cooking Lessons
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Customers looking for a authentic restaurant quality meal experience prepared in their home. Generally party size of 2 to 10 people.
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" color="error" component={NavLink} to='/Bookingf'>
        BOOK 
      </Button>

      </CardActions>
    </Card><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
    
    </div>
    <Box
        sx={{ textAlign: "center", background: "#870000",background: "-webkit-linear-gradient(to right, #190A05, #870000)",background: "linear-gradient(to right, #190A05, #870000)", color: "white", p: 3}}
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
              // color: "goldenrod",
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
}

export default AddPost
