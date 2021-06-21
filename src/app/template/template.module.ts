import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { SwitchesComponent } from './switches/switches.component';
import { BasicsComponent } from './basics/basics.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './directives/custom-min.directive';

@NgModule({
  declarations: [BasicsComponent, DynamicsComponent, SwitchesComponent, CustomMinDirective],
  imports: [CommonModule, FormsModule, TemplateRoutingModule],
})
export class TemplateModule {}
