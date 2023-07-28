package com.exam.demo.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.demo.Service.Reviewservice;
import com.exam.demo.Models.Review;

@CrossOrigin
@RestController
@RequestMapping("/Review")
public class Reviewcontroller {
@Autowired
private Reviewservice rserv;

@GetMapping("/Review")
public List<Review> getAllReview() {
return rserv.getAll();
}

@GetMapping("/Review/{username}")
public Review getReviewByUsername(@PathVariable String username) {
return rserv.getReviewByUsername(username);
}

@PostMapping("/addReview")
public void createReview(@RequestBody Review Review) {
  rserv.createReview(Review);
}

@PutMapping("/update/{username}")
public Review updateReview( @RequestBody Review Review,@PathVariable String username) {
return rserv.updateReview(username, Review);
}

@DeleteMapping("/deleteReview/{username}")
public boolean deleteReview(@PathVariable String username) {
return rserv.deleteReview(username);
}
}