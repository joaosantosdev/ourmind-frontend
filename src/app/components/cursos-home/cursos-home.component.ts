import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos-home',
  templateUrl: './cursos-home.component.html',
  styleUrls: ['./cursos-home.component.css']
})
export class CursosHomeComponent implements OnInit {
  public cursos = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
