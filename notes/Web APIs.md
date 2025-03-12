## Web APIs

A Web API is a set of protocols that allows different software applications to communicate over the internet, enabling the integration of diverse systems and facilitating data exchange and extension of functionality. It typically operates via HTTP, using standard methods such as GET and POST, and exchanges data in formats like JSON.

There are several different protocols that can be used to create Web APIs, including

- [REST](https://en.wikipedia.org/wiki/REST)
- [GraphQL](https://graphql.org)
- [gRPC](https://grpc.io)

REST is the most common, so we’ll focus on that.

### REST

REST Web APIs are designed to work over standard HTTP protocols. They use simple and stateless communication, which means that each request from a client to a server must contain all the information needed to understand and process the request.

The key principles of REST include stateless communication, client-server architecture, a uniform interface, and the use of standard HTTP methods (GET, POST, PUT, DELETE) to perform operations.

This lightweight approach makes them ubiquitous in web, mobile and desktop applications.

REST APIs expose their operations via URLs that represent resources (e.g. books). The standard HTTP protocol provides several methods that can be used to manipulate those resources.

- GET allows resources to be fetched (e.g. using an ID)
- POST allows new resources to be created
- PUT allows existing resources to be replaced
- PATCH allows existing resources to be updated
- DELETE allows existing resources to be deleted

### Web API libraries

There are a number of TS libraries we can use to create REST APIs.

- [Express](https://expressjs.com)
- [Fastify](https://fastify.dev)
- [Hapi](https://hapi.dev)
- [Koa](https://koajs.com)
- [Nest.js](https://nestjs.com)

Express is by far the most popular, so we’ll focus on that.

### API clients

Fetching data from REST API can be done via a web browser, but it’s quite a limited experience—and doesn’t support testing POST, etc.

API clients are designed to test APIs. There are three popular REST ones.

- [Postman](https://www.postman.com)
- [Insomnia](https://insomnia.rest)
- [Paw (Rapid API)](https://paw.cloud)

Postman is the most popular of the three and is cross-platform.

### Demo: Postman

The instructor will demonstrate the basics of the Postman API client.

### Express

To install express, use

```bash
npm install express @types/express
```

### Minimal Express server

```ts
import express from "express";

const PORT = 3001;

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello from LTREE!");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
```

`app.get` adds a `GET` operation on the relative URL `/` that returns the text `Hello from LTREE!`. Browse to `http://localhost:3001/` to view the greeting.

### Path parameters

We can also pass information via the URL. If we wanted to get a book with a specific ISBN we could capture it as follows.

```ts
app.get("/api/books/:isbn", (req, res) => {
  const isbn = req.params.isbn;

  res.send({
    isbn, // shorthand for isbn: isbn
  });
});
```

To see the result, browse to

```
http://localhost:3001/api/books/9780241382707
```

This should result in

```json
{ "isbn": "9780241382707" }
```

### Query parameters

Query parameters are the ones that come after the `?` in a URL. They are often used to specify optional parameters.

We can provide an option to format the JSON response to make it more readable.

```ts
app.get("/api/books/:isbn", (req, res) => {
  const isbn = req.params.isbn;

  const book = {
    isbn,
  };

  const pretty = req.query.pretty;
  const response = JSON.stringify(book, null, pretty && pretty !== "0" ? 2 : 0);
  res.send(response);
});
```

Access this operation via

```
http://localhost:3001/api/books/9780241382707?pretty=1
```

### POSTing data

To add resources, we implement POST operations.

Install the uuid package to create UUIDs.

```ts
npm install uuid @types/uuid
```

This operation adds an ID and returns it with the original book details.

```ts
import { v4 } from "uuid";

app.post("/api/books", (req, res) => {
  const book = req.body;

  res.status(201).send({
    ...book,
    id: v4(),
  });
});
```

201 is the [HTTP response status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) that represents `Created`. Well designed REST APIs return appropriate response codes.

- 1XX codes are informational
- 2XX codes represent successful requests
- 3XX codes indicate redirection
- 4XX codes represent client errors
- 5XX codes represent server errors

### Hands-on: Create a todo list REST API

Create a simple API that allows

- Fetching the todo list
- Adding items to the todo list
- Deleting items from the todo list by ID

Use an array to store the todo list items. In a production application, the items would be held in a database, but an array will be sufficient for the purposes of the exercise.

### Documenting APIs

The [OpenAPI specification](https://swagger.io/specification/) provides a standard for documenting REST APIs. Documenting your API in this way gives you access to any entire ecosystem of tools and services, including

- interactive documentation
- testing tools
- code generation of client and server skeletons

OpenAPI is language agnostic, so can generate, for example, a C# skeleton for the server and a TS one for the client.
