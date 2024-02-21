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
![image](https://github.com/srphfthnd/note-application/assets/30517958/0fed8586-6e10-4f04-9e2b-1f073217f792)


#### Get specific note.

```bash
curl --location 'http://localhost:3000/notes/1'
```
![image](https://github.com/srphfthnd/note-application/assets/30517958/e589afc0-5aad-4894-9c86-0c425aa243df)
![image](https://github.com/srphfthnd/note-application/assets/30517958/901efeee-727d-4e2d-a546-90dbf814089e)


#### Create new note.

```bash
curl --location 'http://localhost:3000/notes' \
--header 'Content-Type: application/json' \
--data '{
    "title": "This is newly created note",
    "body": "This is the body of newly created note."
}'
```
![image](https://github.com/srphfthnd/note-application/assets/30517958/ef7c65bf-3ae2-40d1-83a5-7c17fa7b8ee7)
![image](https://github.com/srphfthnd/note-application/assets/30517958/5e57c48e-50d3-4cdd-90e3-61ef8de27418)
![image](https://github.com/srphfthnd/note-application/assets/30517958/32faa4a8-5459-4c9c-98ac-90c1a2b5c40a)


#### Make a change on specific note.

```bash
curl --location --request PUT 'http://localhost:3000/notes/1' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Testing",
    "body": "This is newly changed note."
}'
```
![image](https://github.com/srphfthnd/note-application/assets/30517958/74981fb4-cc03-4bb7-ae95-4abe53314b9b)
![image](https://github.com/srphfthnd/note-application/assets/30517958/8551a49c-4da3-4da0-84e6-802ca9e6e224)
![image](https://github.com/srphfthnd/note-application/assets/30517958/251a4216-d1b3-432a-b1ee-1080d9378747)


#### Delete specific note.

```bash
curl --location --request DELETE 'http://localhost:3000/notes/5' \
--data ''
```
![image](https://github.com/srphfthnd/note-application/assets/30517958/ca4bd5f4-31f3-4c1d-8fcc-2bca617ebe77)
![image](https://github.com/srphfthnd/note-application/assets/30517958/1929606d-aa1c-4b5a-a4bc-7221eb65f54d)
![image](https://github.com/srphfthnd/note-application/assets/30517958/05f25279-d738-4670-a38c-601588759058)


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Unit Test will be available soon.

## License

[MIT](https://choosealicense.com/licenses/mit/)
