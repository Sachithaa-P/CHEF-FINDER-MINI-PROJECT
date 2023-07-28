package com.exam.demo.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.demo.Models.Register;



public interface Registerrepo extends JpaRepository<Register, String>{

	Optional<Register> findByEmail(String email);

	void deleteByEmail(String email);

}
