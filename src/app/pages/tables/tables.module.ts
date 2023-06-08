import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./basic/basic.module').then(module => module.BasicModule),
        data: {
          heading: 'Basic Tables'
        }
      },
      {
        path: 'table-layout',
        loadChildren: () => import('./table-layout/table-layout.module').then(module => module.TableLayoutModule),
        data: {
          heading: 'Tables Layout'
        }
      },
      // {
      //   path: 'data-table',
      //    loadChildren: () => import('./data-table/data-table.module').then(module => module.DataTableModule),
      //   data: {
      //     heading: 'Tables Layout'
      //   }
      // },
      {
        path: 'bootstrap',
         loadChildren: () => import('./bootstrap/bootstrap.module').then(module => module.BootstrapModule),
        data: {
          heading: 'Bootstrap Table'
        }
      },
      // {
      //   path: 'inline-edit',
      //    loadChildren: () => import('./inline-edit/inline-edit.module').then(module => module.InlineEditModule),
      //   data: {
      //     heading: 'Editable Table'
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes)
  ],
  declarations: []
})
export class TablesModule { }
