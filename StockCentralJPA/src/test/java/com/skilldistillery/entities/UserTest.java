package com.skilldistillery.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UserTest {

	private static EntityManagerFactory emf;
	private static EntityManager em;
	private User user;

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
		user = em.find(User.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		user = null;
	}


	@Test
	void test() {
//		SELECT * from user;
//		+----+------------+-----------+----------+
//		| id | first_name | last_name | username |
//		+----+------------+-----------+----------+
//		|  1 | Anthony    | Butler    | AB1216   |
//		+----+------------+-----------+----------+
		assertNotNull(user);
		assertEquals("Anthony ",user.getFirstName());
		assertEquals("Butler",user.getLastName());
		assertEquals("AB1216",user.getUsername());
	}

}
