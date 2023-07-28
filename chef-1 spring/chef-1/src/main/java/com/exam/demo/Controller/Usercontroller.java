package com.exam.demo.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.demo.Service.Userservice;
import com.exam.demo.Models.User;

@RestController
@RequestMapping("/User")
public class Usercontroller {
@Autowired
private Userservice userv;
@GetMapping("/User")
public List<User> getAllUser() {

return userv.getAll();
}
@GetMapping("/User/{id}")
public User getUserById(@PathVariable Long id) {
return userv.getUserByid(id);
}
@PostMapping("/addUser")
public boolean createUser(@RequestBody User User) {
return userv.createUser(User);
}
@PutMapping("/updateUser/{id}")
public User updateUser( @RequestBody User User,@PathVariable Long id) {
return userv.updateUser(id, User);
}
@DeleteMapping("/deleteUser/{id}")
public boolean deleteUser(@PathVariable Long id) {
return userv.deleteUser(id);
}
}