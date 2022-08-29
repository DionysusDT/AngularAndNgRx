import { Component } from '@angular/core';

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
}
