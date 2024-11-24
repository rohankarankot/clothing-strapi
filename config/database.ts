module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',  // Specify PostgreSQL as the client
    connection: {
      host: env('DATABASE_HOST', 'localhost'),     // Database host, default is 'localhost'
      port: env('DATABASE_PORT', 5432),            // Database port, default is 5432 for PostgreSQL
      database: env('DATABASE_NAME', 'clothing'),  // Database name (change to your desired database)
      user: env('DATABASE_USERNAME', 'postgres'),  // Your PostgreSQL username
      password: env('DATABASE_PASSWORD', 'rohan'), 
      schema:env('DATABASE_SCHEMA','public'),
      ssl: {
        rejectUnauthorized: false,                 // Allows self-signed certificates
      },
    },
  },
});
