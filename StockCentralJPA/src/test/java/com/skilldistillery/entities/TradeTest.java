package com.skilldistillery.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TradeTest {
	
	private static EntityManagerFactory emf;
	private static EntityManager em;
	private Trade trade;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("StockCentralJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		trade = em.find(Trade.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		trade = null;
	}


	@Test
	void test() {
		assertNotNull(trade);
		assertEquals("open", trade.getStatus());
		assertEquals(10.0, trade.getShares());
		assertEquals(100, trade.getPrice());
		assertEquals(-20, trade.getpAndl());
	}

}
