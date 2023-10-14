import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  protected searchForm: UntypedFormGroup = new UntypedFormGroup({
    searchTerm: new UntypedFormControl()
  });

  @Output() emitSearchTerm: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    const isSearchTerm: boolean = !!this.searchForm.controls['searchTerm'].value;

    if (isSearchTerm) {
      this.updateSearchTerm();
    }
  }

  updateSearchTerm(): void {
    this.emitSearchTerm.emit(this.searchForm.get('searchTerm')?.value);
  }
}
