package com.cardealer.react.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cars")
public class Car {
	
	@Id
	String id;
	String car_make;
	String car_model;
	String car_version;
	String car_year;
	int car_price;
	int car_fuel;
	int car_cost;
	
	public Car() {
		
	}
	
	public Car(String id, String car_make, String car_model, String car_version, String car_year, int car_price,
			int car_fuel, int car_cost) {
		super();
		this.id = id;
		this.car_make = car_make;
		this.car_model = car_model;
		this.car_version = car_version;
		this.car_year = car_year;
		this.car_price = car_price;
		this.car_fuel = car_fuel;
		this.car_cost = car_cost;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCar_make() {
		return car_make;
	}

	public void setCar_make(String car_make) {
		this.car_make = car_make;
	}

	public String getCar_model() {
		return car_model;
	}

	public void setCar_model(String car_model) {
		this.car_model = car_model;
	}

	public String getCar_version() {
		return car_version;
	}

	public void setCar_version(String car_version) {
		this.car_version = car_version;
	}

	public String getCar_year() {
		return car_year;
	}

	public void setCar_year(String car_year) {
		this.car_year = car_year;
	}

	public int getCar_price() {
		return car_price;
	}

	public void setCar_price(int car_price) {
		this.car_price = car_price;
	}

	public int getCar_fuel() {
		return car_fuel;
	}

	public void setCar_fuel(int car_fuel) {
		this.car_fuel = car_fuel;
	}

	public int getCar_cost() {
		return car_cost;
	}

	public void setCar_cost(int car_cost) {
		this.car_cost = car_cost;
	}
	
}
