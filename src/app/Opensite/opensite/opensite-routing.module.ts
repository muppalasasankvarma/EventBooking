import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenMasterComponent } from '../open-master/open-master.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CreateEventComponent } from '../create-event/create-event.component';

const routes: Routes = [
  {
    path: '', component: OpenMasterComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'Login', component: LoginComponent
      },
      {
        path: 'Register', component: RegisterComponent
      },
      {
        path: 'CreateEvent', component: CreateEventComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpensiteRoutingModule { }
