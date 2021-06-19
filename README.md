## Standup notes app

Node Express Postgres API

To run db
`docker run -it -e "POSTGRES_HOST_AUTH_METHOD=trust" -p 5432:5432 postgres`

Run `npm run migrate`


To build
`docker-compose up --build`


Example curl request
`curl -X PUT -d 'title=curl' localhost:8080/notes `