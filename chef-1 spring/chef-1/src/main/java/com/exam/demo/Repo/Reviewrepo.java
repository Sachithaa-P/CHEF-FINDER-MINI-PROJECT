package com.exam.demo.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.demo.Models.Review;



public interface Reviewrepo extends JpaRepository<Review, String>{

	Optional<Review> findByUsername(String username);

	void deleteByUsername(String username);

}
