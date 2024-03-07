package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Theatre;

import com.example.demo.repositories.TheatreRepository;

@Service
public class TheatreService {
	
	@Autowired
	private TheatreRepository repo;
	
	public Theatre SaveTheatre(Theatre add)
	{
		return repo.save(add);
	}
	
	public List<Theatre> getAllTheatres()
	{
		return repo.findAll();
	}

}
