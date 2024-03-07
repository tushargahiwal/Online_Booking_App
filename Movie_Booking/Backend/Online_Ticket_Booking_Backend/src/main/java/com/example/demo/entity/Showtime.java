package com.example.demo.entity;





import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table
public class Showtime {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int showtimeId;
	    
	    @Column
	    private Date dateTime;
	    
	    @Column
	    private String time;
	    
	    @Column
	    private int availableseats;
	    
	    @ManyToOne
	    @JoinColumn(name = "movieId")
	     Movie movie;
	    
	    @ManyToOne
	    @JoinColumn(name="theatreId")
	     Theatre theatre;
	    
	    
	public Showtime() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Showtime(int showtimeId, Date dateTime, String time, int availableseats, Movie movie, Theatre theatre) {
		super();
		this.showtimeId = showtimeId;
		this.dateTime = dateTime;
		this.time = time;
		this.availableseats = availableseats;
		this.movie = movie;
		this.theatre = theatre;
	}

	public int getShowtimeId() {
		return showtimeId;
	}

	public void setShowtimeId(int showtimeId) {
		this.showtimeId = showtimeId;
	}

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public int getAvailableseats() {
		return availableseats;
	}

	public void setAvailableseats(int availableseats) {
		this.availableseats = availableseats;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public Theatre getTheatre() {
		return theatre;
	}

	public void setTheatre(Theatre theatre) {
		this.theatre = theatre;
	}

	@Override
	public String toString() {
		return "Showtime [showtimeId=" + showtimeId + ", dateTime=" + dateTime + ", time=" + time + ", availableseats="
				+ availableseats + ", movie=" + movie + ", theatre=" + theatre + "]";
	}


	
	
	
	
	
	
	 

}
