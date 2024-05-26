# fullstackopen-task9

Task:
Setting up the project
We will create a project for Ilari, who loves flying small planes but has a difficult time managing his flight history. He is a coder himself, so he doesn't necessarily need a user interface, but he'd like to use some custom software with HTTP requests and retain the possibility of later adding a web-based user interface to the application.

Let's start by creating our first real project: Ilari's flight diaries. As usual, run npm init and install the typescript package as a dev dependency

Let's start by creating an endpoint that returns all flight diary entries.

First, we need to make some decisions on how to structure our source code. It is better to place all source code under src directory, so source code is not mixed with configuration files. We will move index.ts there and make the necessary changes to the npm scripts.

We will place all routers and modules which are responsible for handling a set of specific resources such as diaries, under the directory src/routes. This is a bit different than what we did in part 4, where we used the directory src/controllers.