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

import com.exam.demo.Service.Registerservice;
import com.exam.demo.Models.Register;

@CrossOrigin
@RestController
@RequestMapping("/Register")
public class Registercontroller {
@Autowired
private Registerservice rserv;

@GetMapping("/Register")
public List<Register> getAllRegister() {
return rserv.getAll();
}

@GetMapping("/Register/{username}")
public Register getRegisterByEmail(@PathVariable String email) {
return rserv.getRegisterByEmail(email);
}

@PostMapping("/addRegister")
public void createRegister(@RequestBody Register Register) {
  rserv.createRegister(Register);
}

@PutMapping("/update/{email}")
public Register updateRegister( @RequestBody Register Register,@PathVariable String email) {
return rserv.updateRegister(email, Register);
}

@DeleteMapping("/deleteRegister/{email}")
public boolean deleteRegister(@PathVariable String email) {
return rserv.deleteRegister(email);
}
}