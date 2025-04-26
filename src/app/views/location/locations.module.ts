import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LocationListComponent } from './location-list/location-list.component';

@NgModule({
  declarations: [LocationListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LocationListComponent }]),
    SharedModule,
  ],
})
export class LocationsModule {}
