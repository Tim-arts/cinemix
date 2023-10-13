import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AppModule } from '../../app.module';
import { CoreModule } from '../../core/core.module';
import { DisplayLibraryModule } from '../../features/display-library/display-library.module';
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
    DisplayLibraryModule,
  ]
})
export class LibraryModule {
}
