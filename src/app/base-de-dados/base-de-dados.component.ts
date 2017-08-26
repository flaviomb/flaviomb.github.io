import { Component, OnInit } from '@angular/core';
declare let $ : any;

@Component({
  selector: 'app-base-de-dados',
  templateUrl: './base-de-dados.component.html',
  styleUrls: ['./base-de-dados.component.css']
})
export class BaseDeDadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
   $('.collapsible').collapsible();
 });
  }

}
