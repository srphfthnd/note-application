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
![image](https://github.com/srphfthnd/note-application/assets/30517958/6166c3b3-96e6-4127-8ab3-ff0091c3c898)


#### Get specific note.

```bash
curl --location 'http://localhost:3000/notes/1'
```
![image](https://github.com/srphfthnd/note-application/assets/30517958/90ef0412-5e8f-4782-a997-cd330b4062ee)
![image](https://github.com/srphfthnd/note-application/assets/30517958/750a34b8-41ca-44d7-bb5c-0655017703d6)



#### Create new note.

```bash
curl --location 'http://localhost:3000/notes' \
--header 'Content-Type: application/json' \
--data '{
    "title": "This is newly created note",
    "body": "This is the body of newly created note."
}'
```
![image](https://github.com/srphfthnd/note-application/assets/30517958/f366943c-dc8d-4465-a8a2-3de18fc87b5d)
![image](https://github.com/srphfthnd/note-application/assets/30517958/95870ce6-886e-4516-8145-f936317e11dc)



#### Make a change on specific note.

```bash
curl --location --request PUT 'http://localhost:3000/notes/1' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Testing",
    "body": "This is newly changed note."
}'
```
![image](https://github.com/srphfthnd/note-application/assets/30517958/38377e56-05ee-4464-b43c-b0106f8c345a)
![image](https://github.com/srphfthnd/note-application/assets/30517958/e2760a06-98e9-494a-8dab-94ac57c7a2d3)



#### Delete specific note.

```bash
curl --location --request DELETE 'http://localhost:3000/notes/5' \
--data ''
```
![image](https://github.com/srphfthnd/note-application/assets/30517958/62984658-10eb-44ef-a25e-556f21124627)
![image](https://github.com/srphfthnd/note-application/assets/30517958/e96573c7-ac27-4dfb-9a5e-87aa32269edb)
![image](https://github.com/srphfthnd/note-application/assets/30517958/58a3c9e0-2e6b-4b76-978f-61b7e28f62ca)



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Unit Test will be available soon.

## License

[MIT](https://choosealicense.com/licenses/mit/)
