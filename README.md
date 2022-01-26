# LEARN-NODE
The api is created with nodejs and mongodb, it is for whole authentication and authorization.

INSTALLATION: Installing dependencies 
Run npm install

Routes Menu
super-admin: *change roles of users
             *change status of users
admin: *Get all users
       *Change roles of clients , vendors and delivery guy
Clients, vendors and delivery guy can change their own profiles.       
### Create a user account
Here we create a user on `http://localhost:4000/api/signup`
Body: 
```
{
  "names": "John Doe",
  "email": "john@doe.com", // Email should be valid
  "password": "password"
}
```
### login the user
Here the user will need to login on `http://localhost:4000/api/signin`
Body:
```
{
  "email": "john@doe.com",
  "password": "password"  //required
  }
  ```
  ### Getall users
  Here to get all users we will open/test the API on `http://localhost:4000/api/users`
  
  ###Changing roles
  Here in order to change the roles of users , the admin will first signin in order to change the roles of users as he is the one responsible of it using the id of the user he wants to change on `http://localhost:4000/api/role`
  
  ###Deleting users
  Here to delete the users , the admin will test theAPI on `http://localhost:4000/api/delete`
  
 ### forgetPassword
 When the user gets to forget his/her password, he/she will click on`http://localhost:4000/api/forgotPassword` then enter their email  after entering it they will directly get their token which will be used to reset their password.
 Body:
 ```
 {
    "email": "john@doe.com"
 }
 ```   
 ###resetPassword
 The user will click on `http://localhost:4000/api/resetPassword`
 Body:
 ```
 {
    "resentlink": "........",
    "newpassword": "newpassword"
    }
 ```
 
 
 API Endpoints
 
 
 
 HTTP              ROUTES                              DESCRIPTION
 GET               /users                              Get all user profile
 
 POST              /api/signup                         Create new account of new users
 
 POST              /api/signin                         Signin user who already joined the platform
      
 POST              /api/forgetpassword                 Get link to reset password
 
 POST              /api/resetpassword                  create new password
 
 PATCH             /api/role                           change roles of users
 
 PATCH             /api/status                         Gives out the status of users if they are still active or not
 
 DELETE            /api/delete                         delete users
