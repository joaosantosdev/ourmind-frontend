import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  public links = [
    {
      path:"",
      title:"Home",
      active:true
    },
    {
      path:"",
      title:"Serviços",
    },
    {
      path:"",
      title:"Contato",
    },
    {
      path:"",
      title:"Sobre",
    },
    {
      path:"",
      title:"Cursos",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
