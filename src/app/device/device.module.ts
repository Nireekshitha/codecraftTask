import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxGaugeModule } from 'ngx-gauge';


@NgModule({
  imports: [
    CommonModule,
    DeviceRoutingModule,
    OwlModule,
    FormsModule,
    NgxGaugeModule,
  ],
  declarations: [DeviceComponent]
})
export class DeviceModule { }
