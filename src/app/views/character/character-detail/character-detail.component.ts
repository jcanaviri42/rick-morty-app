import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraphqlService } from '../../../core/services/graphql.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  character: any = null;
  isLoading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private graphqlService: GraphqlService
  ) {}

  ngOnInit(): void {
    this.loadCharacter();
  }

  loadCharacter(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isLoading = true;
      this.graphqlService.getCharacter(id).subscribe({
        next: ({ data }) => {
          this.character = data.character;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Failed to load character details';
          this.isLoading = false;
          console.error(err);
        },
      });
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Alive':
        return 'text-success';
      case 'Dead':
        return 'text-danger';
      default:
        return 'text-secondary';
    }
  }
}
