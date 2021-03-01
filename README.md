# IoC Library (NBC Challenge)

This repo was written in response to a prompt to build a simple IoC library in just a couple hours.

## Running

testing: npm run test
building: npm run build
starting: npm run start (does not do much)

## Usage

```javascript
//adding services
const c = IOCContainer()
c.add('MY_SERVICE_NAME', get => new MyService( get('MY_DEPENDENCY_NAME') ))

//retrieval
c.get('MY_SERVICE_NAME')
```

## Thought process

Going into this I really did not know much about IoC libraries. I definitely used some injectors several years ago when working with angular.js, but since then I have gotten by just using es6 import.

I will be up front and mention that I used this excellent article: https://medium.com/@magnusjt/ioc-container-in-nodejs-e7aea8a89600 from Magnus Tovslid as a basis for the code and to understand the ask. I did change it up by challenging myself to write something similar in typescript, and without using classes. It was actually a bit tricky.

I have written a small suite of unit tests to hit some of the important use cases such as classes, objects, lazy instantiation and linked dependencies. I'm sure there are some edge cases I'm not thinking of, but that's something I would discover only by using the code or a similar library.

I'm happy to have engaged with this paradigm, and hope the code demonstrates an understanding.