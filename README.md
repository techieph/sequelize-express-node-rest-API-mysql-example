# Rest API Writing using Sequelize - MySQL, Express, Node

## To Use this Project Locally

1. Create a database named `sequelize-example-db`
2. Run `git clone https://github.com/pradeephareeshph/sequelize-express-node-mysql-example.git` to clone this project to your local system under the folder named `sequelize-express-node-mysql-example`.
3. Run `npm install` or `yarn install` to install the `node_modules/` folder.
4. Make sure you have Sequelize CLI Installed globally in your system, if not run `npm install -g sequelize-cli` or `yarn global add sequelize-cli`.
5. Run `sequelize db:migrate` to run files under migrate section or to create tables in your `sequelize-example-db` database.
6. Make sure you have nodemon installed with you.
7. Run `npm start` to run the Rest API.
8. That's it Enjoy! The API call can be made to `{{server_url}}/3000`, if using local server `localhost:3000/`
9. Give a Post Request to `{{server_url}}/api/create/company` with body { "name" : "Your Name" } to see that your name got updated in the companies table of the `sequelize-example-db` database. 
10. That's it with this starter, write a lot more.
