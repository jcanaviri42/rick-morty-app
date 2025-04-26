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

  getVisiblePages(): number[] {
    const visiblePages = [];
    const maxVisible = 5; // Adjust as needed
    
    let start = Math.max(2, this.currentPage - 2);
    let end = Math.min(this.totalPages - 1, this.currentPage + 2);
  
    // Adjust if we're at the beginning
    if (this.currentPage <= 3) {
      end = Math.min(5, this.totalPages - 1);
    } 
    // Adjust if we're at the end
    else if (this.currentPage >= this.totalPages - 2) {
      start = Math.max(this.totalPages - 4, 2);
    }
  
    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }
  
    return visiblePages;
  }
}
