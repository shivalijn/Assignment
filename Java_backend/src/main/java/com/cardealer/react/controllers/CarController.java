package com.cardealer.react.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cardealer.react.models.Car;
import com.cardealer.react.repositories.CarRepository;

@CrossOrigin(maxAge = 3600)
@RestController
public class CarController {
	
	@Autowired
	CarRepository carRepository;
	
	@CrossOrigin("http://localhost:3000")
	@RequestMapping(method=RequestMethod.GET, value="/cars")
	public Iterable<Car> car() {
		return carRepository.findAll();
	}
	
	public Car save(@RequestBody Car car) {
		carRepository.save(car);
		return car;
	}
}
