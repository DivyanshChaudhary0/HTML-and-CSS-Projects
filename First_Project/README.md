

# Parcel
- Dev builds
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Cache - Faster Builds
- Image Optimazation
- Minification
- Building
- Compressing
- Error Handling


## Namaste React Course by Akshay Saini

# _Episode 01 - Inception_

## Q: What is `Emmet`?

A: `Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.

## Q: What is `CDN`? Why do we use it?

A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The goal is to provide high availability and performance by distributing the service spatially relative to end users.

## Q: Why is `React known as React`?

A: And it's called `React` because it `reacts`. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.

## Q: What is `crossorigin in script tag`?

A: The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

### _Syntax_

```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?

A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.

The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?

A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.

## Q: What are `async and differ` attributes in `<script>` tag?

A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.

### _Syntax_

```
<script async src="demo_async.js"></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.

### _Syntax_

```sh
<script defer src="demo_defer.js"></script>
```

## Q: Difference between a `Library and Framework`?

A: A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.

A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.

The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.

## Q: What is JSX?
A: JSX is a collection of javascript and html . its html like syntax. We can write javascript in it.
 `Babel` converts the JSX code into the `ReactElement` and parcel convert it to `HTML Element`.

### Syntax 
```
const JSX = () => {
  return (
    <div>{ 16*2==8 ? "Jaat" : "Jaat" } HUI HUI GUYS </div>
  )
}

```

## Q: `React Component` ?
A: Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey!
"Two types of components in react"
`Class based component`
`Functional component`

## Q: What is a `Functional component`?
A: A `Functional component` is a normal javscript function that returns some piece of JSX code or we can say returns one or more react element.

### _Syntax_

```
import {LOGO_URL} from "../utils/constant"

function Header(){
    return <div className="w-full h-20 bg-red-300 flex items-center justify-between px-20">
        <div>
            <img src={ LOGO_URL } alt="" className="w-16 rounded-full object-cover object-center" />
        </div>
        <div className="flex items-center gap-20">
            <p>Home</p>
            <p>About US</p>
            <p>Contact</p>
            <p>Cart</p>
        </div>
    </div>
}

export default Header;
```

## Q: What is `Component composition`?
A: Component inside another component is called `Component composition`.

## Q: What is `Config driven UI`?
A: Contolling the UI by a config file thats coming from backend.

## Q: Types of `import/export`?
A: There are two types of import/export.
`Default export`
 ### Syntax
 ```
    export default Header;

    import Header from "./components/Header"
 ```

`Named export`
### Syntax
 ```
    export const Header = ()=>{
        return (
            <div>Jaat hi kahde</div>
        )
    };

    import { Header } from "./components/Header"
 ```

## Q: Some key notes for building any application?
A:  (1) Before making any application planning is required.
    (2) Dont use index as a key in a loop.
    (3) The job of a library and a framework is to give the environment and do a lot in very less code in the UI.
    (4) React and all other frameworks are solving same problem that if the data changes than the UI changes [ sync the UI with the data layer ].

## Q: What are `Props`?
A: Props are just normal arguments pass to a function. it is used to pass data from parent to child component .

## Q: What is `Prop-driling`?
A: Prop drilling, also known as "threading props" or "component chaining," refers to the process of passing data from a parent component down to nested child components through props.

Prop drilling occurs when a prop needs to be passed through several layers of nested components to reach a deeply nested child component that actually needs the prop. Each intermediary component in the hierarchy has to pass the prop down, even if it doesn't use the prop itself.

```
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const data = 'Hello from Parent';

  return (
    <div>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;
```
```
// ChildComponent.js
import React from 'react';
import GrandchildComponent from './GrandchildComponent';

function ChildComponent(props) {
  return (
    <div>
      <GrandchildComponent data={props.data} />
    </div>
  );
}

export default ChildComponent;
```
```
// GrandchildComponent.js
import React from 'react';

function GrandchildComponent(props) {
  return <div>{props.data}</div>;
}

export default GrandchildComponent;
```
## Q: What are hooks?
A: Hooks are basically a javascript utility functions.
Hooks allow us to "hook" into React features such as state and lifecycle methods.
`State`=> State is a javascript object that holds some information of component that may be change overtime. Whenever the state of an object changes react re-rendres the component.

## Q: What is useState?
A: To control the state we use usestate.
 