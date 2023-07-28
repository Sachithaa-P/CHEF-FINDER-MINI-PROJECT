package com.exam.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.demo.Models.Booking;
import com.exam.demo.Repo.Bookrepo;

@Service
public class Bookservice {
@Autowired
private Bookrepo bookr;
public List<Booking> getAll() {
return bookr.findAll();

}
public Booking getBookingById(Long id) {
return bookr.findById(id).get();
}
public boolean createBooking(Booking Booking) {
return bookr.save(Booking) != null? true:false;
}
public Booking updateBooking(Long id, Booking Booking) {
Booking stu =bookr.findById(id).get();
stu.setCname(Booking.getCname());
stu.setUname(Booking.getUname());
stu.setAmount(Booking.getAmount());
stu.setP_method(Booking.getP_method());
return bookr.save(stu);
}
public boolean deleteBooking(Long id) {
if(bookr.findById(id).isPresent()){
bookr.deleteById(id);
return true;
}
return false;
}
}