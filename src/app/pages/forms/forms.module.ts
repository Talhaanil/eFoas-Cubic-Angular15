import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const FormsRoutes: Routes = [
  {
    path: '',
    data: {
      heading: 'Basic Forms'
    },
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./basic-form/basic-form.module').then(module => module.BasicFormModule)
      },
      {
        path: 'form-layout',
        loadChildren: () => import('./forms-layout/forms-layout.module').then(module => module.FormsLayoutModule)
      },
      // {
      //   path: 'control',
      //   loadChildren: () => import('./control/control.module').then(module => module.ControlModule)
      // },
      // {
      //   path: 'addons',
      //    loadChildren:() => import('./addons/addons.module').then(module => module.AddonsModule)
      // },
      // {
      //   path: 'upload',
      //    loadChildren:() => import('./file-upload/file-upload.module').then(module => module.FileUploadModule)
      // },
      // {
      //   path: 'picker',
      //    loadChildren:() => import('./picker/picker.module').then(module => module.PickerModule)
      // }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutes)
  ],
  declarations: []
})
export class FormsModule { }
