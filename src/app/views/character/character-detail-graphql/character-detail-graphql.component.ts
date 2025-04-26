import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraphqlService } from 'src/app/core/services/graphql.service';

@Component({
  selector: 'app-character-detail-graphql',
  templateUrl: './character-detail-graphql.component.html',
  styleUrls: ['./character-detail-graphql.component.scss'],
})
export class CharacterDetailGraphqlComponent implements OnInit {
  character: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private graphqlService: GraphqlService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.graphqlService.getCharacter(String(id)).subscribe(
      ({ data }) => {
        this.character = data.character;
      },
      (error) => {
        console.error('Error:', error);
        this.loading = false;
      }
    );
  }
}
