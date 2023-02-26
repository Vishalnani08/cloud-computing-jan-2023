### Nginx server config files and sample html content to display

server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;
        server_name _;
        location / {
                try_files $uri $uri/ =404;
        }
}

server {
        listen 2657 camazon;
        listen [::]:2657 camazon;
        root /var/www/html;
        index camazon.html;
        server_name camazon;
        location / {
                try_files $uri $uri/ =404;
        }
}

server {  
    listen 2657;
    server_name localhost;

    root /var/www/html;
    index camazon.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

sudo ln -s /etc/nginx/sites-available/camazon /etc/nginx/sites-enabled/

server {  
    listen 9842;
    server_name santosh;

    root /var/www/html;
    index santosh.html;

    location / {
        try_files $uri $uri/ =404;
    }
}

sudo ln -s /etc/nginx/sites-available/santosh.conf /etc/nginx/sites-enabled/

server {  
    listen 5689;
    server_name rajeshwari;

    root /var/www/html;
    index rajeshwari.html;

    location / {
        try_files $uri $uri/ =404;
    }
}

sudo ln -s /etc/nginx/sites-available/rajeshwari.conf /etc/nginx/sites-enabled/








server {  
    listen 9876;
    server_name meghana;

    root /var/www/html;
    index meghana.html;

    location / {
        try_files $uri $uri/ =404;
    }
}

sudo ln -s /etc/nginx/sites-available/meghana.conf /etc/nginx/sites-enabled/


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: black;
            color: whitesmoke;
        }
    </style>
</head>
<body>
    <center>
        <br><br><br>
        <h1>Hello I'm Meghana</h1>
        <br><br><br>
    </center>
</body>
</html>





































