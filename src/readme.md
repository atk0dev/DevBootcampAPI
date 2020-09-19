# DevCamper API

> Backend API for DevCamper application, which is a bootcamp directory website

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Todo

```
1. Replace magic strings to const
2. Transform mongo response object to dto
``` 

## Generate documentation

```
Generated with: https://github.com/thedevsaddam/docgen

c:\soft\DocGen\windows_386.exe build -i "c:\work\github-atk0dev\DevBootcampAPI\postman\DevCamper API.postman_collection.json" -o index.html

```
## DO

```
ip: 46.101.104.83

ps - show all started processes

pm2 start server.js
pm2 save
pm2 status
pm2 restart server
pm2 stop server
pm2 startup ubuntu

pm2 logs


firewall
ufw status
ufw allow ssh
ufw allow http

nginx config
nano /etc/nginx/sites-available/default 
service nginx restart

published here: http://devatk11.com/apps/bootcamp/


```