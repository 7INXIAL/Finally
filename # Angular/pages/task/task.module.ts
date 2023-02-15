import { NgModule } from '@angular/core';
import { TaskRoutingModule } from './task-routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from 'src/Notes/shared/shared.module';
import { TaskService } from './task.service';

@NgModule({
  declarations: [TableComponent],
  imports: [TaskRoutingModule, SharedModule],
  providers: [TaskService],
})
export class TaskModule {}
