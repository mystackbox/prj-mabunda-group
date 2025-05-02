import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PendingChangesGuard } from '../../shared/route-guards/canDeactivate/can-deactivate.guard';


const routes: Routes = [{ path: '', component: ContactUsComponent, canDeactivate:[PendingChangesGuard]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PendingChangesGuard],
})
export class ContactUsRoutingModule { }
