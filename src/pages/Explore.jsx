import {
  Container,
  Box,
  Grid,
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  styled,
  Slider,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import ExploreProductCard from "../components/ExploreProductCard";
import fiveStar from "../images/5Star.svg";
import fourStar from "../images/4Star.svg";
import threeStar from "../images/3Star.svg";
import twoStar from "../images/2Star.svg";
import oneStar from "../images/1Star.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { withParam } from "../utils/Router.Helper";

const PrettoSlider = styled(Slider)({
  color: "#4DB528",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const Explore = (props) => {
  const [products, setProducts] = useState();
  const [filterValue, setFilterValue] = useState(props.params.category);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [price, setPrice] = useState(20);
  const [rating, setRating] = useState();

  console.log(props.params.category)

const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
  
    if (checked) {
      setFilterValue((prevValue) =>
        prevValue ? `${prevValue}, ${value}` : value
      );
    } else {
      setFilterValue((prevValue) =>
       {
        const newValue = prevValue
                .split(", ")
                .filter((item) => item !== value)
                .join(", ");
            
            return newValue === "" ? undefined : newValue;
      }
      );
    }
};

  console.log("filter value", filterValue)

  useEffect(() => {
    axios
      .get("products")
      .then((data) => setProducts(data.data))
      .catch((err) => {});
  }, []);

  useEffect(()=>{
    axios.get("products/category/"+filterValue)
    .then((data) => {setFilteredProducts(data.data)})
    .then(()=>{console.log("Filtered",filteredProducts)})
    .catch((err) => {})
  },[filterValue])

  console.log("Filtered Products", filteredProducts)

  useEffect(()=>{
    axios.get("api/grocery-by-price/0/"+price)
    .then((data)=>{setFilteredProducts(data.data)})
    .catch((err)=>{})
  },[price])

  useEffect(()=>{
    axios.get(`/products/rating/${rating}`)
    .then((data) => {setFilteredProducts(data.data)})
    .catch((err)=>{})
  },[rating])

  const imgUrl = (item) => {
    if(item.store_id == 1){
      return(item.image_url_tesco)
    }
    if(item.store_id == 2){
      return(item.image_url_aldi)
    }
    if(item.store_id == 3){
      return(item.image_url_lidl)
    }
  }

  console.log(products);
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4} mt={4} mb={4}>
          {/* Filter */}
          <Grid md={3}>
            <Box padding={3}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography fontWeight={700}>Filters</Typography>
                <Link
                  component={Button}
                  sx={{
                    cursor: "pointer",
                    color: "#4DB528",
                    textTransform: "none",
                  }}
                  fontWeight={700}
                  onClick={()=>{window.location.reload()}}
                >
                  Clear all
                </Link>
              </Box>
              <Box mt={2}>
                {/* Categories */}
                <Accordion
                  defaultExpanded
                  sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ padding: 0 }}
                  >
                    <Typography fontWeight={700}>Categories</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 0 }}>
                    <FormControl component="fieldset" variant="standard">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={gilad}
                              onChange={handleCheckboxChange}
                              name="Fruits"
                              defaultChecked = {props.params.category == "Fruits"}
                              value={"Fruits"}
                            />
                          }
                          label="Fruits"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={jason}
                              onChange={handleCheckboxChange}
                              name="Dairy"
                              defaultChecked = {props.params.category == "Dairy"}
                              value={'Dairy'}
                            />
                          }
                          label="Dairy"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={antoine}
                              onChange={handleCheckboxChange}
                              name="Vegetables"
                              defaultChecked = {props.params.category == "Vegetables"}
                              value={'Vegetables'}
                            />
                          }
                          label="Vegetables"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={antoine}
                              onChange={handleCheckboxChange}
                              name="Bakery"
                              defaultChecked = {props.params.category == "Bakery"}
                              value={'Bakery'}
                            />
                          }
                          label="Bakery"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={antoine}
                              onChange={handleCheckboxChange}
                              name="Meat"
                              defaultChecked = {props.params.category == "Meat"}
                              value="Meat"
                            />
                          }
                          label="Meat"
                        />
                      </FormGroup>
                      {/* <FormHelperText>Be careful</FormHelperText> */}
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
                {/* Food Preference */}
                <Accordion
                  defaultExpanded
                  sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ padding: 0 }}
                  >
                    <Typography fontWeight={700}>Food Preferences</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 0 }}>
                    <FormControl component="fieldset" variant="standard">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={gilad}
                              onChange={handleCheckboxChange}
                              name="Vegetarian"
                              value={"Dairy,Fruits,Vegetables,Bakery"}
                            />
                          }
                          label="Vegetarian"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={jason}
                              onChange={handleCheckboxChange}
                              name="Non Vegetarian"
                              value={"Meat"}
                            />
                          }
                          label="Non Vegetarian"
                        />
                      </FormGroup>
                      {/* <FormHelperText>Be careful</FormHelperText> */}
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
                {/* Price */}
                <Accordion
                  defaultExpanded
                  sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ padding: 0 }}
                  >
                    <Typography fontWeight={700}>Price</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 0 }}>
                    <Box width={"100%"}>
                      {/* <Slider
                      aria-label="Always visible"
                      defaultValue={10}
                      getAriaValueText={valuetext}
                      step={10}
                      marks={marks}
                      valueLabelDisplay="on"
                    /> */}
                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={20}
                        onChange={(e)=>{setPrice(e.target.value)}}
                      />
                    </Box>
                    {/* <FormHelperText>Be careful</FormHelperText> */}
                  </AccordionDetails>
                </Accordion>
                {/* Ratings */}
                <Accordion
                  defaultExpanded
                  sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ padding: 0 }}
                  >
                    <Typography fontWeight={700}>Ratings</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 0 }}>
                    <FormControl component="fieldset" variant="standard">
                      <RadioGroup
                      onChange={(e)=>{setRating(e.target.value)}}
                      >
                        <FormControlLabel
                          control={
                            <Radio
                              //   checked={gilad}
                              //   onChange={handleChange}
                              value={5}
                              name="5star"
                            />
                          }
                          label={
                            <img src={fiveStar} width={"75px"} alt="5star" />
                          }
                        />
                        <FormControlLabel
                          control={
                            <Radio
                              //   checked={jason}
                              //   onChange={handleChange}
                              value={4}
                              name="Bakery, Cake & Dairy"
                            />
                          }
                          label={
                            <img src={fourStar} width={"75px"} alt="5star" />
                          }
                        />
                        <FormControlLabel
                          control={
                            <Radio
                              //   checked={antoine}
                              //   onChange={handleChange}
                              value={3}
                              name="Beverages"
                            />
                          }
                          label={
                            <img src={threeStar} width={"75px"} alt="5star" />
                          }
                        />
                        <FormControlLabel
                          control={
                            <Radio
                              //   checked={antoine}
                              //   onChange={handleChange}
                              value={2}
                              name="Snacks & Branded Foods"
                            />
                          }
                          label={
                            <img src={twoStar} width={"75px"} alt="5star" />
                          }
                        />
                        <FormControlLabel
                          control={
                            <Radio
                              //   checked={antoine}
                              //   onChange={handleChange}
                              value={1}
                              name="Beauty & Household"
                            />
                          }
                          label={
                            <img src={oneStar} width={"75px"} alt="5star" />
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
                {/* Discount */}
                {/* <Accordion
                  defaultExpanded
                  sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ padding: 0 }}
                  >
                    <Typography fontWeight={700}>Discount</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 0 }}>
                    <FormControl component="fieldset" variant="standard">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={gilad}
                              //   onChange={handleChange}
                              name="Upto 5%"
                            />
                          }
                          label="Upto 5%"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={jason}
                              //   onChange={handleChange}
                              name="5% - 10%"
                            />
                          }
                          label="5% - 10%"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={antoine}
                              //   onChange={handleChange}
                              name="10% - 15%"
                            />
                          }
                          label="10% - 15%"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={antoine}
                              //   onChange={handleChange}
                              name="15% - 25%"
                            />
                          }
                          label="15% - 25%"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={antoine}
                              //   onChange={handleChange}
                              name="More than 25%"
                            />
                          }
                          label="More than 25%"
                        />
                      </FormGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion> */}
                {/* Pack Size */}
                {/* <Accordion
                  defaultExpanded
                  sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ padding: 0 }}
                  >
                    <Typography fontWeight={700}>Pack Size</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: 0 }}>
                    <FormControl component="fieldset" variant="standard">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={gilad}
                              //   onChange={handleChange}
                              name="400 to 500g"
                            />
                          }
                          label="400 to 500g"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={jason}
                              //   onChange={handleChange}
                              name="500 to 700g"
                            />
                          }
                          label="500 to 700g"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={antoine}
                              //   onChange={handleChange}
                              name="700 to 1kg"
                            />
                          }
                          label="700 to 1kg"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={antoine}
                              //   onChange={handleChange}
                              name="120-150g each Vacuum..."
                            />
                          }
                          label="120-150g each Vacuum..."
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              //   checked={antoine}
                              //   onChange={handleChange}
                              name="1pc"
                            />
                          }
                          label="1pc"
                        />
                      </FormGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion> */}
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ maxWidth: "1200px"}} container md={9}>
            {
              filteredProducts.length > 0 ?
              // @ts-ignore
              filteredProducts?.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    {/* <ProductCard id={item.product_id} heading = {item.product_name} description = {item.description}/> */}
                    <ExploreProductCard
                      id={item.product_id}
                      name={item.product_name}
                      desc={item.description}
                      category={item.category}
                      store_id = {item.store_id}
                      price = {item.price}
                      img = {imgUrl(item)}
                    />
                  </Grid>
                );
              })
              :
              products?.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    {/* <ProductCard id={item.product_id} heading = {item.product_name} description = {item.description}/> */}
                    <ExploreProductCard
                      id={item.product_id}
                      name={item.product_name}
                      desc={item.description}
                      category={item.category}
                      store_id = {item.store_id}
                      price = {item.price}
                      img = {imgUrl(item)}
                    />
                  </Grid>
                );
              })
            }
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default withParam(Explore);
