import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessBarComponent } from './process-bar/process-bar.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { TabsComponent } from './tabs/tabs.component';
import { CounterComponent } from './counter/counter.component';
import { TabGroupComponent } from './DI angular/tab-group/tab-group.component';
import { TabPanelComponent } from './DI angular/tab-panel/tab-panel.component';
import { TabBsGroupComponent } from './DI angular/tab-bs-group/tab-bs-group.component';
import { TabContentDirective } from './DI angular/tab-content.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProcessBarComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    TabsComponent,
    CounterComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabBsGroupComponent,
    TabContentDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
