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

import com.example.demo.entity.Theatre;

import com.example.demo.service.TheatreService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/theatres")
public class TheatreController {
	
	@Autowired
	private TheatreService serv;
	
	
	 @PostMapping("/register")
	    public ResponseEntity<Theatre> registerTheatre(@RequestBody Theatre add)
	    {
	        Theatre savetheatre=serv.SaveTheatre(add);
	        return new ResponseEntity<>(savetheatre, HttpStatus.CREATED);
	    }
	 
	 @GetMapping("/list")
	 public List<Theatre> getAllTheatre()
	 {
		 return serv.getAllTheatres();
	 }

}
