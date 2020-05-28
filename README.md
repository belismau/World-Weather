# World-Weather

A web application to find the local weather forecast using [Weatherstack API](https://weatherstack.com/).

## Built With

This project has been built with:

* [JQuery](https://jquery.com/) - To gain access to [Ajax](https://api.jquery.com/jquery.ajax/)
* [React.js](https://michalsnik.github.io/aos/) - Framwork used

### Why React?

React has been chosen as it is one of the most popular libraries for building web applications, but also because React gives the opportunity to break the project into separate components (Vue and Angular also provides this option) - which in turn gives us developers an easier overview of the application's code. 

However, one of the major reasons for choosing React is the learning curve. Angular has a steep learning curve considering it is a complete solution, and you need to learn concepts like TypeScript and MVC. Although Vue is an easy option for beginners to build web applications, we believe that React has an easier start-up guide that helped us get started.

Another reason for choosing React is that it is easy to integrate with other libraries because of its flexibility, such as [JQuery](https://reactjs.org/docs/integrating-with-other-libraries.html).

## Getting Started

To get started, follow the steps below.

### Installation

You will need to install the libraries/frameworks below:

JQuery (mostly for Ajax in this project):

```
npm install jquery
```

React:

```
npm install react 
```

React-DOM (to render):

```
npm install react-dom
```

Babel standalone:

```
npm install babel-standalone
```

Font Awesome (for icons):

```
npm install font-awesome
```

A live-server is also necessary. As it says in https://github.com/tapio/live-server, AJAX requests don't work with the ```file://``` protocol due to security restrictions. Therefore, a [server](https://github.com/tapio/live-server) is needed. 

```
npm install -g live-server
```

### Run

To run the app, follow the steps below:

1. Open your terminal and navigate to the folder called ```World-Weather```
2. Type ```live-server``` and click enter
3. Done


