package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Courses;
import com.example.demo.model.User;
import com.example.demo.model.UserLogin;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
public class UserController {


  @Autowired
  private UserRepository userRepository;

  @Autowired
  private CourseRepository courseRepository;
  //@CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("users")
  public List<User> getUsers(){
	  return this.userRepository.findAll();  
  }
  
  //@CrossOrigin(origins = "http://localhost:4200")
  @PostMapping("register")
  public boolean getUser(@RequestBody User user)
  {
	  String email=user.getUserEmail();
	 // String number=user.getMobileNumber();
//	  System.out.println(email);
//	  System.out.println(number+" "+user.getId()+" "+user.getPassword()+" "+user.getUsername());
	  int size=(userRepository.findByUserEmail(email)).size();
	  if(size==0)
	  {
	    this.userRepository.save(user);
	    return true;
	  }
	  return false;
	  
  }
  //@CrossOrigin(origins = "http://localhost:4200")
  @PostMapping("login")
  public boolean getCrendentials(@RequestBody UserLogin Userlogin) 
  {
	  String email=Userlogin.getLoginEmail();
	  String pwd=Userlogin.getLoginPassword();
	  System.out.println(email+pwd);
	  List<User> l=this.userRepository.findByUserEmail(email);
	  if(l.size()==0)
		  return false;
	  return l.get(0).getPassword().equals(pwd);
  }
@GetMapping("admin")
  public ResponseEntity<List<User>> getUsers1() {
      List<User> users = userRepository.findAll();
      return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @PostMapping("admin/addUser")
  public boolean createStudent(@RequestBody User us) {
      User u= userRepository.save(us);
      return true;
      //return new ResponseEntity<>(u, HttpStatus.OK);
  }


  @PutMapping("admin/updateUser")
  public boolean updateStudent(@RequestBody User student) {
	  
//	  String email=student.getUserEmail();
//	  int size=(this.userRepository.findByUserEmail(email).size());
//	  return true;
//  }
    List<User> std = userRepository.findByUserEmail(student.getUserEmail());
      //User stdUpdated = std.get();
      if(std.size()!=0) {
    	  User stdUpdated=std.get(0);
      stdUpdated.setPassword(student.getPassword());
      stdUpdated.setUserName(student.getUserName());
      stdUpdated.setMobileNumber(student.getMobileNumber());
      userRepository.save(stdUpdated);
      //  User studentUpdated = userRepository.save(stdUpdated);
      //return new ResponseEntity<>(studentUpdated, HttpStatus.OK);
  }
      else
    	   userRepository.save(student);
      return true;
  }



  @DeleteMapping("admin/delete/{emailId}")
  public boolean createStudent(@PathVariable(name = "emailId") String email) {
 // @DeleteMapping("/admin/deleteUser")
 // public ResponseEntity<String> createStudent(String email) {
  List<User>l=userRepository.findByUserEmail(email);//.substring(1,email.length()-1));
  if(l.size()!=0)
  {
	  Long id=l.get(0).getId();
	 
      userRepository.deleteById(id);
      return true;
      //return new ResponseEntity<>("student id: "+ email + " deleted successfully", HttpStatus.OK);
  }
  else
	  return false;
  }
  
  @GetMapping("courses")
  public ResponseEntity<List<Courses>> course1Details()
  {
	 List<Courses> c=courseRepository.findAll();
	 return new ResponseEntity<>(c, HttpStatus.OK);
	  
  }
  @GetMapping("details/:{name}")
  public ResponseEntity<List<Courses>> courseDetails(@PathVariable(name = "name") String courseName) {
	  
	  System.out.println(courseName);
	  List<Courses> c=courseRepository.findByCourseName(courseName);
	  return new ResponseEntity<>(c, HttpStatus.OK);
	  
  }
  
  @GetMapping("admin/courses")
  public ResponseEntity<List<Courses>> courseDetails()
  {
	 List<Courses> c=courseRepository.findAll();
	 return new ResponseEntity<>(c, HttpStatus.OK);
	  
  }
  
//  public boolean createStudent(@RequestBody User us) {
//      User u= userRepository.save(us);
//      return true;
//      //return new ResponseEntity<>(u, HttpStatus.OK);
//  }

  @PostMapping("admin/addCourse")
  public boolean addCourse(@RequestBody Courses course) {
     // Optional<User> s = userRepository.findById(course.getId());
	    Courses c= courseRepository.save(course);
	    System.out.println(c);
	      return true;

  }
  @DeleteMapping("admin/delete{courseName}")
  public boolean deleteCourse(@PathVariable(name = "courseName") String courseName) {
 // @DeleteMapping("/admin/deleteUser")
 // public ResponseEntity<String> createStudent(String email) {
  List<Courses>l=courseRepository.findByCourseName(courseName.substring(1,courseName.length()-1));
  if(l.size()!=0)
  {
	  Long id=l.get(0).getId();
	 
      userRepository.deleteById(id);
      return true;
      //return new ResponseEntity<>("student id: "+ email + " deleted successfully", HttpStatus.OK);
  }
  else
	  return false;
  }

      
}
  

