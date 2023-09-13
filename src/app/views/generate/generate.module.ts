import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { GenerateRoutingModule } from './generate-routing.module';
import { GenerateComponent } from './generate.component';

@NgModule({
  declarations: [GenerateComponent],
  exports: [GenerateComponent],
  imports: [
    CommonModule,
    CoreModule,

    GenerateRoutingModule,
    HeaderModule,
    NgOptimizedImage,
  ]
})
export class GenerateModule {
}
