package com.example.demo.servicesImpl;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Course;
import com.example.demo.respositories.CourseRepository;
import com.example.demo.services.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository courseRepository;
	
	@Override
	public Course addCourse(Course c) {
		// TODO Auto-generated method stub
		return courseRepository.save(c);
	}

	

	
	@Override
	public Course editCourse(Course c) {
		// TODO Auto-generated method stub
		return courseRepository.save(c);
	}

	@Override
	public Course getCourseById(Long id) {
		// TODO Auto-generated method stub
		Optional<Course> course = courseRepository.findById(id);
		return course.isPresent()  ? course.get() : null;
	}

	@Override
	public void deleteCourseById(Long id) {
		// TODO Auto-generated method stub
		courseRepository.deleteById(id);
		
	}

	@Override
	public List<Course> getAllCourses() {
		// TODO Auto-generated method stub
		return courseRepository.findAll();
	}

	
}

