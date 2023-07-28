package com.exam.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.demo.Models.Register;
import com.exam.demo.Repo.Registerrepo;

@Service
public class Registerservice {
@Autowired
private Registerrepo Registerr;

public List<Register> getAll() {
return Registerr.findAll();

}

public Register getRegisterByEmail(String email) {
return Registerr.findByEmail(email).get();
}

public void createRegister(Register Register) {
 Registerr.save(Register);
}

public Register updateRegister(String email, Register Register) {
	Register stu =Registerr.findByEmail(email).get();
stu.setUsername(Register.getUsername());
stu.setPassword(Register.getPassword());
//stu.setP_method(Register.getP_method());
return Registerr.save(stu);
}

public boolean deleteRegister(String email) {
if(Registerr.findByEmail(email).isPresent()){
	Registerr.deleteByEmail(email);
return true;
}
return false;
}
}