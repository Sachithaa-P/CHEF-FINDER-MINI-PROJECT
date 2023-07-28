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

import com.exam.demo.Service.Bookservice;
import com.exam.demo.Models.Booking;

@RestController
@RequestMapping("/Booking")
public class Bookcontroller {
@Autowired
private Bookservice bserv;
@GetMapping("/Book")
public List<Booking> getAllBooking() {

return bserv.getAll();
}
@GetMapping("/Book/{id}")
public Booking getBookingById(@PathVariable Long id) {
return bserv.getBookingById(id);
}
@PostMapping("/addBook")
public boolean createBooking(@RequestBody Booking Booking) {
return bserv.createBooking(Booking);
}
@PutMapping("/updateBook/{id}")
public Booking updateBooking( @RequestBody Booking Booking,@PathVariable Long id) {
return bserv.updateBooking(id, Booking);
}
@DeleteMapping("/deleteBook/{id}")
public boolean deleteBooking(@PathVariable Long id) {
return bserv.deleteBooking(id);
}
}