# Use the official Nginx image from Docker Hub
FROM nginx:latest

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Copy your static website files to the working directory
COPY . /usr/share/nginx/html

# Expose port 80 to serve the website
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
