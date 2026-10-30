import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'Imprint', component: ImprintComponent },
  { path: 'DataProtection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
