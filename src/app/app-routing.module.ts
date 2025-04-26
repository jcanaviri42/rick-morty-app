import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./views/character/character.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: 'episodes',
    loadChildren: () =>
      import('./views/episode/episodes.module').then((m) => m.EpisodesModule),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./views/location/locations.module').then((m) => m.LocationsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./views/about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
