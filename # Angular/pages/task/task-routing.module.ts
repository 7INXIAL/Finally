import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';

const TaskRoutes: Routes = [
  {
    path: '',
    redirectTo: 'table/444',
    pathMatch: 'full',
  },
  {
    path: 'table/:id',
    component: TableComponent,
  },
  // {
  //   path: 'details/:id',
  //   component: DetailsComponent,
  // },
];

// 需要的话也可以把共同ui抽离到 TaskWrapperComponent 中
// const moduleRoutes: Routes = [
//   {
//     path: '',
//     component: TaskWrapperComponent,
//     children: [
//        ...TaskRoutes
//     ],
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(TaskRoutes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
