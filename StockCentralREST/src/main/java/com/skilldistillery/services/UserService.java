package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.User;

public interface UserService {
	
	List<User> index();
	User findById(int id);
	User createUser(User newtrade);
	User updateUser(User newTrade);
	void deleteUser(int id);

}
