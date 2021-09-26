import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: 'contacts', component: ContactsPageComponent},
  // ------------------------------------------------------------------------------
  // Настройка динамической загрузки модулей для отображения нужных страниц в момент перехода к ним!
  {
    // Указываем название пути в урл и какой модуль нужно подгрузить!
    // При таком способе в файле app.module.ts НЕ регистрируем этот модуль!!!
    // Как только попадаем на данный путь (about-us), то подгружаем модуль который имеет настройки какой компонент нужно отобразить
    path: 'about', 
    // Способы динамической подгрузки модулей!
    // Первый способ УСТАРЕЛ!!!! 
    // В версии 8 строковый синтаксис для спецификации маршрута loadChildren был
    // объявлен устаревшим в пользу нового синтаксиса, использующего синтаксис
    // import ().
    // https://angular.io/guide/deprecations#loadchildren-string-syntax
    // loadChildren: './components/about-us/about-us.module#AboutUsModule',
    // Второй способ (новый, повторить тему Promises)
    loadChildren: () => import("./components/about-us/about-us.module").then(mod => mod.AboutUsModule)
  },
  // ABOUT PATH END -----------------------------------------------
  // Пути на самом деле не пустые и не ведут на главную страницу!
  // http://localhost:4200/practice & http://localhost:4200/theory 
  // установлены в модуле EducationRoutingModule,
  // а EducationRoutingModule зарегистрирован в EducationModule 
  {path: '', loadChildren: () => import("./components/education/education.module").then(mod => mod.EducationModule)},
  // THEORY & PRACTICE PATH END -----------------------------------------------
  // ------------------------------------------------------------------------------
  {path: '**', component: Page404Component}
];

@NgModule({
  // Метод forRoot один на все приложение!!!
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
