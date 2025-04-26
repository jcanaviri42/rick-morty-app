import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CharacterResolver } from 'src/app/resolvers/character.resolver';

@NgModule({
  declarations: [CharacterListComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CharacterListComponent },
      {
        path: ':id',
        component: CharacterDetailComponent,
        resolve: {
          character: CharacterResolver,
        },
      },
    ]),
    SharedModule,
  ],
})
export class CharactersModule {}
