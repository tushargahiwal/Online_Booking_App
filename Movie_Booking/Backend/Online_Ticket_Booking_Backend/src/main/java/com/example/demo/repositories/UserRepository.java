package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	// List<User> findByUsernameAndPassword(String username, String password);
	 
		@Query("SELECT u FROM User u WHERE u.username = :username AND u.password = :password")
		public Optional<User> getLogin(@Param("username") String username, @Param("password") String password);

	 
}
