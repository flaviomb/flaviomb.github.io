import { Component, OnInit } from '@angular/core';
declare let $ : any;

@Component({
  selector: 'app-pos-graduacao',
  templateUrl: './pos-graduacao.component.html',
  styleUrls: ['./pos-graduacao.component.css']
})
export class PosGraduacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }

  pos = [
    {title: '', url: ''},
    

  ];

}
