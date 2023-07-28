package com.exam.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name="Booking")
public class Booking {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Long id;
private String cname;
private String uname;
private double amount;
private String p_method;

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getCname() {
	return cname;
}

public void setCname(String cname) {
	this.cname = cname;
}

public String getUname() {
	return uname;
}

public void setUname(String uname) {
	this.uname = uname;
}

public double getAmount() {
	return amount;
}

public void setAmount(double amount) {
	this.amount = amount;
}

public String getP_method() {
	return p_method;
}

public Booking(Long id, String cname, String uname, double amount, String p_method) {
	super();
	this.id = id;
	this.cname = cname;
	this.uname = uname;
	this.amount = amount;
	this.p_method = p_method;
}

public void setP_method(String p_method) {
	this.p_method = p_method;
}

public Booking() {
	
}
}
