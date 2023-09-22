import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { AddItemModule } from '../../features/add-item/add-item.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';

@NgModule({
  declarations: [AddComponent],
  exports: [AddComponent],
  imports: [
    CommonModule,
    CoreModule,
    AddRoutingModule,
    HeaderModule,
    AddItemModule,
  ]
})
export class AddModule {
}
