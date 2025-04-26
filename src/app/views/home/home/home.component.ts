import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  features = [
    {
      title: 'Characters',
      description: 'Browse all characters from the Rick and Morty universe',
      icon: 'people',
      route: '/characters',
    },
    {
      title: 'Episodes',
      description: 'Explore all episodes of the series',
      icon: 'tv',
      route: '/episodes',
    },
    {
      title: 'Locations',
      description: 'Discover all locations from the multiverse',
      icon: 'map',
      route: '/locations',
    },
  ];
}
