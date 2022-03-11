import Button from "@mui/material/Button"

export default function B2Button(props) {

    return (
        <Button 
            variant="contained" 
            color="primary"     
            fullWidth        
            onClick={props.onClick}
        >
            {props.descriprition}
        </Button>
    )
}