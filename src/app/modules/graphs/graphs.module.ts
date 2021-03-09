import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';

import { BarsComponent } from '../../components/graphs/bars/bars.component';
import { LinesComponent } from 'app/components/graphs/lines/lines.component';
import { RadarComponent } from 'app/components/graphs/radar/radar.component';
import { DoughnutComponent } from 'app/components/graphs/doughnut/doughnut.component';
import { MaterialModules } from '../../modules/material.module';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    BarsComponent,
    LinesComponent,
    RadarComponent,
    DoughnutComponent,
  ],
  imports: [CommonModule, GraphsRoutingModule, MaterialModules, ChartsModule],
})
export class GraphsModule {}
