# One-Time-Server
This is a simple REST server that generates an endpoint which can only be accessed once.  

### Running Instructions
Clone this repository and perform ```npm install``` to install all the required packages.  

Now start the node server using the command ```node index.js```  

Send a POST request with some data to the server.  
```$ curl --request POST -H "Content-Type: application/json" --data '{"coffee":1,"milk":1,"sugar":1,"chocolate":1}' http://localhost:3000/share```  
You will get a response with a one-time access link.  

Now try to access that link:  
```curl <link>```  
You will receive the data as response.  

Now try to access that link again. This time you will receive a negative response as the link has expired.
