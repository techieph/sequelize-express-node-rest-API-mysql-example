# Rest API Writing using Sequelize - MySQL, Express, Node

## To Use this Project Locally

1. Create a database named `sequelize-example-db`
2. Run `git clone https://github.com/pradeephareeshph/sequelize-express-node-mysql-example.git` to clone this project to your local system under the folder named `sequelize-express-node-mysql-example`.
3. Run `npm install` or `yarn install` to install the `node_modules/` folder.
4. Make sure you have Sequelize CLI Installed globally in your system, if not run `npm install -g sequelize-cli` or `yarn global add sequelize-cli`.
5. Run `sequelize db:migrate` to run files under migrate section or to create tables in your `sequelize-example-db` database.
6. Make sure you have nodemon installed with you.
7. Run `npm start` to run the Rest API.
8. That's it Enjoy! The API call can be made to `{{server_url}}:3000`, if using local server `localhost:3000/`
9. Below are the Request written, try them out.
9. Give a Post Request to `{{server_url}}/api/create/company` with body { "name" : "Your Name" } to see that your name got updated in the companies table of the `sequelize-example-db` database. 
10. That's it with this starter, write a lot more.

## API Requests

1. **GET** {{server_url}}:3000 - To check whether the API is running

*Response:*
```
{
  "message": "API Works Great!"
}
```

2. **GET** {{server_url}}:3000/api - To check whether the API is running for routes inside routes folder

*Response:*
```
{
  "message": "Welcome All"
}
```

3. **POST** {{server_url}}:3000/api/create/company - To Insert a new Record into the companies table

*Body:*
```
{
	"name" : "Your Name",
	"address": "Your Address"
}
```


*Response:*
```
{
  {
  "id": 11,
  "name": "Your Name",
  "address": "Your Address",
  "updatedAt": "2019-06-12T06:48:59.040Z",
  "createdAt": "2019-06-12T06:48:59.040Z"
}
}
```

4. **GET** {{server_url}}:3000/api/company/ - To get all avaibale companies in database

*Response:*
```
[
  {
    "id": 1,
    "name": "Your Name 1",
    "address": "Your Address 2,
    "createdAt": "2019-06-11T10:19:27.000Z",
    "updatedAt": "2019-06-11T10:19:27.000Z"
  },
  {
    "id": 2,
    "name": "Your Name 2",
    "address": "Your Address 2",
    "createdAt": "2019-06-11T10:20:22.000Z",
    "updatedAt": "2019-06-12T08:31:50.000Z"
  }
]
```

5. **PUT** {{srver_url}}:3000/api/update/company/{{company_id}} - Updates the row which has the specified company_id

*Body:*
```
{
	"name" : "Your Name",
	"address" : "Your Address"
}
```

*Response:*
```
{
  "message": "Updated Successfully"
}
```

6. **GET** {{server_url}}:3000/api/company/{{company_id}} - Gets the company which has the specified compnay_id

*Response:*
```
{
    "id": 1,
    "name": "Your Name 1",
    "address": "Your Address 2,
    "createdAt": "2019-06-11T10:19:27.000Z",
    "updatedAt": "2019-06-11T10:19:27.000Z"
  }
```

7. **DELETE** {{server_url}}:3000/api/delete/company/{{company_id}} - Delete the company row whose company_id is specified

*Response:*
```
{
  "message": "Deleted Successfully"
}
```