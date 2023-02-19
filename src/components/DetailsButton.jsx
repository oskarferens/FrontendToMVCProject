import React from "react";
import axios from 'axios';

export class DetailsButton extends React.Component {
    state = { showing: false };

    handleClick = (arg) => {
        axios.delete(`https://localhost:7228/api/react/${arg.personId}`)
            .then(result => {
                this.props.onButtonClick()
                console.log(result);
                console.log(result.data);
            })
    }

    render() {
        const { showing } = this.state;
        const { myperson } = this.props;
        return (
            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => this.setState({ showing: !showing })}
                >
                    Details
                </button>
                {showing ? (
                    <ul>
                        <li>Name: {myperson.name}</li>
                        <li>Phone number: {myperson.phoneNumber}</li>
                        <li>City: {myperson.city.cityName}</li>
                        <li>Country: {myperson.city.country.countryName}</li>
                        <button className="btn btn-danger" type="submit" name="personId" onClick={this.handleClick.bind(this, myperson)}>Delete</button>
                    </ul>
                ) : null}
            </div>
        );
    }
}