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

This is called data binding.
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
I have passed state/data/props that will be rendered by the component HTML.

(d)app.module.ts

Very crucial while building your app.All packages or modules built in or not
must be initialised here so that you may be able to use them in your component.


```

# Angular-JS-Fundamentals

**Basics of Angular JS**

```
(a)I install bootstrap via npm.

npm install --save bootstrap@3

(b)I Must initialise the  path to my bootstrap in my angular.json styles

```

**Angular deepDive**

```
(a)The Main concept is  knowing my componets and how i can be able to pass data into my components.

[Any JS Framework]

Keep in  Mind that Angular is a JS Framework changing your DOM(HTML AT RUN TIME)

All i need to learn now is the process flow.


```

**COMPONENTS**

```
(a)All  components must be in the APP.

When we we have mutiple components in our application all are called into the root app.component
which is the rendered into angular via the virtual DOM.

Rember that Angular renders as a single HTML file thus all componets that have their separate HTML
are all rendered into that one file and manuiplated accordingly via the virtual DOM.

Basic Component Structure

import { Component } from '@angular/core';


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})


export class ServerComponent {

}

(a)I must import component from angular core.

(b)The component decorator denotes that this is not just a normal javascript class but a component.

(i)selector is the name of our component and it is this that is instantiated into other components.
(ii)template url is the path to the HTML associated to my component.

(c)I must as well  export the Component so that it can be able to be imported into other classes.


APP MODULE

Angular uses components to build web pages.
App Module is where all my components are bundled together.

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

(a)New componets as i build my app are bundled into the declarations.

(b)Other core modules of angular that will be used in my application are bundled under
the import .

N/B

NgModule is a component bundlerbundling your components together.

```

**Creating Component Via CLI**

```
(a)ng generarte component componentname

ng  g c componentname

The main app.component.html must have all the other components initialised into it.

(b)Should i wish to do so i may define my templetes in Angular as inline components.

In my component instead of defining a template url i choose just to render my html directly.

@Component({
  selector: 'app-servers',
  templateUrl: '<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})

Styles as well may be defined as inline.
via the adding the styles property in the component.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
  h1{
    color:dodgerblue
  }
  `]
})

```

**Notes By**

```
Mbugua Caleb

```
