import {
  Box,
  Link,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import fiveStar from "../images/5Star.svg";
import fourStar from "../images/4Star.svg";
import threeStar from "../images/3Star.svg";
import twoStar from "../images/2Star.svg";
import oneStar from "../images/1Star.svg";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 37,
      label: '30',
    },
    {
      value: 100,
      label: '100',
    },
  ];

  const PrettoSlider = styled(Slider)({
    color: '#4DB528',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&::before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

const Filters = () => {

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <Box padding={3}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontWeight={700}>Filters</Typography>
        <Link
          component={Typography}
          sx={{ cursor: "pointer", color: "#4DB528", textTransform: "none" }}
          fontWeight={700}
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
                      //   onChange={handleChange}
                      name="Fruits & Vegetables"
                    />
                  }
                  label="Fruits & Vegetables"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={jason}
                      //   onChange={handleChange}
                      name="Bakery, Cake & Dairy"
                    />
                  }
                  label="Bakery, Cake & Dairy"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={antoine}
                      //   onChange={handleChange}
                      name="Beverages"
                    />
                  }
                  label="Beverages"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={antoine}
                      //   onChange={handleChange}
                      name="Snacks & Branded Foods"
                    />
                  }
                  label="Snacks & Branded Foods"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={antoine}
                      //   onChange={handleChange}
                      name="Beauty & Household"
                    />
                  }
                  label="Beauty & Household"
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
                      //   onChange={handleChange}
                      name="Vegetarian"
                    />
                  }
                  label="Vegetarian"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={jason}
                      //   onChange={handleChange}
                      name="Non Vegetarian"
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
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={gilad}
                      //   onChange={handleChange}
                      name="5star"
                    />
                  }
                  label={<img src={fiveStar} width={"75px"} alt="5star" />}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={jason}
                      //   onChange={handleChange}
                      name="Bakery, Cake & Dairy"
                    />
                  }
                  label={<img src={fourStar} width={"75px"} alt="5star" />}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={antoine}
                      //   onChange={handleChange}
                      name="Beverages"
                    />
                  }
                  label={<img src={threeStar} width={"75px"} alt="5star" />}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={antoine}
                      //   onChange={handleChange}
                      name="Snacks & Branded Foods"
                    />
                  }
                  label={<img src={twoStar} width={"75px"} alt="5star" />}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      //   checked={antoine}
                      //   onChange={handleChange}
                      name="Beauty & Household"
                    />
                  }
                  label={<img src={oneStar} width={"75px"} alt="5star" />}
                />
              </FormGroup>
              {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
          </AccordionDetails>
        </Accordion>
        {/* Discount */}
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
              {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
          </AccordionDetails>
        </Accordion>
        {/* Pack Size */}
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
              {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Filters;
