package com.exam.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.demo.Models.Review;
import com.exam.demo.Repo.Reviewrepo;

@Service
public class Reviewservice {
@Autowired
private Reviewrepo Reviewr;

public List<Review> getAll() {
return Reviewr.findAll();

}

public Review getReviewByUsername(String username) {
return Reviewr.findByUsername(username).get();
}

public void createReview(Review Review) {
	Reviewr.save(Review);
}

public Review updateReview(String username, Review Review) {
	Review stu =Reviewr.findByUsername(username).get();
stu.setName(Review.getName());
stu.setEmail(Review.getEmail());
stu.setMessage(Review.getMessage());
//stu.setP_method(Register.getP_method());
return Reviewr.save(stu);
}

public boolean deleteReview(String username) {
if(Reviewr.findByUsername(username).isPresent()){
	Reviewr.deleteByUsername(username);
return true;
}
return false;
}
}