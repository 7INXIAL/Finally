import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  /**
   * @selector
   * 选择器
   */
  selector: 'component-example',
  /**
   * @templateUrl
   * 模版文件
   */
  templateUrl: './example.component.html',
  /**
   * @styleUrls
   * 样式文件
   */
  styleUrls: ['./example.component.scss'],
  /**
   * @styles
   * CSS 样式
   * styles: ['h1 { font-weight: normal; }'],
   */
  /**
   * @encapsulation
   * 样式规则
   * None - 又进又出，Emulated - 只进不出，ShadowDom - 不进不出
   * encapsulation:ViewEncapsulation.None,
   * encapsulation:ViewEncapsulation.ShadowDom,
   */
  encapsulation: ViewEncapsulation.Emulated,
  /**
   * @providers
   * 注入依赖服务
   */
  providers: [],
})
export class ExampleComponent {
  /**
   * @Input
   * 定义入参
   * () 内可以定义别名, 但不提倡
   * 可以直接使用
   * 也可以通过 get set 进行修饰
   * 传值: [editable]="editable"
   */
  @Input() editable = false;

  private _name = '';
  @Input()
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = (name && name.trim()) || 'unknown';
  }

  /**
   * @组件内数据
   * 使用: {{ ids }}
   */
  ids = [1, 2];

  /**
   * @Output
   * 定义弹出事件
   * () 内可以定义别名, 但不提倡
   * 弹出: this.actived.emit(value)
   * 接收: (actived)="onActived($event)"
   */
  @Output() actived = new EventEmitter();

  /**
   * @组件内方法
   * 使用: (click)="handleClick()"
   */
  handleClick() {}

  /**
   * @Refs
   * 挂载: #timer
   * 例子: <component-timer #timer />
   * 使用: timer.stop()
   * 限制: 只能模版中使用
   */

  /**
   * @ViewChild
   * () 组件声明
   * 限制: 需要在组件中引入子组件
   * @ViewChild(ComponentTimer)
   * private timer!: ViewChild;
   */

  ////////////
  //生命周期//
  ///////////

  /**
   * @ngOnChanges
   * 绑定的值改变时调用
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'ngOnChanges -');
    // {
    //   key:{
    //     currentValue
    //     firstChange
    //     previousValue
    //   },
    //   key:{}
    //   ...
    // }
  }

  /**
   * @ngOnInit
   * 初始化指令,组件时调用, 第一轮 ngOnChanges 后调用, 只触发一次
   * 此时 DOM 没加载完，请求数据一般放在这里
   */
  ngOnInit() {
    console.log('ngOnInit -');
  }

  /**
   * @ngDoCheck
   * 数据变化时调用, 在 ngOnChanges ngOnInit 后调用
   */
  ngDoCheck() {
    console.log('ngDoCheck -');
  }

  /**
   * @ngAfterContentInit
   * 初始化完成投影时调用, ngDoCheck 后触发, 只调用一次
   * 此时一般进行 DOM 操作
   */
  ngAfterContentInit() {
    console.log('ngAfterContentInit -');
  }

  /**
   * @ngAfterContentChecked
   * 投影检测后调用, ngDoCheck ngAfterContentInit 触发
   */
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked -');
  }

  /**
   * @ngAfterViewInit
   * 初始化完成视图时调用, ngAfterContentChecked 后触发, 只调用一次
   */
  ngAfterViewInit() {
    console.log('ngAfterViewInit -');
  }

  /**
   * @ngAfterViewChecked
   * 视图检测后调用, ngAfterContentChecked ngAfterViewInit 触发
   */
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked -');
  }

  /**
   * @ngOnDestroy
   * 销毁组件指令之前调用
   */
  ngOnDestroy() {
    console.log('ngOnDestroy -');
  }
}

//*********/  动态组件, 内容投影
