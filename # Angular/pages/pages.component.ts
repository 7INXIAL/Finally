import { Component } from '@angular/core';

@Component({
  selector: 'pages-wrapper',
  styles: [
    '.pages-wrapper { background:#00bcd4;height:100%;width:100%;overflow: hidden;}h3 {text-align: center;}',
  ],
  template: `
    <div class="pages-wrapper">
      <router-outlet><h3>除登录和404之外所有模块的盒子</h3></router-outlet>
    </div>
  `,
})
export class PagesComponent {}
