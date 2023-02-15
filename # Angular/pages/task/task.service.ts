import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/**
 * @root
 * 根注入, 无需注入
 */
@Injectable({
  providedIn: 'root',
})
/**
 * @null
 * 没有指定, 需注入
 */
// @Injectable({
//   providedIn:null
// })
/**
 * @any
 * 在每个延迟加载的模块中提供一个唯一的实例
 */
// @Injectable({
//   providedIn:LazyModule
// })
export class TaskService {
  constructor(private http: HttpClient) {}
  getImages() {
    /**
     * @GET
     */
    return this.http.get('/hlapi', {
      params: {
        id: 2,
      },
    });
    /**
     * @POST
     */
    // return this.http.post(
    //   '/hlapi',
    //   { keyword: '' },
    //   {
    //     params: { id: 2 },
    //   }
    // );
    /**
     * @PUT
     */
    // return this.http.put(
    //   '/hlapi',
    //   { keyword: '' },
    //   {
    //     params: { id: 2 },
    //   }
    // );
    /**
     * @DELETE
     */
    // return this.http.delete('/hlapi', {
    //   params: { id: 2 },
    // });
  }
}
