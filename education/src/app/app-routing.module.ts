import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { BlogSingleComponent } from './components/blog-single/blog-single.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { EventsComponent } from './components/events/events.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeacherInfoComponent } from './components/teacher-info/teacher-info.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeamComponent } from './components/team/team.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "addcourse", component: AddCourseComponent},
  {path: "addteacher", component: AddTeacherComponent},
  {path: "blog", component: BlogComponent},
  {path: "blog-single", component: BlogSingleComponent},
  {path: "contact", component: ContactComponent},
  {path: "counter", component: CounterComponent},
  {path: "events", component: EventsComponent},
  {path: "features", component: FeaturesComponent},
  {path: "footer", component: FooterComponent},
  {path: "header", component: HeaderComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "news", component: NewsComponent},
  {path: "newsletter", component: NewsletterComponent},
  {path: "signup", component: SignupComponent},
  {path: "teachers", component: TeachersComponent},
  {path: "team", component: TeamComponent},
  {path: "teacherInfo/:id", component:TeacherInfoComponent},
{path: "editTeacher/:id", component:EditTeacherComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
