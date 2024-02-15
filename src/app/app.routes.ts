import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { InfoFormComponent } from './components/form/form-component/info-form/info-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'form',
    component: FormComponent,
  },
];
