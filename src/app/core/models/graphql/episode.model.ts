import { PaginationInfo } from "./pagination.info.model";

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
}

export interface EpisodesResponse {
  episodes: {
    info: PaginationInfo;
    results: Episode[];
  };
}

export interface EpisodeResponse {
  episode: Episode;
}
