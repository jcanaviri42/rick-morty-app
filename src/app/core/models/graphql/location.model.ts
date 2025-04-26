import { Character } from './character.model';
import { PaginationInfo } from './pagination.info.model';

export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
}

export interface LocationsResponse {
  locations: {
    info: PaginationInfo;
    results: Location[];
  };
}

export interface LocationResponse {
  location: Location;
}
