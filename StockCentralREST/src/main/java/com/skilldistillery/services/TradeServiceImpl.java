package com.skilldistillery.services;

import java.util.List;

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
		return tradeRepo.getById(id);
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
	public Void deleteTrade(int tradeId) {
		 tradeRepo.deleteById(tradeId);
		return null;
	}

}
