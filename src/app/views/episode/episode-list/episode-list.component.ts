import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlService } from '../../../core/services/graphql.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
  episodes: any[] = [];
  currentPage = 1;
  totalPages = 1;
  isLoading = false;

  constructor(private graphqlService: GraphqlService, private router: Router) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.isLoading = true;
    this.graphqlService.getEpisodes(this.currentPage).subscribe({
      next: ({ data }) => {
        this.episodes = data.episodes.results;
        this.totalPages = data.episodes.info.pages;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      },
    });
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadEpisodes();
  }

  viewEpisodeDetails(id: string): void {
    this.router.navigate(['/episodes', id]);
  }
}
