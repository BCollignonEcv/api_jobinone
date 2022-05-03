module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'data/dev-db.sqlite3'
  },
  production: {
    dialect: 'postgres',
    use_env_variable: "DATABASE_URL"
  }
};