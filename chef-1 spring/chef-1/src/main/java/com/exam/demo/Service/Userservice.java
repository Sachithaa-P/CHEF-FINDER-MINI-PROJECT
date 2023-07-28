package com.exam.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.demo.Models.Chef;
import com.exam.demo.Models.User;
import com.exam.demo.Repo.Chefrepo;
import com.exam.demo.Repo.Userrepo;

@Service
public class Userservice {
@Autowired
private Userrepo userr;

public List<User> getAll() {
return userr.findAll();

}
public User getUserByid(Long id) {
return userr.findById(id).get();
}
public boolean createUser(User User) {
return userr.save(User) != null? true:false;
}
public User updateUser(Long id, User User) {
User	stu =userr.findById(id).get();
stu.setName(User.getName());
stu.setEmail(User.getEmail());
stu.setPassword(User.getPassword());
stu.setAddress(User.getAddress());
return userr.save(stu);
}
public boolean deleteUser(Long id) {
if(userr.findById(id).isPresent()){
	userr.deleteById(id);
return true;
}
return false;
}
}