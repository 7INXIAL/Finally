import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [PagesRoutingModule],
  bootstrap: [PagesComponent],
})
export class PagesModule {}
