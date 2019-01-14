FROM nginx

MAINTAINER James wang <jameswangx95@gmail.com>

RUN mkdir /data/log/nginx -p

RUN chown nginx.nginx -R /data/log/nginx

ADD app/dist /data/web

# ADD nginx.conf /etc/nginx/nginx/conf
# ADD default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT nginx -g "daemon off;"