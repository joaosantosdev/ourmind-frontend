import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreen } from './screens/home/home.screen';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { IconComponent } from './components/icon/icon.component';
import { InfoHomeComponent } from './components/info-home/info-home.component';
import { ServicosHomeComponent } from './components/servicos-home/servicos-home.component';
import { SobreHomeComponent } from './components/sobre-home/sobre-home.component';
import { ContatoHomeComponent } from './components/contato-home/contato-home.component';
import { CursosHomeComponent } from './components/cursos-home/cursos-home.component';
import { CardCursoComponent } from './components/card-curso/card-curso.component';
import { BannerHomeComponent } from './components/banner-home/banner-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreen,
    NavbarHomeComponent,
    IconComponent,
    InfoHomeComponent,
    ServicosHomeComponent,
    SobreHomeComponent,
    ContatoHomeComponent,
    CursosHomeComponent,
    CardCursoComponent,
    BannerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
