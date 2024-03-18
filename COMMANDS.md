docker volume create mysql_data
docker run -d -p 3307:3306 --name mysql-container -e MYSQL_ROOT_PASSWORD=root -v mysql_data:/var/lib/mysql mysql:latest
docker cp db/dumps/test-dump.sql mysql-container:/test-dump.sql
docker exec -it mysql-container mysql -u root -p
source ./test-dump.sql
--
docker build -t node-app .
docker run -d --name node-container --link mysql-container:mysql -p 3000:3000 node-app