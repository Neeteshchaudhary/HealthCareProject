package com.healthCare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.healthCare.model.Login;
import com.healthCare.model.Reg;
import com.healthCare.service.HomeService;

@Controller
public class HomeController {

	@Autowired
	private HomeService homeService;
	
	@GetMapping("/")
	public String homePage(){
		return "home";
	}
	
	@GetMapping("/reg")
	public String regPage(){
		return "reg";
	}
	
	@PostMapping("/regData")
	public String regData(@ModelAttribute Reg reg,Model model) {
		String uname = homeService.doReg(reg);
		if(uname != null) 
			model.addAttribute("name",uname);
		else
			model.addAttribute("name","some went wrong");
		return "login";
	}
	
	@GetMapping("/login")
	public String loginPage() {
		return "login";
	}
	
	@PostMapping("/userData")
	public String addNurse(@ModelAttribute Login login, Model map) {
		return "profile";
	}
}
