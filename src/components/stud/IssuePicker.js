import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


function IssuePicker(props) {
    const [values, setValues] = React.useState({
        id: ''
    });

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <FormControl style={{"minWidth": "90%"}}>
            <InputLabel>Wybierz typ sprawy</InputLabel>
            <Select
                value={values.id}
                onChange={handleChange}
                inputProps={{
                    name: 'id'
                }}
            >
                {props.issues.map((issue) => (
                    <MenuItem key={issue.id} value={issue.id}>{issue.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default IssuePicker
