# Get Started

```
cp .env.example .env
./vendor/bin/sail build --no-cache
./vendor/bin/sail up -d
./vendor/bin/sail shell
composer install
npm install
npm run dev
```
http://localhost:3000

## error
Another process with pid 62 is using unix socket file. <br>
https://stackoverflow.com/questions/75251748/mysql-not-starting-on-docker
```
docker-compose down --volumes
./vendor/bin/sail up --build
```