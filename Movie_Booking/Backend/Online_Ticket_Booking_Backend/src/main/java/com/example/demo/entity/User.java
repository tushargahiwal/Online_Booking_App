package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int userId;
	 
	   @Column
	   private String username;
	   
	   @Column
	   private String password;

	    @Column
	    private String email;

	    @Column
	    private String firstname;

	    @Column
	    private String lastname;

	    @Column
	    private String phoneNumber;

	    @Column
	    private String address;
	    
	    @Column
	    private String roleid;

		public User() {
			super();
			// TODO Auto-generated constructor stub
		}

		public User(int userId, String username, String password, String email, String firstname, String lastname,
				String phoneNumber, String address, String roleid) {
			super();
			this.userId = userId;
			this.username = username;
			this.password = password;
			this.email = email;
			this.firstname = firstname;
			this.lastname = lastname;
			this.phoneNumber = phoneNumber;
			this.address = address;
			this.roleid = roleid;
		}

		public int getUserId() {
			return userId;
		}

		public void setUserId(int userId) {
			this.userId = userId;
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

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getRoleid() {
			return roleid;
		}

		public void setRoleid(String roleid) {
			this.roleid = roleid;
		}

		@Override
		public String toString() {
			return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", email=" + email
					+ ", firstname=" + firstname + ", lastname=" + lastname + ", phoneNumber=" + phoneNumber
					+ ", address=" + address + ", roleid=" + roleid + "]";
		}

		


	
	
	
	

	
}
