import { Button } from "@mui/material"

function Item(props)
{
    return (
        <>
            <h2>{props.item.name}</h2>
            <img style={{width:'100%', height:'60vh', borderRadius:'15px'}} src={props.item.image} alt=""/>
            <div style={{marginBottom:'20px'}}>
                <p>{props.item.description}</p>
            </div>

            <Button variant="contained">
                Check it out!
            </Button>
        </>
    )
}

export default Item; 