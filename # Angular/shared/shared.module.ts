import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import { TooPipe } from './too.pipe';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    ExampleComponent, // 组件
    TooPipe, // 管道
    HighlightDirective, // 指令
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule, // 模块
    FormsModule, // 模块
    ExampleComponent, // 组件
    TooPipe, // 管道
    HighlightDirective, // 指令
  ],
})
export class SharedModule {}
