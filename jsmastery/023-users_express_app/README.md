# :family: Users API (Node|Express App)
This is the first REST API app using Node and Express.


## :question: How to use the app
- install app dependencies (`npm i`)
- start the server (`npm start`)
- test API routes (according to the documentation)


## :book: API Documentation
1. Get All Users
   - **method**: `GET`
   - **controller**: `getUsers`
   - **endpoint**: `http://localhost:5000/users`

2. Get Specific User 
   - **method**: `GET`
   - **controller**: `getUsers`
   - **endpoint**: `http://localhost:5000/users/1`

3. Create New User
   - **method**: `POST`
   - **controller**: `addUser`
   - **endpoint**: `http://localhost:5000/users`
   - **body**: `raw (JSON)`
    ```JSON
    {
        "id": 9999,
        "name": "X",
        "age": 200
    }
    ```

4. Edit Existing User Partially
   - **method**: `PATCH`
   - **controller**: `editUser`
   - **endpoint**: `http://localhost:5000/users/9999`
   - **Body**: `raw (JSON)`
    ```JSON
    {
        "age": 120
    }
    ```

5. Delete Existing User
   - **method**: `DELETE`
   - **controller**: `deleteUser`
   - **endpoint**: `http://localhost:5000/users/9999`


## :hammer_and_wrench: Tools and Techs Used
- JS|ES for handling routers and app logic
- node.js|npm for server and pakages managment
- express.js for API routing
- dotenv (.env) for security 
- nodemon for development server refreshing
- postman for API testing


## :link: Helpful Links
- [JSM Video](https://youtu.be/l8WPWK9mS5M?si=IvEPemAZYOZhdzCN)
- [يحيى تك](https://youtu.be/DURM6yft8RU?si=_NtEK9etZyTdXs2w)
- [Status Codes](https://www.w3schools.com/tags/ref_httpmessages.asp)