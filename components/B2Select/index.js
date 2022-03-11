import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const uniqueId = () => parseInt(Date.now() * Math.random()).toString()

export default function B2Select(props) {

    const id = uniqueId()

    return (
        <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id={id}>{props.label}</InputLabel>
            <Select
                labelId={id}
                id={uniqueId()}
                label={props.label}
                value={props.value}
                onChange={(event) => { props.setState(event.target.value) }}
            >
                {props.list.length > 0 &&

                props.list.map((item, index) => {
                    return (
                        <MenuItem key={index} value={item.value}>{item.description}</MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    )
}