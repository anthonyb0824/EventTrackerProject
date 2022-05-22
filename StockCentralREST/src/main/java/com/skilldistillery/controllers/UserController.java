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
import com.skilldistillery.entities.User;
import com.skilldistillery.services.TradeService;
import com.skilldistillery.services.UserService;

@RequestMapping("api")
@RestController
@CrossOrigin({"*","http://localhost:4202"})
public class UserController {

	@Autowired
	private UserService serv;
	
	@Autowired
	private TradeService tradeServ;
	
	@GetMapping("users")
	public List<User> index(){
		return serv.index();
	}
	
	@GetMapping("users/{id}")
	public User tradeById(@PathVariable int id) {
		return serv.findById(id);
	}
	
	@PostMapping("users")
	public User createUser(@RequestBody User newUser) {
		return serv.createUser(newUser);
	}
	
	@PostMapping("users/{userId}/trade")
	public Trade createTradeAsUser(@RequestBody Trade newTrade, @PathVariable int userId) {
		return tradeServ.createTrade(newTrade, userId);
	}
	
	@PutMapping("users/{userId}/trade/{tradeId}")
	public Trade updateTrade(@RequestBody Trade updateTrade, @PathVariable int userId,@PathVariable int tradeId) {
		return tradeServ.updateTrade(updateTrade, userId, tradeId);
	}
	
	@PutMapping("users/{id}")
	public User updateTrade(@PathVariable int id, @RequestBody User updateUser) {
		updateUser.setId(id);
		return serv.updateUser(updateUser);
	}
	
	@DeleteMapping("users/{id}")
	public void deleteTrade(@PathVariable int id) {
		  serv.deleteUser(id);
	}
}
