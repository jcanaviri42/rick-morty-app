import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  aboutText = `
    This application uses the Rick and Morty API to provide information about
    characters, episodes, and locations from the Rick and Morty universe.
    The API provides both REST and GraphQL endpoints, and this application
    demonstrates how to consume both in an Angular application.
  `;
}
