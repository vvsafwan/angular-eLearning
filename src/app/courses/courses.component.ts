import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    {
      id:101,
      name:'Javascript for beginners',
      author:'John Heikela',
      duration:48,
      type:'Free',
      price:0.00,
      ratings:3.5,
      image:'assets/courses/jsforbeginners.jpg',
      description:'In this course you will learn about the fundementals of the javascript.This course is purely build for beginners'
    },
    {
      id:102,
      name:'Angular for beginners',
      author:'Mark Vought',
      duration:28,
      type:'Premium',
      price:129.00,
      ratings:4.5,
      image:'assets/courses/angularforbeginners.jpg',
      description:'In this course you will learn about the fundementals of the Angular framework.This course is purely build for beginners'
    },
    {
      id:103,
      name:'React for beginners',
      author:'Steve Smith',
      duration:18.5,
      type:'Free',
      price:0.00,
      ratings:4.0,
      image:'assets/courses/reactforbeginners.jpg',
      description:'In this course you will learn about the fundementals of the React framework.This course is purely build for beginners'
    },
    {
      id:104,
      name:'Advance angular course',
      author:'Steve Smith',
      duration:19.5,
      type:'Premium',
      price:145.00,
      ratings:4.8,
      image:'assets/courses/advanceangular.jpg',
      description:'In this course you will learn all the concepts of angular from basic to advance.This course help you to change the perspective of angular.'
    },
    {
      id:105,
      name:'Advance javascript course',
      author:'John Heikela',
      duration:60,
      type:'Premium',
      price:150.00,
      ratings:4.5,
      image:'assets/courses/advancejs.jpg',
      description:'In this course you will learn the complete modern javascript step by step.This course is purely demanded for those who have basic in js'
    },
    {
      id:106,
      name:'Angular with .NET core',
      author:'Mark Vought',
      duration:68,
      type:'Premium',
      price:129.00,
      ratings:4.5,
      image:'assets/courses/angularnetcore.jpg',
      description:'In this course you will learn about the fundementals of the Angular framework with .NET core.This course is purely build for beginners'
    }
  ]

  getTotalCourses(){
    return this.courses.length;
  }
  getTotalFreeCourses(){
    return this.courses.filter(course => course.type == 'Free').length;
  }
  getTotalPremiumCourses(){
    return this.courses.filter(course => course.type == 'Premium').length;
  }
  courseCountRadioButton:string = 'All';

  onFilterRadioButtonChanged(data:string){
    this.courseCountRadioButton=data;
  }
}
