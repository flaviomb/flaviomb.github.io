import { Component, OnInit } from '@angular/core';
declare let $ : any;

@Component({
  selector: 'app-graduacao',
  templateUrl: './graduacao.component.html',
  styleUrls: ['./graduacao.component.css']
})
export class GraduacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }
  }
