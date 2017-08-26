import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { InitialPageNewsComponent } from './initial-page-news/initial-page-news.component';
import { InitialPagePeriodicosComponent } from './initial-page/initial-page-periodicos/initial-page-periodicos.component';
import {Routes, RouterModule} from '@angular/router';
import { PeriodicosComponent } from './periodicos/periodicos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BaseDeDadosComponent } from './base-de-dados/base-de-dados.component';
import { CursosComponent } from './cursos/cursos.component';
import { GraduacaoComponent } from './cursos/graduacao/graduacao.component';
import { PosGraduacaoComponent } from './cursos/pos-graduacao/pos-graduacao.component';
import { InitialPageDatabaseComponent } from './initial-page/initial-page-database/initial-page-database.component';
import { ConcursosComponent } from './concursos/concursos.component';
import { LivrosComponent } from './livros/livros.component';

const appRoutes: Routes = [
  {path: '', component: ParallaxComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'base-de-dados', component: BaseDeDadosComponent},
  {path: 'periodicos', component: PeriodicosComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'graduacao', component: GraduacaoComponent},
  {path: 'pos-graduacao', component: PosGraduacaoComponent},
  {path: 'concursos', component: ConcursosComponent},
  {path: 'livros', component: LivrosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InitialPageComponent,
    FooterComponent,
    SliderComponent,
    ParallaxComponent,
    InitialPageNewsComponent,
    InitialPagePeriodicosComponent,
    PeriodicosComponent,
    NoticiasComponent,
    BlogsComponent,
    BaseDeDadosComponent,
    CursosComponent,
    GraduacaoComponent,
    PosGraduacaoComponent,
    InitialPageDatabaseComponent,
    ConcursosComponent,
    LivrosComponent

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {

}
