# Angular-JS-Fundamentals

**Basics of Angular JS**

```
It is a JavaScript framework which allows you to create reactive single page applications.

Javascript manipulates the virtual DOM During runtime updating only
what needs to be changed.

```

**Understanding Angular Vesioning**

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

**component selector**

```
A component may be selected/rendered  by three methods:

N/B
Remember we render our components in the main app.component itself.

(a)Component/element itself.
eg <app-servers>

(b)By attribute.

(c)By class.

Works similarly to css selectors.

Selecting as a component is what is more popularly used.
```

**DataBinding**

```
(a)Process of loading dynamic data into your angular application.

Passing data from typescript to your HTML so that users can be able to see.

It is the communication between your business logic(typescript) and your angular templates.

There are two ways of communication

(a)String Interpolation.

(b)Property binding.


(c)Event binding is the opposite of data binding.Its deals with how you may be able to trigger actions
and events from your angular templates to typescript itself.

(d)We can also have Two-Way Binding in Angular.This is a combination of both.Where we are able to react events
and output at the same time.

Example (ngModel)


```

**(a)String Interpolation**

```
(a)Whatever is in the curly braces must somehow return a String.

(b)We cannot write conditions and if statements but we however have an exception that
we may write a ternary operator.

(c)You may also call methods inside the string interpolation as long as they return Strings.

N/B
In String Interpolation you may use numbers as well since they may easily be converted into a
String.

<!-- <p>{{allowNewServer}}</p> -->

```

**(b)Property Binding**

```
(a)Property binding helps us bind to native html elements properties and make them change
dynamically via our typescript.

Propery binding refers to the binding of the HTML attributes in our dom [attribute] then
manilating them with typescript

It is denoted by a square bracket.
Type script returns the property that the attribute expects.

[disabled] ="!allowNewServer"
<p [innerText]="allowNewServer"></p>

In instances where we want to manipulate the attribute of a HTML element we use property binding.
When we want to output data in a template we use String Interpolation.


Bracket[] shows that this is a attribute that can be able to be manipulated via angular.
thus i can use typeScript code.
```

**(c)Event Binding**

```
Entails firing of events from my templates using event listeners .

The event listener calls a method that is in your typescript code.

All the HTML events are available in Angular ..The only modification is that you remove on
from the events.

$event is a special key word that helps me get data from my event listener.

<input
type="text"
class="form-control"
(input)="onUpdateServerName($event)"
>

When calling an event listener and i want to get the attributes of my target
I must tell typeScript the type of my target

onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

```

**(d)Two way data binding**

```

Combines property and event binding.
Hence denoted by [(NgModel)]

It uses what we call directives.

This is a very powerful feature since data can be updated in both ways.
We can reat to events in both directions

N/B

One equals sign assigns a value.
Three equals sign assings something.

Simple ternary operators but not loops may be executed from within our code.

```

**Directives**

```

Strutural directives are denoted by (\*).Structural directives change the DOM .
Directives are a form of giving instructions to the DOM.

Components are kind of such istructions given to the to the dom.

When i say
<app-server></app-server>

Angular is going to render this app-server component in the DOM.

Components are a form of directives with a template.

There are also directives without a template

<p appTurnGreen>Receives a green background!</p>

@Directive({
selector:'[app-turn-green]'
})

export class TurnGreenDirective{

}

<p *ngIf="serverCreated">Server was created, server name is  {{serverName}}</p>

The \*ngif directive aboce which is a structural directive will either append or remove
p to the DOM based on the TRUE or FALSE Value.

(b)Introducing NgElse

<p *ngIf="serverCreated; else noServer">Server was created, server name is  {{serverName}}</p>

<ng-template #noServer>

<p>No Server was Created!</p>
</ng-template>

<ng-temmplate> is a directive used to mark places in oor DOM.

(ii) ATTROBUTE DIRECTIVES.

(a)NgStyle

NgStyle is put very similarly to how we do property binding
since it affects the attributes of the given element.

Property binding is applied in ngStyle since i am affecting a property.

Using ngStyle i output my Styles directly as shown below
which is slightly different from ngClass.

<p  [ngStyle]="{backgroundColor: getColor()}">TEXT</p>

N/B
Constructor is called on creation of the Element.

(b)NgClass

Helps to dynamically add or remove css classes.

Used when i have defined my Styles in a style file and i would wish to
use and apply those styles.

Here Propery binding is applied since i am affecting a property.

NgClass executes when a condition returns to true.

[ngClass] ="{white-text:logItem > 5 }"

whitetext above which is defined in a css file will only
be applied when a logitem is greater than 5.(When the condition
returns to true)

[ngClass] ="{}"

```

(c)ngFor

donoted by (*) since it is a structural component.

servers =['TestServer','Test Server 2'];

<app-server *ngFor="let server of servers"></app-server>

When i am inside an array i can be able to find the value  of the current interation
via the index.

<div>
*ngFor="let logItem of log; let i = index"
</div>

Lets say when i am just pushing objects into an array eg dates.I may be able to get
the index of each item in my array.

N/B
Remember that while using index we always begin at index zero.

```

**Notes By**

```

Mbugua Caleb

```

```

```
