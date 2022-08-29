import { Component, OnInit } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-bs-group',
  templateUrl: './tab-bs-group.component.html',
  styleUrls: ['./tab-bs-group.component.scss'],
  providers:[
    {
      provide:TabGroupComponent,
      useExisting:TabBsGroupComponent,
      // useClass:SomeClass,
      // useValue: new SomeClass()
      // use
    }
  ]
})
export class TabBsGroupComponent extends TabGroupComponent {

}
