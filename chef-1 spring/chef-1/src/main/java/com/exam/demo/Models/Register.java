package com.exam.demo.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Registertable")
public class Register {
	
//	@GeneratedValue
	
	@Id
	@Column(name="email")
	private String email;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	

	
	
	public String getemail() {
		return email;
	}
	
	public void setemail(String email) {
		this.email = email;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return username;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	

	
	public Register(String email, String username, String password) {
		super();
		this.email = email;
		this.username = username;
		this.password = password;

	}
	
	public Register() {
		
	}


}