import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SelfEducatedAngular';
  currentProcess=70;
  navs =["link1", "link2"];
  currentIndex =0;
  showTab4 = true;
  currentDate = new Date();


  time=0;
  interval$ = interval(1000);
  addr ={
    address1: "123 some st",
    address2: "STE100",
    city:"HCM City",
    state:"State",
    zip:'1234',
    country:'uS'
  }

  users = [
    {
      name: "Tiep Phan",
      age: 30
    },
    {
      name: "Trung Vo",
      age: 28
    },
    {
      name: "Chau Tran",
      age: 29
    },
    { 
      name: "Tuan Anh",
      age: 16
    }
  ];


  addUser(){
    //this.users.push({name: 'new user', age: 16})// làm như vậy Full user list: được thêm nhưng Adult user list: không được thêm
    // this.users = [...this.users, {name: 'new user', age: 18}]
    this.users.push({name: 'new user', age: 19})
  }


}

