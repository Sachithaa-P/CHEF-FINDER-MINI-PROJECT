package com.exam.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.demo.Models.Chef;



public interface Chefrepo extends JpaRepository<Chef,Long>{

}
