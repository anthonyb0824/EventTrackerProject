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

}
