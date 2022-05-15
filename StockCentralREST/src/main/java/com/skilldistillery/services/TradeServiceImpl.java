package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Trade;
import com.skilldistillery.repostitories.TradeRepository;
import com.skilldistillery.repostitories.UserRepository;

@Service
public class TradeServiceImpl implements TradeService {
	
	@Autowired
	private TradeRepository tradeRepo;
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public List<Trade> index() {
		return tradeRepo.findAll();
	}

	@Override
	public Trade findById(int id) {
		Optional<Trade> op = tradeRepo.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
		 
		 return null;
	}

	@Override
	public Trade createTrade(Trade newtrade) {
		//for now all trades have the same user associated with it user_id 1
		newtrade.setUser(userRepo.getById(1));
		return tradeRepo.save(newtrade);
	}
	
	@Override
	public Trade createTrade(Trade newtrade, int userId) {
		//for now all trades have the same user associated with it user_id 1
		newtrade.setUser(userRepo.getById(userId));
		return tradeRepo.save(newtrade);
	}

	@Override
	public Trade updateTrade(Trade updateTrade) {
		//for now all trades have the same user associated with it user_1
		updateTrade.setUser(userRepo.getById(1));
		return tradeRepo.saveAndFlush(updateTrade);
	}

	@Override
	public void deleteTrade(int tradeId) {
		 tradeRepo.deleteById(tradeId);
	}

	@Override
	public Trade updateTrade(Trade updateTrade, int userId, int tradeId) {
		updateTrade.setUser(userRepo.getById(userId));
		updateTrade.setId(tradeId);
		return tradeRepo.saveAndFlush(updateTrade);
	}

}
