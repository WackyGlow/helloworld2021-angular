import { Component } from '@angular/core';
import {getLocaleDateFormat, getLocaleDayNames} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Thyregod';
  age = 27;

  getAge(): number {
    return this.age;
  }

  setName() {

  }
}
