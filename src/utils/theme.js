import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main:'#4DB528',
            light:'#E7F7F3',
            background:'#F6F6F6',
            icons:'#929191',
            text:{
                main:'#000',
                light:'#A49E9E',
                contrast:'#FFF'
            }
        },
        secondary:{
                main:'#FF7C0A'
        }
    }
})

export default theme;