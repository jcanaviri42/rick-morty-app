import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'graphql-tag';
import { Observable } from 'rxjs';
import {
  CharacterResponse,
  CharactersResponse,
} from '../models/graphql/character.model';
import {
  EpisodeResponse,
  EpisodesResponse,
} from '../models/graphql/episode.model';
import {
  LocationResponse,
  LocationsResponse,
} from '../models/graphql/location.model';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  // CHARACTER QUERIES
  getCharacters(page: number = 1): Observable<{ data: CharactersResponse }> {
    return this.apollo.query<CharactersResponse>({
      query: gql`
        query GetCharacters($page: Int!) {
          characters(page: $page) {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              status
              species
              type
              gender
              image
            }
          }
        }
      `,
      variables: { page },
    });
  }

  getCharacter(id: string): Observable<{ data: CharacterResponse }> {
    return this.apollo.query<CharacterResponse>({
      query: gql`
        query GetCharacter($id: ID!) {
          character(id: $id) {
            id
            name
            status
            species
            type
            gender
            image
            origin {
              name
            }
            location {
              name
            }
            episode {
              id
              name
              episode
            }
          }
        }
      `,
      variables: { id },
    });
  }

  // EPISODE QUERIES
  getEpisodes(page: number = 1): Observable<{ data: EpisodesResponse }> {
    return this.apollo.query<EpisodesResponse>({
      query: gql`
        query GetEpisodes($page: Int!) {
          episodes(page: $page) {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              air_date
              episode
            }
          }
        }
      `,
      variables: { page },
    });
  }

  getEpisode(id: string): Observable<{ data: EpisodeResponse }> {
    return this.apollo.query<EpisodeResponse>({
      query: gql`
        query GetEpisode($id: ID!) {
          episode(id: $id) {
            id
            name
            air_date
            episode
            characters {
              id
              name
              image
            }
          }
        }
      `,
      variables: { id },
    });
  }

  // LOCATION QUERIES
  getLocations(page: number = 1): Observable<{ data: LocationsResponse }> {
    return this.apollo.query<LocationsResponse>({
      query: gql`
        query GetLocations($page: Int!) {
          locations(page: $page) {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              type
              dimension
            }
          }
        }
      `,
      variables: { page },
    });
  }

  getLocation(id: string): Observable<{ data: LocationResponse }> {
    return this.apollo.query<LocationResponse>({
      query: gql`
        query GetLocation($id: ID!) {
          location(id: $id) {
            id
            name
            type
            dimension
            residents {
              id
              name
              image
            }
          }
        }
      `,
      variables: { id },
    });
  }

  // SEARCH QUERY (OPTIONAL)
  searchCharacters(name: string): Observable<{ data: CharactersResponse }> {
    return this.apollo.query<CharactersResponse>({
      query: gql`
        query SearchCharacters($name: String!) {
          characters(filter: { name: $name }) {
            info {
              count
              pages
            }
            results {
              id
              name
              status
              species
              image
            }
          }
        }
      `,
      variables: { name },
    });
  }
}
