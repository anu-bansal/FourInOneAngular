import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
  { path: 'main', component: MainMenuComponent },
  { path: '', redirectTo : '/main' , pathMatch: "full"}
];

@NgModule({
  exports : [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
