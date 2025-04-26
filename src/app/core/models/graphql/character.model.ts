import { Episode } from './episode.model';
import { PaginationInfo } from './pagination.info.model';

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: { name: string };
  location: { name: string };
  episode: Episode[];
}

export interface CharactersResponse {
  characters: {
    info: PaginationInfo;
    results: Character[];
  };
}

export interface CharacterResponse {
  character: Character;
}
