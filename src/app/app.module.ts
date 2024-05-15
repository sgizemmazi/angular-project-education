import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { MainComponent } from './main/main.component';
import { AngularTemplateSyntaxComponent } from './angular-template-syntax/angular-template-syntax.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { BindingsComponent } from './bindings/bindings.component';
import { TemplateStatementComponent } from './template-statement/template-statement.component';
import { ClassAndStyleBindingsComponent } from './class-and-style-bindings/class-and-style-bindings.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { DeferrableViewsComponent } from './deferrable-views/deferrable-views.component';
import { ReferanceVariablesComponent } from './referance-variables/referance-variables.component';
import { SvgAsTemplatesComponent } from './svg-as-templates/svg-as-templates.component';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AngularTemplateSyntaxComponent,
    InputComponent,
    OutputComponent,
    BindingsComponent,
    TemplateStatementComponent,
    ClassAndStyleBindingsComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    DeferrableViewsComponent,
    ReferanceVariablesComponent,
    SvgAsTemplatesComponent,
    AngularDirectiveComponent,
    StructuralDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    FormsModule,
    HttpClientModule // HttpClientModule'ı imports dizisine eklendi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
