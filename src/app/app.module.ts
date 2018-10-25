import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegrasComponent } from './regras/regras.component';
import { HomeModule } from './home/home.module';
import { RegrasModule } from './regras/regras.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { PerguntasModule } from './perguntas/perguntas.module';
import { PerguntasComponent } from './perguntas/perguntas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'regras', component: RegrasComponent },
  { path: 'perguntas', component: PerguntasComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    RegrasModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PerguntasModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
