package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Movie;
import com.example.demo.service.MovieService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/movies")
public class MovieController {
	
	@Autowired
	MovieService serv;
	
	 @PostMapping("/register")
	    public ResponseEntity<Movie> registerUser(@RequestBody Movie movie) {
	        Movie saveMovie=serv.saveMovie(movie);
	        return new ResponseEntity<>(saveMovie, HttpStatus.CREATED);
	    }
	 
	 @GetMapping("/movielist")
	 public List<Movie> getAllMovies()
	 {
		 return serv.getAllMovies();
	 }

}
