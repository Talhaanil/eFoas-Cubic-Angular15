import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin/admin-layout.component';

const routes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [
    { path: '', redirectTo: 'dashboard/modern', pathMatch: 'full' },
    { path: 'dashboard/modern', loadChildren: () => import('./pages/dashboard/dashboard-modern/dashboard-modern.module').then(module => module.DashboardModernModule) },
   // { path: 'dashboard/clean', loadChildren: () => import('./pages/dashboard/dashboard-clean/dashboard-clean.module').then(module => module.DashboardCleanModule) },
    //{ path: 'dashboard/analytical', loadChildren: () => import('./pages/dashboard/dashboard-analytical/dashboard-analytical.module').then(module => module.DashboardAnalyticalModule) },
    // { path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.module').then(module => module.CalendarModule) },
    // { path: 'widgets', loadChildren: () => import('./pages/widgets/widgets.module').then(module => module.WidgetsModule) },
    // { path: 'extra-pages/pricing', loadChildren: () => import('./pages/extra-pages/pricing/pricing.module').then(module => module.PricingModule) },
    // { path: 'extra-pages/gallery', loadChildren: () => import('./pages/extra-pages/gallery/gallery.module').then(module => module.GalleryModule) },
    // { path: 'extra-pages/invoice', loadChildren: () => import('./pages/extra-pages/invoice/invoice.module').then(module => module.InvoiceModule) },
    // { path: 'extra-pages/animations', loadChildren: () => import('./pages/extra-pages/animations/animations.module').then(module => module.AnimationsModule) },
    // { path: 'extra-pages/blank-starter', loadChildren: () => import('./pages/extra-pages/blank-starter/blank-starter.module').then(module => module.BlankStarterModule) },
    // { path: 'extra-pages/blank-page', loadChildren: () => import('./pages/extra-pages/blank-page/blank-page.module').then(module => module.BlankPageModule) },
    // { path: 'extra-pages/search', loadChildren: () => import('./pages/extra-pages/search/search.module').then(module => module.SearchModule) },
    // { path: 'extra-pages/custom-scroll', loadChildren: () => import('./pages/extra-pages/custom-scroll/custom-scroll.module').then(module => module.CustomScrollModule) },
    // { path: 'extra-pages/user-profile', loadChildren: () => import('./pages/extra-pages/user-profile/user-profile.module').then(module => module.UserProfileModule) },
    // { path: 'map', loadChildren: () => import('./pages/map/map.module').then(module => module.MapModule) },
    // { path: 'icons/simple', loadChildren: () => import('./pages/icons/simple/simple.module').then(module => module.SimpleModule) },
    // { path: 'icons/font-awesome', loadChildren: () => import('./pages/icons/font-awesome/font-awesome.module').then(module => module.FontAwesomeModule) },
    // { path: 'charts', loadChildren: () => import('./pages/charts/charts.module').then(module => module.ChartsModule) },
       { path: 'tables', loadChildren: () => import('./pages/tables/tables.module').then(module => module.TablesModule) },
       { path: 'forms', loadChildren: () => import('./pages/forms/forms.module').then(module => module.FormsModule) },
    // { path: 'e-commerce', loadChildren: () => import('./pages/e-commerce/e-commerce.module').then(module => module.ECommerceModule) },
    // { path: 'inbox', loadChildren: () => import('./pages/inbox/inbox.module').then(module => module.InboxModule) },
    // { path: 'ui-element', loadChildren: () => import('./pages/ui-element/ui-element.module').then(module => module.UiElementModule) }
  ]
}, //{
  // path: '',
  // component: AuthLayoutComponent,
  // children: [
  // { path: 'extra-pages/register', loadChildren: () => import('./pages/extra-pages/register/register.module').then(module => module.RegisterModule) },
  // { path: 'extra-pages/login', loadChildren: () => import('./pages/extra-pages/login/login.module').then(module => module.LoginModule) },
  // { path: 'extra-pages/recover-password', loadChildren: () => import('./pages/extra-pages/recover-password/recover-password.module').then(module => module.RecoverPasswordModule) },
  // { path: 'extra-pages/lock-screen', loadChildren: () => import('./pages/extra-pages/lock-screen/lock-screen.module').then(module => module.LockScreenModule) },
  // { path: 'extra-pages/error', loadChildren: () => import('./pages/extra-pages/error/error.module').then(module => module.ErrorModule) }
  //]
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
