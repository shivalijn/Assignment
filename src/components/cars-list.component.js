import React, {Component} from 'react';
import axios from 'axios';

const Car= props => (
    <tr>
        <td>{props.car.car_make}</td>
        <td>{props.car.car_model}</td>
        <td>{props.car.car_version}</td>
        <td>{props.car.car_year}</td>
        <td>{props.car.car_price}</td>
        <td>{props.car.car_fuel}</td>
        <td>{props.car.car_cost}</td>
    </tr>
)

export default class CarsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            search: '',
            searchYr: ''
        }
    }

    updateSearch(e) {
        this.setState({search: e.target.value.substr(0, 20)});
    }
    updateSearchYr(e) {
        this.setState({searchYr: e.target.value});
    }
    // Get the list of Cars.
    componentDidMount() {
        //axios.get('http://localhost:4000/cars/')
        axios.get('http://localhost:8080/cars/')
            .then(response => {
                this.setState({cars: response.data});
            })
            .catch(function(error) {
                console.log(error);
            })
    }
    //Renders the list of Cars.
    carsList() {
        let filteredCars = this.state.cars.filter(
            (car) => { return car.car_make.indexOf(this.state.search) !== -1; }
        )
        filteredCars = filteredCars.filter(
            (car) => { return car.car_year.indexOf(this.state.searchYr) !== -1;}
        )
        return filteredCars.map(function(currentCar, i) {
            return <Car car={currentCar} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>List of Cars</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Version</th>
                            <th>Year</th>
                            <th>Price (euros)</th>
                            <th>Fuel (km/l)</th>
                            <th>Annual Maintenance Cost (euros/yr)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} /></td>
                            <td></td>
                            <td></td>
                            <td><input type="text" value={this.state.searchYr} onChange={this.updateSearchYr.bind(this)} /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        { this.carsList() }
                    </tbody>
                </table>
            </div>
        )
    }
}