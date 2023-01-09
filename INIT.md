## Setup
### create-t3-app
```sh
$ docker-compose run --rm app npx create-t3-app@6.11.0 .
$ docker-compose run --rm app yarn add zustand @heroicons/react date-fns
```
### db
```sh
$ docker-compose run --rm app npx prisma migrate dev
$ docker-compose run --rm app npx prisma generate
$ docker-compose run --rm app npx prisma studio
```