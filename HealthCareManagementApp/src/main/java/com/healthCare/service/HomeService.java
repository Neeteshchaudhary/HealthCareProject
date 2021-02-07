package com.healthCare.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthCare.model.Reg;
import com.healthCare.repository.HomeRepository;

@Service
public class HomeService {

	@Autowired
	private HomeRepository homeRepository;
	
	public String doReg(Reg reg) {
		Reg regResult = homeRepository.save(reg);
		Optional<Reg> optional = Optional.ofNullable(regResult);
		if(optional.isPresent()) {
			return optional.get().getUname();
		}else {
			return null;	
		}
	}
}
