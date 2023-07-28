package com.exam.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.demo.Models.Booking;



public interface Bookrepo extends JpaRepository<Booking, Long>{

}
