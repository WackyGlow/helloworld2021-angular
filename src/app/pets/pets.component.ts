import { Component, OnInit } from '@angular/core';
import {pet} from "./pet";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets: pet[] = [{id: 1,name:'john'}, {id: 2, name: 'bob'}];
  constructor() { }

  ngOnInit(): void {
  }

}
