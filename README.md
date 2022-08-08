# Developer.IO

This is a paid platform where developers can share their ideas and experience. <br/>
The complete web application is a MERN project. Front-end is built using React JS and backend using Express(Node JS).  <br/>
Database connectivity is provided through MongoDB Atlas. Details of developer who have joined the platform and the content of the pages shared by the developers are both maintained using MongoDB Atlas.
Both frontend and backend run on different ports during development and hence their intercommunication is established using CORS (Cross-Origin Resource Sharing). <br/>
The payment gateway is managed through Stripe integration.

# Walk-through

Every new user is prompted to create a new Developer ID. This ID is to be used for logging into the application in the future and should be kept confidential. 
On entrying the desired ID, the user is taken to the payment processing page and asked to make the payment to continue using the application. On successful payment, the user is taken to the home page. 
Each developer gets to view the pages of other developers and can also float a new page at anytime. 

Developer - Harini
