# Get Started

```
cp .env.example .env
./vendor/bin/sail build --no-cache
APP_PORT=3000 ./vendor/bin/sail up
```
http://localhost:3000

## error
Another process with pid 62 is using unix socket file. <br>
https://stackoverflow.com/questions/75251748/mysql-not-starting-on-docker
```
docker-compose down --volumes
./vendor/bin/sail up --build
```