import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent} from './add-patient/add-patient.component';
import { VaccinationsComponent} from './vaccinations/vaccinations.component';


const routes: Routes = [
  { path: 'add-patient', component: AddPatientComponent},
  {path: 'app-vaccinations', component: VaccinationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
