package com.exam.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.demo.Models.User;



public interface Userrepo extends JpaRepository<User,Long>{

}
