package com.exam.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.demo.Models.Chef;
import com.exam.demo.Repo.Chefrepo;

@Service
public class Chefservice {
@Autowired
private Chefrepo chefr;

public List<Chef> getAll() {
return chefr.findAll();

}
public Chef getChefByid(Long id) {
return chefr.findById(id).get();
}
public boolean createChef(Chef Chef) {
return chefr.save(Chef) != null? true:false;
}
public Chef updateChef(Long id, Chef Chef) {
Chef stu =chefr.findById(id).get();
stu.setName(Chef.getName());
stu.setMail(Chef.getMail());
//stu.setSpeciality(Chef.getSpeciality());
stu.setAddress(Chef.getAddress());
stu.setExperience(Chef.getExperience());
stu.setCharge(Chef.getCharge());
stu.setRating(Chef.getRating());
return chefr.save(stu);
}
public boolean deleteChef(Long id) {
if(chefr.findById(id).isPresent()){
	chefr.deleteById(id);
return true;
}
return false;
}
}