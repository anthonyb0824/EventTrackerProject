package com.skilldistillery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Trade;
import com.skilldistillery.services.TradeService;

@RequestMapping("api")
@RestController
public class TradeController {
	
	@Autowired
	TradeService serv;

	@GetMapping("trades")
	public List<Trade> index(){
		return serv.index();
	}
	
	@GetMapping("trades/{id}")
	public Trade tradeById() {
		//TODO:
		return null;
		//return serv.findById();
	}
	
	@PostMapping("trades")
	public Trade createTrade() {
		//TODO:
		return null;
	}
	
	@PutMapping("trades/{id}")
	public Trade updateTrade() {
		return null;
		//TODO:
	}
	
	@DeleteMapping("trades/{id}")
	public Trade deleteTrade() {
		//TODO:
		return null;
	}
}
