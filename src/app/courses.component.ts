
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
        <img [src]="imgURL" width="500" height="300"/>
        <table>
         <tr>
         <td [attr.colspan]="colSpan"></td>
         </tr>
        </table>
        <button class="btn btn-primary" [class.active]="isActive">Save Data</button><br/>
        <button [style.color]="isActive ? 'blue': 'white'">Submit Data</button><br/><br/>
        <button (click)="onSave($event)">Display Data</button>
        <br/><input (keyup)="onEnter($event)"/>
        <br/><input (keyup.enter)="onEventEnter()"/>
        <br/>Email: <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        <br/> {{ course.title | uppercase | lowercase  }}
        <br/> {{ course.title | summary:10  }}
        <br/> {{ course.rating | number:'2.1-1'   }}
        <br/> {{ course.students | number }}
        <br/> {{ course.releasedate | date:'shortDate'  }}
        <br/> {{ course.price | currency:'INR':'symbol':'3.2-2'  }}`
})
export class CoursesComponent{
    title="List of Courses";
    imgURL="https://images.pexels.com/photos/35807/rose-red-rose-romantic-rose-bloom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    colSpan="10";
    isActive=true;
    email='sam@gmail.com';
    //courses=["course1","course2","course3"];
    courses;
    course={
        title:'this is couRse for angular',
        rating:32.123,
        students:34563,
        releasedate:new Date(2016,3,1),
        price:34.56
    };
    constructor(service: CoursesService){//Dependency Injection asking angular to give the object
        //let service=new CoursesService();
        this.courses=service.getCourses();
    }
    onSave($event){
        console.log('Button is clicked' , $event);
    }
    onEnter($event){
        if($event.keyCode===13){
            console.log('Enter is pressed');
        }
    }
    onEventEnter(){
        console.log('Enter is pressed through event filtering');
    }
    onKeyUp(){
        console.log(this.email);
    }
}