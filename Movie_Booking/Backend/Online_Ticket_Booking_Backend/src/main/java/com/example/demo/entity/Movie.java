package com.example.demo.entity;

import jakarta.persistence.*;
import java.sql.Date;
import java.util.Set;


@Entity
@Table
public class Movie {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int movieId;

	    @Column
	    private String movieName;

	    @Column
	    private String director;

	    @Column
	    private String actor;

	    @Column
	    private String actress;

	    @Column
	    private Date releaseDate;

	    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	     Set<Showtime> showtimes;
	    
	
    public Movie() {
        // default constructor
    }

    public Movie(String movieName, String director, String actor, String actress, Date releaseDate) {
        this.movieName = movieName;
        this.director = director;
        this.actor = actor;
        this.actress = actress;
        this.releaseDate = releaseDate;
    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getActor() {
        return actor;
    }

    public void setActor(String actor) {
        this.actor = actor;
    }

    public String getActress() {
        return actress;
    }

    public void setActress(String actress) {
        this.actress = actress;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Set<Showtime> getShowtimes() {
        return showtimes;
    }

    public void setShowtimes(Set<Showtime> showtimes) {
        this.showtimes = showtimes;
    }

    @Override
    public String toString() {
        return "Movie [movieId=" + movieId + ", movieName=" + movieName + ", director=" + director + ", actor=" + actor
                + ", actress=" + actress + ", releaseDate=" + releaseDate + "]";
    }
}
