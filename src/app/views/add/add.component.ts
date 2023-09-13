import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemsDto, RequestParams } from '../../core/interfaces/movie';
import { MovieService } from '../../core/services/movie/movie.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  items$!: Observable<ItemsDto>;
  searchForm: UntypedFormGroup = new UntypedFormGroup({
    searchTerm: new UntypedFormControl('Star wars')
  });
  pageSize: number = 10;
  page: number = 1;

  constructor(private readonly movieService: MovieService) {
  }

  ngOnInit(): void {
    this.fetchItems();
  }

  pageChange(page: number): void {
    this.page = page;
    this.fetchItems();
  }

  fetchItems(): void {
    const requestParams: RequestParams = {
      title: this.searchForm.get('searchTerm')?.value,
      page: this.page,
    };

    this.items$ = this.movieService.searchMovies(requestParams);
  }

}
