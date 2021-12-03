# Mini Project 4

## Project Partners
Hephzibah Emereole & Lorraine Makuyana
CS433 Operating Systems - Mini Project 4 

### Details
Created a web application using Node.js and docker used to host it locally on port 8080 

### Serving on local machine
1. Clone the project repository
2. Open the terminal and navigate to the directory where the downloaded folder is  
3. Run the index.js file using the command node index.js to start the server
4. Localhost on port 8080 will start running and display 'OS Mini project Hephzibah & Lorraine'
5. Update the permission code on the url and change the parity bits on the url
6. Example for parity: http://localhost:8080/parity/00/11/10/01
7. Example for permissions: http://localhost:8080/permissions/765

### Using DOCKER
##### COMMANDS TO BUILD AND RUN THE APPLICATION USING DOCKER

1. Build image
<code> $ docker build . -t <your-docker-username>/node-web-app </code> 

2. See the image 
<code> $ docker images </code>

3. Run the image 
<code> $ docker run -p 49160:8080 -d <your-docker-username>/node-web-app </code>

4. Get app output 
<code> $ docker logs <container-id></code>

5. Test app 
<code> $ docker ps </code> 

6. Call the application 
<code> $ curl -i localhost:49160 </code>

You can start sending requests!

