# Use nginx as base image
FROM nginx:alpine

# Copy website files to nginx html directory
COPY . /usr/share/nginx/html/

# Configure nginx to listen on port 3000
RUN sed -i 's/listen       80/listen       3000/g' /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000