# Angular-JS-Fundamentals

**Basics of Angular JS**

```
It is a JavaScript framework which allows you to create reactive single page applications.

Javascript manipulates the virtual DOM During runtime updating only
what needs to be changed.

```

**Understanding Angulat Vesioning**

```
(a)Angular 1(Angular JS)

 This is the previous version of angular that had to be rewritten to Angular Two.

Angular one to Angular two was a complete rewrite.


(b)Angular 2

Released in 2016.
Was rewritten from the ground up to fix all the issues that Angular one had.

(c)Angular 3
Skipped for internal resaons.

(d)We continued to proceed from Angular 4 to Angular 9.

There are minimal real changes in the syntax from Angular Two to Angular 9.

Small,Incremental,Backward compactible Changes.

The versions from 2 to 9 are what is referred to as just Angular.

```

**Angular CLI**

```
Refers to Angular Commandline interface.

Due to the Robustness of Angular it is best installed via the CLI.

(a)npm install -g @angular/cli@latest

Installs the latest version of angular globally in your machine.

@latest is optional.

(b)ng new my-dream-app

Creates an Angular Application called my dream App.

(c)cd my-dream-app

(d)ng serve

Used for serving the Angular Application in a Port.
```

**Angular folder structure**

```
(a)src(Most important folder)

(i)app folder.Most Impotant folder.Where i store my dependencies.

With any active change angular is actively listening and rebuilds our application.

(b)e2e folder is for end to end testing.


(c)package.json(dependencies of the project and all installed 3rd party packages.)

node_modules is where all the project dependencies in package.json were installed.

```

**Concepts**

```
(a)ngModel updates the state based on a change of input .That is in a form input it sets the state as the Key.

Angular is split up into various sub modules/packages.Each core module that you are using in your components must be
imported into the app.module.ts thus your components may use the feature of that module.

```

**CRUCIAL ANGULAR FOLDER STRUCTURE**

```
(a)app.component.css

Where i write the css for my component.

(b)app.component.html

Where i write my HTML.
Remember that because of angular my HTML May now render dynamic content.

(c)app.compoent.ts

Most crucucial part in the component and it is where everything is defined.


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Caleb Mbugua';
}

from here i have defined the name of my component.
I have as well defined where the path to the HTML of my component is.
I have as well defined the path to where the CSS of my component is.
I have passed state/data that will be rendered by the component HTML.

(d)app.module.ts

Very crucial while building your app.All packages or modules built in or not
must be initialised here so that you may be able to use them in your component.


```
