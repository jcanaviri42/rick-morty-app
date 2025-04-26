import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../../../core/services/graphql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  currentPage = 1;
  totalPages = 1;
  isLoading = false;
  searchQuery = '';

  constructor(private graphqlService: GraphqlService, private router: Router) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.isLoading = true;
    this.graphqlService.getCharacters(this.currentPage).subscribe({
      next: ({ data }) => {
        this.characters = data.characters.results;
        this.totalPages = data.characters.info.pages;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      },
    });
  }

  searchCharacters(): void {
    if (this.searchQuery.trim()) {
      this.isLoading = true;
      this.graphqlService.searchCharacters(this.searchQuery).subscribe({
        next: ({ data }) => {
          this.characters = data.characters.results;
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.isLoading = false;
        },
      });
    } else {
      this.loadCharacters();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadCharacters();
  }

  viewCharacterDetails(id: string): void {
    this.router.navigate(['/characters', id]);
  }
}
