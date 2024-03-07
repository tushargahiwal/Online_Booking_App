package com.example.demo.entity;

import java.util.Set;

import jakarta.persistence.*;

@Entity
@Table
public class Theatre
  {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int theatreId;
	    
	    @Column
	    private String name;
	    
	    @Column
	    private String location;
	    
	    @Column
	    private int capacity;
	    
	    @OneToMany(mappedBy = "theatre", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	    private Set<Showtime> showtimes;

    public Theatre() {
        // Default constructor
    }

    public Theatre(String name, String location, int capacity) {
        this.name = name;
        this.location = location;
        this.capacity = capacity;
    }

    public int getTheatreId() {
        return theatreId;
    }

    public void setTheatreId(int theatreId) {
        this.theatreId = theatreId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Set<Showtime> getShowtimes() {
        return showtimes;
    }

    public void setShowtimes(Set<Showtime> showtimes) {
        this.showtimes = showtimes;
    }

    @Override
    public String toString() {
        return "Theatre [theatreId=" + theatreId + ", name=" + name + ", location=" + location + ", capacity="
                + capacity + "]";
    }
}
