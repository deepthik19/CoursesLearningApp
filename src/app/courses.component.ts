
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({ //Decorator
    selector:'courses',
    template:`
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <img [src]="imgURL" width="500" height="300"/>`
})
export class CoursesComponent{
    title="List of Courses";
    imgURL="https://images.pexels.com/photos/35807/rose-red-rose-romantic-rose-bloom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    //courses=["course1","course2","course3"];
    courses;

    constructor(service: CoursesService){//Dependency Injection asking angular to give the object
        //let service=new CoursesService();
        this.courses=service.getCourses();
    }
}