package com.skilldistillery.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.User;
import com.skilldistillery.repostitories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<User> index() {
		return userRepo.findAll();
	}

	@Override
	public User findById(int id) {
		Optional<User> op = userRepo.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
		return null;
	}

	@Override
	public User createUser(User newUser) {
		return userRepo.save(newUser);
	}

	@Override
	public User updateUser(User newUser) {
		return userRepo.save(newUser);
	}

	@Override
	public void deleteUser(int id) {
		userRepo.deleteById(id);
		
	}

}
