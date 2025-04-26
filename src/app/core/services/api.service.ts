import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/character?page=${page}`);
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  getEpisdoes(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode?page=${page}`)
  }

  getEpisode(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode/${id}`);
  }

  getLocations(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/location?page=${page}`)
  }

  getLocation(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/location/${id}`);
  }
}
