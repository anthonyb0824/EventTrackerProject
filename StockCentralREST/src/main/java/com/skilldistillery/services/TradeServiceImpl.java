package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Trade;
import com.skilldistillery.repostitories.TradeRepository;

@Service
public class TradeServiceImpl implements TradeService {
	
	@Autowired
	private TradeRepository tradeRepo;

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
		return tradeRepo.save(newtrade);
	}

	@Override
	public Trade updateTrade(Trade newTrade) {
		return tradeRepo.saveAndFlush(newTrade);
	}

	@Override
	public void deleteTrade(int tradeId) {
		 tradeRepo.deleteById(tradeId);
	}

}
