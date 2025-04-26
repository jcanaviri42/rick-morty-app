import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../services/rick-morty.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  characters: any[] = [];
  currentPage = 1;
  totalPages = 1;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.rickMortyService.getCharacters(page).subscribe({
      next: (data) => {
        this.characters = data.results;
        this.totalPages = data.info.pages;
        this.currentPage = page;
      },
      error: (err) => console.error(err),
    });
  }
}
