import React, { useState } from "react";
import img from "../images/tomato.png";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box
} from "@mui/material";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import { withParam } from "../utils/Router.Helper";
// import { IoMdStar } from "react-icons/io";
// import { IoIosStarOutline } from "react-icons/io";

const ExploreProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1)
  }

  const delQuantity = () => {
    if(quantity == 1){

    }else{
        setQuantity(quantity - 1)
    }
  }

  const data = {
    "product_id" : props.id,
    "price" : 100,
    "quantity" : quantity
}

  const addToBasket = () => {
    axios.post(`basket/`+Cookies.get('user_id'), data).then(()=>{alert('Product Added to Basket')}).then(()=>{window.location.reload()})
  }

  return (
    <Box mb={3}>
      
    <Card
      sx={{ maxWidth: 300 }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "18px",
      }}
    >
      <Link to={'/productdetails/'+props.id} style={{color: 'inherit', textDecoration: 'inherit'}}>
      <CardContent>
        <div
          style={{ width: "100%", paddingTop: "100%", position: "relative" }}
        >
          <CardMedia
            component="img"
            style={{
              position: "absolute",
              top: 10,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            image={img}
            alt=""
          />
        </div>
        <Typography
          variant="body2"
          gutterBottom
          style={{ color: "text.secondary", paddingTop: "10px" }}
        >
          {props.category}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          {props.name}
        </Typography>
        <div>
          {/* <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar /> */}
          {/* <IoIosStarOutline /> */}
        </div>
        <Typography variant="body2" gutterBottom style={{ color: "green" }}>
          Price: £3.59
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} width={"100%"}>
        <IconButton aria-label="delete" size="small" onClick={delQuantity}>
            <RemoveRoundedIcon fontSize="inherit" />
        </IconButton>

        <Typography variant="caption">{quantity}</Typography>

        <IconButton aria-label="delete" size="small" onClick={addQuantity}>
            <AddRoundedIcon fontSize="inherit" />
        </IconButton>
        
        
        <Button
        onClick={addToBasket}
          style={{
            backgroundColor:"#FFF",
            width: "130px",
            textTransform: "none",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            border: "2px solid orange",
            borderRadius: "20px",
          }}
          variant="contained"
          color="primary"
          size="small"
        >
          Add
        </Button>
        </Stack>
      </CardContent>
      </Link>
    </Card>
    </Box>
  );
};

export default withParam(ExploreProductCard);
