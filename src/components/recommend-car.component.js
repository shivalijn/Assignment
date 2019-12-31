import React, {Component} from 'react';
import axios from 'axios';

export default class RecommendCar extends Component {
    constructor(props) {
        super(props);
        this.onChangeTravelDis = this.onChangeTravelDis.bind(this);
        this.onChangeFuelPrice = this.onChangeFuelPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            cars: [],
            travel_dis: '',
            fuel_price: ''
        }
    }

    onChangeTravelDis(e) {
        this.setState({ travel_dis: e.target.value });
    }
    onChangeFuelPrice(e) {
        this.setState({ fuel_price: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        
        //axios.get('http://localhost:4000/cars/')
        axios.get('http://localhost:8080/cars/')
        .then(result => {
            this.setState({cars: result.data});
        })
    }

    //Renders the list of Cars.
    carsList() {
        let Car = props => (
            <tr>
                <td>{props.car.car_make}</td>
                <td>{props.car.car_model}</td>
                <td>{props.car.car_version}</td>
                <td>{props.car.car_year}</td>
                <td>{props.car.car_price}</td>
                <td>{props.car.car_fuel}</td>
                <td>{props.car.car_cost}</td>
                <td>{props.car.car_cost + props.car.car_price + ((this.state.travel_dis * this.state.fuel_price)/props.car.car_fuel)}</td>
            </tr>
        )

        this.state.cars.sort((a,b) => (
            (a.car_price+a.car_cost+((this.state.travel_dis*this.state.fuel_price)/a.car_fuel))
            -
            (b.car_price+b.car_cost+((this.state.travel_dis*this.state.fuel_price)/b.car_fuel))
        ))
        return this.state.cars.map(function(currentCar, i) {
            return <Car car={currentCar} key={i} />;
        });
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Recommend Cars</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Expected Distance to Travel (km): </label>
                        <input type="text" className="form-control"
                            value={this.state.travel_dis}
                            onChange={this.onChangeTravelDis}></input>
                    </div>
                    <div className="form-group">
                        <label>Price of Fuel (euros/label): </label>
                        <input type="text" className="form-control"
                            value={this.state.fuel_price}
                            onChange={this.onChangeFuelPrice}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Recommend" className="btn btn-primary" />
                    </div>
                
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
                            <th>Total Annual Cost <br></br>(Includes Price, Fuel Consumption, Maintenance)</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.carsList() }
                    </tbody>
                </table>
            </form>
        </div>
        )
    }
}