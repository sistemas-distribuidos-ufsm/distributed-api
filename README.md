# Distributed API for Dog Bites

This project is part of the "[Sistemas Distribuídos A](https://github.com/sistemas-distribuidos-ufsm)" classes and works in conjunction with the [Main API of Dog Bites](https://github.com/sistemas-distribuidos-ufsm/main-api). It is built using NestJS, Node.js, Sequelize and PostgreSQL.

## Getting Started

1. Clone the repository
2. Run `npm install` to install all dependencies
3. Create a `.env` file in the root of the project and add your PostgreSQL database credentials 
4. Run `npm run start:dev` to start the development server
5. Open `http://localhost:3001` in your browser to access the application

## Database Migrations

This project uses [Sequelize](https://sequelize.org/) for database migrations.

### Running migrations

To run migrations, use the following commands:

- `npm run migration:up` to run all pending migrations
- `npm run migration:down` to revert the last batch of migrations
- `npm run migration:create name_of_migration` to create a new migration file. Replace `name_of_migration` with the name you want to give to the migration file.

### Additional notes

Make sure you have postgresql installed on your computer and the credentials of your database are correct before running the commands.

## API documentation

This project uses [Swagger](https://swagger.io/) for API documentation. To access the documentation, visit `http://localhost:3001/docs` after starting the development server.

## Built With

- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine
- [PostgreSQL](https://www.postgresql.org/) - A powerful, open source object-relational database system.
- [Sequelize](https://sequelize.org/) - An easy-to-use multi SQL dialect ORM for Node.js
- [Swagger](https://swagger.io/) - A popular tool for API documentation and development

## Authors

Leonardo Trindade

Samuel Rech Cassanego

Francismo Palermo

## License

Free to use, copy and monetize
