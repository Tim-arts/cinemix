import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'generate', loadChildren: () => import('./views/generate/generate.module').then(m => m.GenerateModule) },
  { path: 'add', loadChildren: () => import('./views/add/add.module').then(m => m.AddModule) },
  { path: 'library', loadChildren: () => import('./views/library/library.module').then(m => m.LibraryModule) },
  { path: '', redirectTo: '/generate-item', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
