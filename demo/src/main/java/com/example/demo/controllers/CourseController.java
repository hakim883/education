package com.example.demo.controllers;
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

import com.example.demo.models.Course;
import com.example.demo.services.CourseService;

@CrossOrigin("*")
@RequestMapping("api/courses")
@RestController
public class CourseController {
	@Autowired
	private CourseService courseService;

	@PostMapping
	public Course addCourse(@RequestBody Course c) {
		return courseService.addCourse(c);
	}

	@GetMapping("/{id}")
	public Course getCourse(@PathVariable Long id) {
		return courseService.getCourseById(id);
	}

	@GetMapping
	public List<Course> getAllCourses() {
		return courseService.getAllCourses();
	}

	@DeleteMapping("/{id}")
	public void deleteCourse(@PathVariable Long id) {
		courseService.deleteCourseById(id);
	}

	@PutMapping("/{id}")
	public Course editCourse(@RequestBody Course c) {
		return courseService.editCourse(c);
	}
}
