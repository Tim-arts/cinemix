import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemsDto, RequestParams } from '../../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class FetchItemsService {

  private URL_API: string = 'http://www.omdbapi.com/?apikey=f8471a10&';

  constructor(private httpClient: HttpClient) {
  }

  searchMovies(requestParams: RequestParams): Observable<ItemsDto> {
    const params: string = `&s=${requestParams.title}&page=${requestParams.page}`;
    return this.httpClient.get<ItemsDto>(`${this.URL_API}${params}`);
  }

}
