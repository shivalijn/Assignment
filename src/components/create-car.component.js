import React, {Component} from 'react';
import axios from 'axios';

export default class CreateCar extends Component {
    constructor(props) {
        super(props);
        this.onChangeCarMake = this.onChangeCarMake.bind(this);
        this.onChangeCarModel = this.onChangeCarModel.bind(this);
        this.onChangeCarVersion = this.onChangeCarVersion.bind(this);
        this.onChangeCarYear = this.onChangeCarYear.bind(this);
        this.onChangeCarPrice = this.onChangeCarPrice.bind(this);
        this.onChangeCarFuel = this.onChangeCarFuel.bind(this);
        this.onChangeCarCost = this.onChangeCarCost.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            car_make: '',
            car_model: '',
            car_version: '',
            car_year: '',
            car_price: '',
            car_fuel: '',
            car_cost: ''
        }
    }
    onChangeCarMake(e) {
        this.setState({ car_make: e.target.value });
    }
    onChangeCarModel(e) {
        this.setState({ car_model: e.target.value });
    }
    onChangeCarVersion(e) {
        this.setState({ car_version: e.target.value });
    }
    onChangeCarYear(e) {
        this.setState({ car_year: e.target.value });
    }
    onChangeCarPrice(e) {
        this.setState({ car_price: e.target.value });
    }
    onChangeCarFuel(e) {
        this.setState({ car_fuel: e.target.value });
    }
    onChangeCarCost(e) {
        this.setState({ car_cost: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const newCar={
            car_make: this.state.car_make,
            car_model: this.state.car_model,
            car_version: this.state.car_version,
            car_year: this.state.car_year,
            car_price: this.state.car_price,
            car_fuel: this.state.car_fuel,
            car_cost: this.state.car_cost,
        }
        //axios.post('http://localhost:4000/cars/add', newCar)
        //  .then((result) => console.log(result.data));
        axios.post('http://localhost:8080/cars', newCar)
          .then((result) => console.log(result.data));

        this.setState({
            car_make: '',
            car_model: '',
            car_version: '',
            car_year: '',
            car_price: '',
            car_fuel: '',
            car_cost: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Car</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Make: </label>
                        <input type="text" className="form-control"
                            value={this.state.car_make}
                            onChange={this.onChangeCarMake}></input>
                    </div>
                    <div className="form-group">
                        <label>Model: </label>
                        <input type="text" className="form-control"
                            value={this.state.car_model}
                            onChange={this.onChangeCarModel}></input>
                    </div>
                    <div className="form-group">
                        <label>Version: </label>
                        <input type="text" className="form-control"
                            value={this.state.car_version}
                            onChange={this.onChangeCarVersion}></input>
                    </div>
                    <div className="form-group">
                        <label>Year: </label>
                        <input type="text" className="form-control"
                            value={this.state.car_year}
                            onChange={this.onChangeCarYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Price (euros): </label>
                        <input type="text" className="form-control"
                            value={this.state.car_price}
                            onChange={this.onChangeCarPrice}></input>
                    </div>
                    <div className="form-group">
                        <label>Fuel (km/l): </label>
                        <input type="text" className="form-control"
                            value={this.state.car_fuel}
                            onChange={this.onChangeCarFuel}></input>
                    </div>
                    <div className="form-group">
                        <label>Annual Maintenance Cost (euros/yr): </label>
                        <input type="text" className="form-control"
                            value={this.state.car_cost}
                            onChange={this.onChangeCarCost}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}