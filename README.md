### Nest.js / React / PostgreSQL / Redis

#### More about this project:
* Nest.js includes typeOrm package that allowes to create and run migration and provides you al ORM functionalities.
* To connect PgAdmin to PostreSQL you can use this host 'host.docker.internal' 

### Run environment 
* cp .env.example .env 
* docker-compose up -d

### Run static data migrations 
* chmod +x ./control.sh
* ./control.sh

### Public services
* client  - http://localhost:3000
* api     - http://localhost:5000
* PgAdmin - http://localhost:8080
