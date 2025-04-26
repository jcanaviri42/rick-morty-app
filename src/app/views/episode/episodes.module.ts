import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { EpisodeListComponent } from './episode-list/episode-list.component';

@NgModule({
  declarations: [EpisodeListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EpisodeListComponent }]),
    SharedModule,
  ],
})
export class EpisodesModule {}
