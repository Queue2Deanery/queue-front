import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


class IssuePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {caseId: 1};
    }

    handleChange(event) {
        this.setState({caseId: event.target.value});
    }

    render() {
        return (
            <FormControl style={{"min-width": "90%"}}>
                <InputLabel htmlFor="age-simple">Wybierz typ sprawy</InputLabel>
                <Select
                    value={this.state.caseId}
                    onChange={(event) => this.handleChange(event)}
                >
                    <MenuItem value={1}>Przedłużenie legitymacji</MenuItem>
                    <MenuItem value={2}>Złożenie wniosku</MenuItem>
                    <MenuItem value={3}>Praca dyplomowa</MenuItem>
                    <MenuItem value={4}>Inna sprawa</MenuItem>
                </Select>
            </FormControl>
        );
    };
}

export default IssuePicker
