FROM nginx

MAINTAINER James wang <jameswangx95@gmail.com>

#RUN mkdir /data/log/nginx -p

#RUN chown nginx.nginx -R /data/log/nginx
RUN cp /usr/share/nginx/html/ /usr/share/nginx/default
ADD app/dist /usr/share/nginx/html

# ADD nginx.conf /etc/nginx/nginx/conf
# ADD default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT nginx -g "daemon off;"