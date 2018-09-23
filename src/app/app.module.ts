import { CoursesService } from './courses.services';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitlecasepipePipe } from './titlecasepipe.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { NgifComponentComponent } from './ngif-component/ngif-component.component';
import { NgSwitchCaseComponentComponent } from './ng-switch-case-component/ng-switch-case-component.component';
import { NgForComponentComponent } from './ng-for-component/ng-for-component.component';
import { NgForDectionComponentComponent } from './ng-for-dection-component/ng-for-dection-component.component';
import { NgForTrackbyComponentComponent } from './ng-for-trackby-component/ng-for-trackby-component.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SafeTravelOperatorComponent } from './safe-travel-operator/safe-travel-operator.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactComponent } from './contact/contact.component';
import { CourseFormComponent } from './course-form/course-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { NewcourseformComponent } from './newcourseform/newcourseform.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SignupFormComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    TitlecaseComponent,
    TitlecasepipePipe,
    PanelComponent,
    LikeComponent,
    NgifComponentComponent,
    NgSwitchCaseComponentComponent,
    NgForComponentComponent,
    NgForDectionComponentComponent,
    NgForTrackbyComponentComponent,
    NgClassComponent,
    NgStyleComponent,
    SafeTravelOperatorComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactComponent,
    CourseFormComponent,
    NewcourseformComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
   ReactiveFormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
