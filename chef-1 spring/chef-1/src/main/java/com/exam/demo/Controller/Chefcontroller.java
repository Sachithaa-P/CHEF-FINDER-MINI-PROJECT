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

import com.exam.demo.Service.Chefservice;
import com.exam.demo.Models.Chef;

@RestController
@RequestMapping("/Chef")
public class Chefcontroller {
@Autowired
private Chefservice cserv;
@GetMapping("/Chef")
public List<Chef> getAllChef() {

return cserv.getAll();
}
@GetMapping("/chef/{id}")
public Chef getChefById(@PathVariable Long id) {
return cserv.getChefByid(id);
}
@PostMapping("/addChef")
public boolean createChef(@RequestBody Chef Chef) {
return cserv.createChef(Chef);
}
@PutMapping("/updatechef/{id}")
public Chef updateChef( @RequestBody Chef Chef,@PathVariable Long id) {
return cserv.updateChef(id, Chef);
}
@DeleteMapping("/deletechef/{id}")
public boolean deleteChef(@PathVariable Long id) {
return cserv.deleteChef(id);
}
}