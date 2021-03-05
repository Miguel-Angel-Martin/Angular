import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from 'app/components/graphs/bars/bars.component';
import { DoughnutComponent } from 'app/components/graphs/doughnut/doughnut.component';
import { LinesComponent } from 'app/components/graphs/lines/lines.component';
import { RadarComponent } from 'app/components/graphs/radar/radar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'Lines', component: LinesComponent },
      { path: 'Bars', component: BarsComponent },
      { path: 'Radar', component: RadarComponent },
      { path: 'Doughnut', component: DoughnutComponent },

      { path: '**', redirectTo: 'Lines' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraphsRoutingModule {}
