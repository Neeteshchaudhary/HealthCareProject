package com.healthCare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.healthCare.model.Reg;

public interface HomeRepository extends JpaRepository<Reg, Integer>{

}
