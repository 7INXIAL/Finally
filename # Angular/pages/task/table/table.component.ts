import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/Notes/store/store.service';
import { NoStoreService } from 'src/Notes/store/nostore.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class TableComponent {
  constructor(
    public http: TaskService,
    private route: ActivatedRoute,
    private store: StoreService,
    private nostore: NoStoreService
  ) {}
  /**
   * @nostore
   * 数据共享
   */
  handleNoStore() {
    // this.state = { ...this.state, ...this.nostore.getState() };
  }

  /**
   * @store
   * 数据共享
   */
  handleStore() {
    this.store.setState({
      name: 'xxx',
    });

    setTimeout(() => {
      this.store.select('name').subscribe((data) => {
        console.log(data, '???');
      });

      
    }, 1000);
  }

  /**
   * @http
   * 请求接口
   */
  getapi(v: string) {
    this.http.getImages().subscribe((data) => {
      // data
    });
  }

  /**
   * @route
   * 路由信息
   */
  useRoute() {
    this.route.paramMap.subscribe((params) => {
      // params.get('id')
    });
    this.route.queryParams.subscribe((params) => {
      // params['type']
    });
  }
}
