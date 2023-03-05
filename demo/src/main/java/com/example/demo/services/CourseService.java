package com.example.demo.services;
import java.util.List;

import com.example.demo.models.Course;
public interface CourseService {
	
	public Course addCourse(Course c);

	public Course editCourse(Course c);

	public Course getCourseById(Long id);
	
	public void deleteCourseById(Long id);
	
	public List<Course> getAllCourses();

}
