import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostComponent } from './authority/lost/lost.component';
import { LoginComponent } from './authority/login/login.component';

// 这里定义根路由
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'example',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  // 也可以这样布局, 但是就没有 PagesModule, 没有地方存放所有模块共同ui的组件
  // {
  //   path: 'task',
  //   loadChildren: () =>
  //     import('./pages/task/task.module').then((m) => m.TaskModule),
  // },
  {
    path: '**',
    redirectTo: 'lost',
    pathMatch: 'full',
  },
  {
    path: 'lost',
    component: LostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
