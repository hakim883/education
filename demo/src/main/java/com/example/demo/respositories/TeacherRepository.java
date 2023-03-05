package com.example.demo.respositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Teacher;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
