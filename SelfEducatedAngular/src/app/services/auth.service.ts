import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get currentUser(){
    return of({username:'doan', articles:['title-1']})
  }
}
