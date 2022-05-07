package com.skilldistillery.repostitories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Trade;

public interface TradeRepository extends JpaRepository<Trade, Integer> {

}
