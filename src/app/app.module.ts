import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegrasComponent } from './regras/regras.component';
import { HomeModule } from './home/home.module';
import { RegrasModule } from './regras/regras.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'regras', component: RegrasComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RegrasModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
