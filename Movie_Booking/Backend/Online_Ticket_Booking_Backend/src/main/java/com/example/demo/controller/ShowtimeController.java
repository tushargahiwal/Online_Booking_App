package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Showtime;
import com.example.demo.service.ShowtimeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/shows")
public class ShowtimeController {
   
   @Autowired
   private ShowtimeService showtimeService;
//   
//   @PostMapping("/register")
//   public ResponseEntity<?> registerShow(@RequestBody Showtime showtime) {
//       try {
//           Showtime savedShowtime = showtimeService.save(showtime);
//           return ResponseEntity.ok().body(savedShowtime);
//       } catch (Exception e) {
//           e.printStackTrace(); // Log the exception for debugging purposes
//           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                                .body("An error occurred while saving the showtime: " + e.getMessage());
//       }
//   }
   
   @PostMapping("/register")
   public ResponseEntity<Showtime> registerShow(@RequestBody Showtime showtime) {
       // Assuming 'movieId' and 'theaterId' are present in the 'Showtime' object
       // Fetch the corresponding Movie and Theater entities based on movieId and theaterId
       // Set the fetched Movie and Theater entities in the Showtime object
       // Example:
       // Movie movie = movieService.findById(showtime.getMovieId());
       // Theater theater = theaterService.findById(showtime.getTheaterId());
       // showtime.setMovie(movie);
       // showtime.setTheater(theater);

       // Save the Showtime object
       Showtime savedShowtime = showtimeService.save(showtime);

       return new ResponseEntity<>(savedShowtime, HttpStatus.CREATED);
   }
}
