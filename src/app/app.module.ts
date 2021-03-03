import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddComponent } from './components/todo/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    HeaderComponent,
    AddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
