package com.example.demo.entity;



public class Userreg {
	int user_id;
	String username;
	String password;
	String email;
	String firstname;
	String lastname;
	String phoneNumber;
	String Adress;
	
	public Userreg() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Userreg(int user_id, String username, String password, String email, String firstname,
			String lastname, String phoneNumber, String adress) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phoneNumber = phoneNumber;
		Adress = adress;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAdress() {
		return Adress;
	}

	public void setAdress(String adress) {
		Adress = adress;
	}

	@Override
	public String toString() {
		return "Userreg [user_id=" + user_id + ", username=" + username + ", password="
				+ password + ", email=" + email + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", phoneNumber=" + phoneNumber + ", Adress=" + Adress + "]";
	}
	
	
	
	

}
