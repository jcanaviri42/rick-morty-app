import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlService } from '../../../core/services/graphql.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  locations: any[] = [];
  currentPage = 1;
  totalPages = 1;
  isLoading = false;

  constructor(private graphqlService: GraphqlService, private router: Router) {}

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations(): void {
    this.isLoading = true;
    this.graphqlService.getLocations(this.currentPage).subscribe({
      next: ({ data }) => {
        this.locations = data.locations.results;
        this.totalPages = data.locations.info.pages;
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
    this.loadLocations();
  }

  viewLocationDetails(id: string): void {
    this.router.navigate(['/locations', id]);
  }
}
