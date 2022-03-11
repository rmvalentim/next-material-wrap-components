import TextField from '@mui/material/TextField'

const uniqueId = () => parseInt(Date.now() * Math.random()).toString()

export default function B2TextField(props) {

    return (
        <TextField
            id={uniqueId()}
            variant="outlined"
            size="small"
            fullWidth
            label={props.label}
            type={props.type ?? "text"}
            defaultValue={props.defaultValue}
            value={props.value}
            onChange={(event) => {
                props.setState(event.target.value)
            }}  
            InputLabelProps={{
                shrink: true,
            }}          
        />
    )
}