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

import com.example.demo.models.Teacher;
import com.example.demo.services.TeacherService;

@CrossOrigin("*")
@RequestMapping("api/teachers")
@RestController
public class TeacherController {

	@Autowired
	private TeacherService teacherService;

	@PostMapping
	public Teacher addTeacher(@RequestBody Teacher p) {
		return teacherService.addTeacher(p);
	}

	@GetMapping("/{id}")
	public Teacher getTeacher(@PathVariable Long id) {
		return teacherService.getTeacherById(id);
	}

	@GetMapping
	public List<Teacher> getAllTeachers() {
		return teacherService.getAllTeachers();
	}

	@DeleteMapping("/{id}")
	public void deleteTeacher(@PathVariable Long id) {
		teacherService.deleteTeacherById(id);
	}

	@PutMapping("/{id}")
	public Teacher editTeacher(@RequestBody Teacher p) {
		return teacherService.editTeacher(p);
	}
}
