import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [LibraryComponent],
  exports: [LibraryComponent],
  imports: [
    CommonModule,
    CoreModule,

    LibraryRoutingModule,
    HeaderModule,
    NgOptimizedImage,
  ]
})
export class LibraryModule {
}
