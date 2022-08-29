import { Component, OnInit } from '@angular/core';


let _counter=1;
@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count = _counter++;
  constructor() { }

  ngOnInit(): void {
  }

}
