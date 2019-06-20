# Food-Log

Food log is an open source software that enables the users to manage and monitor food ordering operations such like creating and modifying orders,
registering new restaurants, users, food units and much more, the software is multi tiered, there is a GraphQL API that enables the users to do CRUD operations on the database tables, the API have its own cache service built on top of Redis.

The API is mainly consumed by the web app, which is a standalone NodeJs web application, which uses Pug as a view engine, the application is authenticated using Google Oauth 2.0.

<h3>Current Progress:</h3>

I'm currently working on the web application, the current main concern is the interfaces, once completed a GraphQL queries will be written to make the application alive.  

<h3>Future work:</h3>

<ul>    
  <li> Migrate to TypeScript.</li>      
  <li> Find a way to get restaurants menus and information.</li>      
  <li> Send notifications to people who didn't pay for their orders.</li>      
</ul>     
<h3>Tools and Technologies:</h3>
<ul>
<li>NodeJs.</li>
<li>Redis.</li>
<li>MySQL.</li>
<li>Docker products.</li>
<li>Pug / Jade templates.</li>
</ul>

<h4>Scope of use:</h4>
The software can be used where a group of people rely on one person to order food, it enables the person who makes the order to control, observe the order details, cut time and avoid imperising situations.
