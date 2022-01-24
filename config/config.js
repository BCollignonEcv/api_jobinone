module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'data/dev-db.sqlite3'
  },
  test: {
    dialect: 'sqlite',
    storage: 'data/test-db.sqlite3'
  },
  production: {
    use_env_variable: "DATABASE_URL"
  }
};