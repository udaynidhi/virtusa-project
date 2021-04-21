package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.model.Courses;
import com.example.demo.model.User;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.UserRepository;

@SpringBootApplication
public class Backend1Application implements CommandLineRunner {

	public static void main(String[] args)  {
		SpringApplication.run(Backend1Application.class, args);
	}
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private CourseRepository courseRepository;
	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("email1@gmail.com","password1","username1","mobileno1"/*,"qualification1",true,"role1"*/));
		this.userRepository.save(new User("email2@gmail.com","password2","username2","mobileno2"/*,"qualification2",false,"role2"*/));
		this.userRepository.save(new User("adminemail@gmail.com","adminpass","username1","mobileno1"));
		this.courseRepository.save(new Courses("ANGULAR", "Frontend", "https://www.youtube.com/watch?v=iZ1mlcCkY8A"," 2020"," https://pepa.holla.cz/wp-content/uploads/2015/10/ng-book-The-Complete-Book-on-AngularJS.pdf","https://dwglogo.com/wp-content/uploads/2017/03/AngularJS_logo_01.png"));

		this.courseRepository.save(new Courses("REACT", "Frontend", "https://www.youtube.com/watch?v=iZ1mlcCkY8A"," 2020"," https://pepa.holla.cz/wp-content/uploads/2015/10/ng-book-The-Complete-Book-on-AngularJS.pdf","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"));

		this.courseRepository.save(new Courses("Node", "Backtend", "https://www.youtube.com/watch?v=iZ1mlcCkY8A"," 2020"," https://pepa.holla.cz/wp-content/uploads/2015/10/ng-book-The-Complete-Book-on-AngularJS.pdf","https://miro.medium.com/max/960/0*1HZjLR0_IL_SlBKV.png"));

		this.courseRepository.save(new Courses("MySql", "Backend", "https://www.youtube.com/watch?v=iZ1mlcCkY8A"," 2020","https://pepa.holla.cz/wp-content/uploads/2015/10/ng-book-The-Complete-Book-on-AngularJS.pdf","https://sqlbackupandftp.com/blog/wp-content/uploads/2015/01/mysql-logo_2800x2800_pixels1.png"));
		
		
		
		//this.userRepository.save(new User());
	}
	 

}
