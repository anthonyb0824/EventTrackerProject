package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.Trade;

public interface TradeService {
		List<Trade> index();
		Trade findById(int id);
		Trade createTrade(Trade newtrade);
		Trade updateTrade(Trade newTrade);
		void deleteTrade(int id);
		Trade createTrade(Trade newtrade, int userId);
		Trade updateTrade(Trade updateTrade, int userId, int tradeId);
	}


