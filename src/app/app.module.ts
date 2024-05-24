import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AngularTemplateSyntaxComponent } from './components/angular-template-syntax/angular-template-syntax.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { TemplateStatementComponent } from './components/template-statement/template-statement.component';
import { ClassAndStyleBindingsComponent } from './components/class-and-style-bindings/class-and-style-bindings.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { DeferrableViewsComponent } from './components/deferrable-views/deferrable-views.component';
import { ReferanceVariablesComponent } from './components/referance-variables/referance-variables.component';
import { SvgAsTemplatesComponent } from './components/svg-as-templates/svg-as-templates.component';
import { AngularDirectiveComponent } from './components/angular-directive/angular-directive.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DependencyInjectionComponentComponent } from './components/dependency-injection-component/dependency-injection-component.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectiveCompoApiDirective } from './directives/directive-compo-api.directive';
import { InjectableServicesComponentComponent } from './components/injectable-services-component/injectable-services-component.component';

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
    StructuralDirectivesComponent,
    AttributeDirectiveComponent,
    DirectiveCompoApiDirective,
    DependencyInjectionComponentComponent,
    InjectableServicesComponentComponent
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
