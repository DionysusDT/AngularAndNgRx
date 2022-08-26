import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-process-bar',
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.scss']
})
export class ProcessBarComponent implements OnInit, OnChanges {
  @Input() set process(val:number){
    ///Validator

    this._process = val;
  }

  private _process = 10;
  get process(){
    return this._process;
  }
  @Input() backgroundColor = "red"
  @Input() processColor = "blue"

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

}
