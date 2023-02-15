import { NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { PagesComponent } from './pages.component';

// 鉴权
const canActivate = [
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // 这里可以获取到对应的data
    return true;
  },
];

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'task',
        pathMatch: 'full',
      },
      {
        path: 'task',
        title: 'Task Module',
        canActivate,
        data: { code: 'Task' },
        loadChildren: () =>
          import('./task/task.module').then((m) => m.TaskModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
