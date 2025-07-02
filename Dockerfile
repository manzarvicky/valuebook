# Use nginx as base image
FROM nginx:alpine

# Copy website files to nginx html directory
COPY . /usr/share/nginx/html/

# Expose port 3000
EXPOSE 3000

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
