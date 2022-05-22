package com.skilldistillery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Trade;
import com.skilldistillery.services.TradeService;

@RequestMapping("api")
@RestController
@CrossOrigin({"*","http://localhost:4202"})
public class TradeController {
	
	@Autowired
	TradeService serv;

	@GetMapping("trades")
	public List<Trade> index(){
		return serv.index();
	}
	
	@GetMapping("trades/{id}")
	public Trade tradeById(@PathVariable int id) {
		return serv.findById(id);
	}
	
	@PostMapping("trades")
	public Trade createTrade(@RequestBody Trade newTrade) {
		return serv.createTrade(newTrade);
	}
	
	@PutMapping("trades/{id}")
	public Trade updateTrade(@PathVariable int id, @RequestBody Trade updateTrade) {
		//set user here?
		updateTrade.setId(id);
		return serv.updateTrade(updateTrade);
	}
	
	@DeleteMapping("trades/{id}")
	public void deleteTrade(@PathVariable int id) {
		  serv.deleteTrade(id);
	}
}
