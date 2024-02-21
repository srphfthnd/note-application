# note-application

A note application for initial code challenge.

## Installation

Clone the [repository](https://github.com/srphfthnd/note-application.git) to download the application.

1. To install the dependencies.

```bash
npm install
```

2. To run the application

```bash
npm start
```

## Usage

#### Get all notes.

```bash
curl --location 'http://localhost:3000/notes'
```

#### Get specific note.

```bash
curl --location 'http://localhost:3000/notes/1'
```

#### Create new note.

```bash
curl --location 'http://localhost:3000/notes' \
--header 'Content-Type: application/json' \
--data '{
    "content": "I am here to create note."
}'
```

#### Make a change on specific note.

```bash
curl --location --request PUT 'http://localhost:3000/notes/2' \
--header 'Content-Type: application/json' \
--data '{
    "content": "Add note here."
}'
```

#### Delete specific note.

```bash
curl --location --request DELETE 'http://localhost:3000/notes/6' \
--header 'Content-Type: application/json' \
--data '{
    "content": "Updated note."
}'
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Unit Test will be available soon.

## License

[MIT](https://choosealicense.com/licenses/mit/)
