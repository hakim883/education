package com.example.demo.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.demo.models.Course;

@Entity
@Table(name = "teachers")
public class Teacher {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "TEACHER_ID")
	private Long id;
	private String name;
	private String email;
	private String speciality;
	private String experience;
/*
	@ManyToOne
	@JoinColumn(name = "COURSE_ID", nullable = true)
//	@OnDelete(action = OnDeleteAction.CASCADE)
	private Teacher teacher;
*/
	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Teacher(Long id, String name, String email, String speciality, String experience) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.speciality = speciality;
		this.experience = experience;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	

	

	@Override
	public String toString() {
		return "Teacher [id=" + id + ", name=" + name + ", email=" + email + ", speciality=" + speciality
				+ ", experience=" + experience + "]";
	}
	
	
	
}
