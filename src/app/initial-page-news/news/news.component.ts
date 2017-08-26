import { Component, OnInit,Output } from '@angular/core';
import {New} from '../new.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 
  @Output() news: New[] = [
    new New('Divulgado o resultado do Concurso da Cosanpa',
     'Foi divulgado o resultado do concurso da cosanpa. Confira o resultado aqui',
     '../../assets/noticias/cosanpa.gif',
     '28/07/2017')   
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
