import { Component } from '@angular/core';
declare let $ : any;
declare let Materialize : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

;
        ngOnInit() {


    $(document).ready(function(){
      $('.carousel').carousel();
    });

      $(document).ready(function(){
      $('.slider').slider();
    });


     var options = [ {selector: '#staggered-test', offset: 50, callback: function(el) { Materialize.toast("This is our ScrollFire Demo!", 1500 ); } },
                     {selector: '#staggered-test', offset: 205, callback: function(el) { Materialize.toast("Please continue scrolling!", 1500 ); } }, {selector: '#staggered-test', offset: 400, callback: function(el) { Materialize.showStaggeredList($(el)); } },
                     {selector: '#image-test', offset: 500, callback: function(el) { Materialize.fadeInImage($(el)); } } ]; Materialize.scrollFire(options);




    }
}
