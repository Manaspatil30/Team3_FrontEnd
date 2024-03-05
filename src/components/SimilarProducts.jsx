import React from "react";
import Slider from "react-slick";
import {Card, CardContent,CardMedia,Typography,Button} from "@mui/material";
import img from '../images/tomato.png';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SimilarProducts = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NavigateNextIcon />,
        prevArrow: <ArrowBackIosIcon />,

    };

    return (
        <div style={{paddingTop: '100px' , paddingBottom:'100px' ,}}>
            <Slider {...settings}>
                <div>
                    <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            <Typography variant="h6" component="div" gutterBottom>
                                Product Name 1
                            </Typography>
                            <div style={{ width: '100%', paddingTop: '100%', position: 'relative'}}>
                                <CardMedia
                                    component="img"
                                    style={{ position: 'absolute', top: 10, width: '100%', height: '100%', objectFit: 'contain' }}
                                    image={img}
                                    alt=""
                                />
                            </div>
                            <Typography variant="body2" gutterBottom style={{ paddingTop:'10px',  color: 'text.secondary' }}>
                                Price: £3.59
                            </Typography>
                            <Button
                                style={{ backgroundColor: 'green' ,textTransform: 'none'}}
                                variant="contained"
                                color="primary"
                                size="small"
                                endIcon={<ShoppingCartIcon />}
                            >
                                Add to cart
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            <Typography variant="h6" component="div" gutterBottom>
                                Product Name 2
                            </Typography>
                            <div style={{ width: '100%', paddingTop: '100%', position: 'relative'}}>
                                <CardMedia
                                    component="img"
                                    style={{ position: 'absolute', top: 10, width: '100%', height: '100%', objectFit: 'contain' }}
                                    image={img}
                                    alt=""
                                />
                            </div>
                            <Typography variant="body2" gutterBottom style={{ paddingTop:'10px',  color: 'text.secondary' }}>
                                Price: £3.59
                            </Typography>
                            <Button
                                style={{ backgroundColor: 'green' ,textTransform: 'none'}}
                                variant="contained"
                                color="primary"
                                size="small"
                                endIcon={<ShoppingCartIcon />}
                            >
                                Add to cart
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            <Typography variant="h6" component="div" gutterBottom>
                                Product Name 3
                            </Typography>
                            <div style={{ width: '100%', paddingTop: '100%', position: 'relative'}}>
                                <CardMedia
                                    component="img"
                                    style={{ position: 'absolute', top: 10, width: '100%', height: '100%', objectFit: 'contain' }}
                                    image={img}
                                    alt=""
                                />
                            </div>
                            <Typography variant="body2" gutterBottom style={{ paddingTop:'10px',  color: 'text.secondary' }}>
                                Price: £3.59
                            </Typography>
                            <Button
                                style={{ backgroundColor: 'green' ,textTransform: 'none'}}
                                variant="contained"
                                color="primary"
                                size="small"
                                endIcon={<ShoppingCartIcon />}
                            >
                                Add to cart
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            <Typography variant="h6" component="div" gutterBottom>
                                Product Name 4
                            </Typography>
                            <div style={{ width: '100%', paddingTop: '100%', position: 'relative'}}>
                                <CardMedia
                                    component="img"
                                    style={{ position: 'absolute', top: 10, width: '100%', height: '100%', objectFit: 'contain' }}
                                    image={img}
                                    alt=""
                                />
                            </div>
                            <Typography variant="body2" gutterBottom style={{ paddingTop:'10px',  color: 'text.secondary' }}>
                                Price: £3.59
                            </Typography>
                            <Button
                                style={{ backgroundColor: 'green' ,textTransform: 'none'}}
                                variant="contained"
                                color="primary"
                                size="small"
                                endIcon={<ShoppingCartIcon />}
                            >
                                Add to cart
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            <Typography variant="h6" component="div" gutterBottom>
                                Product Name 5
                            </Typography>
                            <div style={{ width: '100%', paddingTop: '100%', position: 'relative'}}>
                                <CardMedia
                                    component="img"
                                    style={{ position: 'absolute', top: 10, width: '100%', height: '100%', objectFit: 'contain' }}
                                    image={img}
                                    alt=""
                                />
                            </div>
                            <Typography variant="body2" gutterBottom style={{ paddingTop:'10px',  color: 'text.secondary' }}>
                                Price: £3.59
                            </Typography>
                            <Button
                                style={{ backgroundColor: 'green' ,textTransform: 'none'}}
                                variant="contained"
                                color="primary"
                                size="small"
                                endIcon={<ShoppingCartIcon />}
                            >
                                Add to cart
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <CardContent>
                            <Typography variant="h6" component="div" gutterBottom>
                                Product Name 6
                            </Typography>
                            <div style={{ width: '100%', paddingTop: '100%', position: 'relative'}}>
                                <CardMedia
                                    component="img"
                                    style={{ position: 'absolute', top: 10, width: '100%', height: '100%', objectFit: 'contain' }}
                                    image={img}
                                    alt=""
                                />
                            </div>
                            <Typography variant="body2" gutterBottom style={{ paddingTop:'10px',  color: 'text.secondary' }}>
                                Price: £3.59
                            </Typography>
                            <Button
                                style={{ backgroundColor: 'green' ,textTransform: 'none'}}
                                variant="contained"
                                color="primary"
                                size="small"
                                endIcon={<ShoppingCartIcon />}
                            >
                                Add to cart
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </Slider>
        </div>
    );
};

export default SimilarProducts;
