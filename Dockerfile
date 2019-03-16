FROM nginx

COPY dist/ngx-san /usr/share/nginx/html

# docker build -t ngx-nginx .
# docker run --name custom-ngx-nginx -d ngx-nginx -p 8080:80