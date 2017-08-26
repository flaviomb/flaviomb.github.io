import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 livrosLista = [
   {imagePath: '../assets/livros/01.png', link: 'http://www.briquetdelemos.com.br/biblioteconomia/fontes-de-informacao-para-pesquisa-em-direito.html', imageTitle: 'FONTES DE INFORMAÇÃO PARA PESQUISA EM DIREITO'},
   {imagePath: '../assets/livros/02.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/testemunha-ocular-recordacoes.html', imageTitle: 'TESTEMUNHA OCULAR (RECORDAÇÕES)'},
   {imagePath: '../assets/livros/03.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/selec-o-de-materiais-de-informac-o-principios-e-tecnicas-3-ed.html', imageTitle: 'SELEÇÃO DE MATERIAIS DE INFORMAÇÃO: PRINCÍPIOS E TÉCNICAS - 3. ED.'},
   {imagePath: '../assets/livros/04.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/regulamentos-orcamentos-etcetera-miniguia.html', imageTitle: 'REGULAMENTOS, ORÇAMENTOS, ETCÉTERA: MINIGUIA'},
   {imagePath: '../assets/livros/05.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/est-o-todos-dormindo.html', imageTitle: 'ESTÃO TODOS DORMINDO'},
   {imagePath: '../assets/livros/06.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/portuguese-and-brazilian-books-in-the-john-carter-brown-library-1537-1839-with-a-selection-of-braziliana-printed-in-countries-other-than-portugal-and-brazil.html', imageTitle: 'PORTUGUESE AND BRAZILIAN BOOKS IN THE JOHN CARTER BROWN LIBRARY, 1537-1839, WITH A SELECTION OF BRAZILIANA PRINTED IN COUNTRIES OTHER THAN PORTUGAL AND BRAZIL'},
   {imagePath: '../assets/livros/07.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/conselhos-para-formar-uma-biblioteca-baixar-em-pdf.html', imageTitle: 'Conselhos para formar uma biblioteca'},
   {imagePath: '../assets/livros/08.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/para-saber-mais-fontes-de-informac-o-em-ci-ncia-e-tecnologia-baixar-em-pdf.html', imageTitle: 'Para saber mais: fontes de informação em ciência e tecnologia. (PDF)'},
   {imagePath: '../assets/livros/09.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/o-futuro-da-biblioteconomia-baixar-em-pdf.html', imageTitle: 'O Futuro da biblioteconomia: cinco tons de inquietação'},
   {imagePath: '../assets/livros/10.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/ordenac-o-de-documentos-na-atividade-bibliotecaria-baixar-em-pdf.html', imageTitle: 'ORDENAÇÃO DE DOCUMENTOS NA ATIVIDADE BIBLIOTECÁRIA (PDF)'},
   {imagePath: '../assets/livros/11.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/ler-se-aprende-lendo-baixar-em-pdf.html', imageTitle: 'Ler se aprende lendo (PDF)'},
   {imagePath: '../assets/livros/12.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/de-bibliotecas-e-biblioteconomias-percursos.html', imageTitle: 'DE BIBLIOTECAS E BIBLIOTECONOMIAS: PERCURSOS'},
   {imagePath: '../assets/livros/13.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/brasil-obras-de-refer-ncia-1999-2013.html', imageTitle: 'BRASIL: OBRAS DE REFERÊNCIA, 1999-2013'},
   {imagePath: '../assets/livros/14.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/cinco-leis-da-biblioteconomia.html', imageTitle: 'CINCO LEIS DA BIBLIOTECONOMIA'},
   {imagePath: '../assets/livros/15.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/diretrizes-da-ifla-para-bibliotecas-publicas.html', imageTitle: 'DIRETRIZES DA IFLA PARA BIBLIOTECAS PÚBLICAS'},
   {imagePath: '../assets/livros/16.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/planejamento-de-bibliotecas-e-servicos-de-informac-o.html', imageTitle: 'PLANEJAMENTO DE BIBLIOTECAS E SERVIÇOS DE INFORMAÇÃO (PDF)'},
   {imagePath: '../assets/livros/17.jpg', link: 'http://www.briquetdelemos.com.br/biblioteconomia/o-que-e-a-documentac-o.html', imageTitle: 'O QUE É DOCUMENTAÇÃO?'},
 ]

}
