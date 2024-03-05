
import React from 'react'
import { Grid,  Typography, Box, Paper } from '@mui/material';

const ProductBenefits = () => {
  return (
    <Box mt={10}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0}>
            
              <Typography variant="h5" gutterBottom style={{ paddingBottom: '15px', fontWeight: 'bold' }}>
                Benefits
              </Typography>
              <ul>
                <li style={{ paddingBottom: '15px' }}>Rich source of essential vitamins and minerals including A, C, and K, as well as folate and potassium.</li>
                <li style={{ paddingBottom: '15px' }}>High antioxidant content, notably lycopene, reduces the risk of chronic diseases such as heart disease and cancer.</li>
                <li style={{ paddingBottom: '15px' }}>Supports immune function, vision, and bone health due to its nutrient profile.</li>
                <li style={{ paddingBottom: '15px' }}>Versatile ingredient in cooking, can be enjoyed raw, cooked, or juiced, adding flavor and nutrition to various dishes.</li>
              </ul>
            
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={0}>
            
              <Typography variant="h5" gutterBottom style={{ paddingBottom: '15px', fontWeight: 'bold' }}>
                Product Information
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: '15px', whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                <span style={{ fontWeight: 'bold' }}>{"AN Code:"}</span> {"13423"}
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: '15px', whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                <span style={{ fontWeight: 'bold' }}>{"Country of Origin:"}</span> {"UK"}
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: '15px', whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                <span style={{ fontWeight: 'bold' }}>{"Manufacturing Details: "}</span> {"Tomatoes are grown in warm climates, harvested, sorted, washed, and blanched. They're crushed, heated, and strained to extract juice or pulp before packaging for distribution "}
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: '15px', whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                <span style={{ fontWeight: 'bold' }}>{"Customer Care No:"}</span> {"1-3423-313-21"}
              </Typography>
              <Typography variant="body1" style={{ paddingBottom: '15px', whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                <span style={{ fontWeight: 'bold' }}>{"Disclaimer:"}</span> {"The information provided about tomatoes is for general informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding your health or a medical condition."}
              </Typography>
            
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductBenefits;
