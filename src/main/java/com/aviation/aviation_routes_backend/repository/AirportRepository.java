package com.aviation.aviation_routes_backend.repository;

import com.aviation.aviation_routes_backend.model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportRepository extends JpaRepository<Airport, Long> {

}