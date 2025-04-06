# ProjectMark-Rodrigo

Take home test for ProjectMark

## Run the project

This project requires NodeJS version 19 or newer.

- Install dependencies:

```sh
npm install
```

Start project:

```sh
npm run start
```

## Usage

You can use Postman or Curl to make calls to the API.

If using Postman, you can import the collection `ProjectMark.postman_collection.json` from the root.

The examples below use Curl.

### Create a topic:

```sh
curl -X POST http://localhost:3000/api/topics \
  -H "Content-Type: application/json" \
  -d '{"name": "A topic", "content": "Topic content"}'
```

### Get all topics:

```sh
curl -X GET http://localhost:3000/api/topics
```

### Get specific topic:

```sh
curl -X GET http://localhost:3000/api/topics/1234567890
```

> Replace `1234567890` with the topic id.

### Update a topic:

```sh
curl -X PUT http://localhost:3000/api/topics/1234567890 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated topic"}'
```

> Replace `1234567890` with the topic id.

### Get specific version of a topic:

```sh
curl -X GET http://localhost:3000/api/topics/1234567890/1
```

### Create a child topic:

```sh
curl -X POST http://localhost:3000/api/topics \
  -H "Content-Type: application/json" \
  -d '{"name": "A topic", "content": "Topic content", "parentTopicId": 1234567890 }'
```

### Delete a topic:

```sh
curl -X DELETE http://localhost:3000/api/topics/1234567890
```

> Replace `1234567890` with the topic id.

## Utilities

### Retrieve topic and all its subtopics recursively

```sh
curl -X GET http://localhost:3000/api/topics/recursive/1234567890
```

> Replace `1234567890` with the topic id.

### Shortest path between two topics in a tree

```sh
curl -X GET http://localhost:3000/api/topics/shortest/1234567890/0987654321
```

> Replace `1234567890` and `0987654321` with the topic ids.

## Tests

Run tests with:

```sh
npm run test
```
