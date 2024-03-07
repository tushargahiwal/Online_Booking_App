package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.Showtime;
import com.example.demo.repositories.ShowtimeRepository;

@Service
public class ShowtimeService {
	
	@Autowired
	private ShowtimeRepository repo;
	
	public Showtime save(Showtime t)
	{
		return repo.save(t);
	}
}
