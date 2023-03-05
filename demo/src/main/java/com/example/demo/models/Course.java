package com.example.demo.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "courses")
public class Course {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "COURSE_ID")
	private Long id;
	private String title;
	private String teacher_id;
	private String description;
	private int number_place;
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Course(Long id, String title, String teacher_id, String description, int number_place) {
		super();
		this.id = id;
		this.title = title;
		this.teacher_id = teacher_id;
		this.description = description;
		this.number_place = number_place;
	}
	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", teacher_id=" + teacher_id + ", description=" + description
				+ ", number_place=" + number_place + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getTeacher_id() {
		return teacher_id;
	}
	public void setTeacher_id(String teacher_id) {
		this.teacher_id = teacher_id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getNumber_place() {
		return number_place;
	}
	public void setNumber_place(int number_place) {
		this.number_place = number_place;
	}
/*
	@ManyToOne
	@JoinColumn(name = "COURSE_ID", nullable = true)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Course course;
	*/

}
