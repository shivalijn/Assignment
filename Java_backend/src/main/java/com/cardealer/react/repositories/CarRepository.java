package com.cardealer.react.repositories;

import org.springframework.data.repository.CrudRepository;

import com.cardealer.react.models.Car;

public interface CarRepository extends CrudRepository<Car, String> {
	@Override
	Car save(Car car);
}
