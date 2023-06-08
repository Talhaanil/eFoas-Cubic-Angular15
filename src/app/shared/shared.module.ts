import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective } from './accordion/accordionanchor.directive';
import { AccordionLinkDirective } from './accordion/accordionlink.directive';
import { AccordionDirective } from './accordion/accordion.directive';
import { ScrollModule } from './scroll/scroll.module';
import { TitleComponent } from '../layout/admin/title/title.component';
import { DataFilterPipe } from './data-table/data-filter.pipe';
import { SelectOptionService } from './select-2/select-option.service';
import { HorizontalTimelineModule } from "./horizontal-timeline/horizontal-timeline.module";
import { AnimatorModule } from 'css-animator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { ChartistModule } from 'ng-chartist';
import { CalendarModule } from 'angular-calendar';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng-select';
import { FileUploadModule } from 'ng2-file-upload';
import { ColorPickerModule } from 'ngx-color-picker';
//import { UiSwitchModule } from 'ng2-ui-switch';
import { DatepickerModule } from 'angular2-material-datepicker';
// import { QuillEditorModule } from 'ngx-quill-editor';
// import { DataTableModule } from 'angular2-datatable';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollModule,
    AnimatorModule,
    HorizontalTimelineModule,
    NgbModule,
    ClickOutsideModule,
    CalendarModule,
    DragAndDropModule,
    TagInputModule,
    SelectModule,
    FileUploadModule,
    ColorPickerModule,
    ChartistModule,
    //UiSwitchModule,
    // DataTableModule,
    NgxDatatableModule,
    //AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'}),
    DatepickerModule
    //QuillEditorModule,


  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
    TitleComponent,
    DataFilterPipe
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent,
    TitleComponent,
    ScrollModule,
    AnimatorModule,
    DataFilterPipe,
    HorizontalTimelineModule,
    NgbModule,
    ClickOutsideModule,
    ChartistModule,
    CalendarModule,
    DragAndDropModule,
    TagInputModule,
    SelectModule,
    FileUploadModule,
    ColorPickerModule,
    ChartistModule,
    //UiSwitchModule,
    DatepickerModule,
    // AgmCoreModule,
    // DataTableModule,
    NgxDatatableModule,
    // QuillEditorModule,

  ],
  providers: [
    MenuItems,
    SelectOptionService
  ]
})
export class SharedModule { }
