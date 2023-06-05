import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './component/chat/chat.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './component/registro/registro.component';

const routes: Routes = [
  { path:'', component: RegistroComponent },
  { path:'Home', component: ChatComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
