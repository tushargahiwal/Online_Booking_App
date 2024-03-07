package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Movie;
import com.example.demo.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repo;
	
	public Movie saveMovie(Movie movie)
	{
		return repo.save(movie);
	}
	
	public List<Movie> getAllMovies()
	{
		return repo.findAll();
	}

}
