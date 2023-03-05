import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { CounterComponent } from './components/counter/counter.component';
import { EventsComponent } from './components/events/events.component';
import { NewsComponent } from './components/news/news.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';
import { TeacherTableComponent } from './components/teacher-table/teacher-table.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CourseComponent } from './components/course/course.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    TeachersComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    CounterComponent,
    EventsComponent,
  
    NewsComponent,
    NewsletterComponent,
    AddCourseComponent,
    AddTeacherComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent,
    BlogSingleComponent,
    TeacherComponent,
    TeacherInfoComponent,
    TeacherTableComponent,
    EditTeacherComponent,
    EditCourseComponent,
    CourseComponent,
    CourseInfoComponent,
    CourseTableComponent,
    ProfileComponent,
    AdminComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
