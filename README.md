## Standup notes app

Node Express Postgres API

To run db
`docker run -it -e "POSTGRES_HOST_AUTH_METHOD=trust" -p 5432:5432 postgres`

Run `npm run migrate`


To build
`docker-compose up --build`


Example curl requests

`curl -X POST -d 'title=new note' localhost:8080/notes`
`curl -X POST -d 'name=new company' localhost:8080/companies`
`curl -X POST -d 'title=new project' localhost:8080/projects`


View Docker logs
`docker ps` to find container ID
`docker logs <containerID>`

Shell into db
`docker exec -it <containerID> sh`
Then run `psql -U postgres`
List dbs `\l`
Connect to db `\c`
List tables in db `\dt`

`quit` to quit psql, `exit` 