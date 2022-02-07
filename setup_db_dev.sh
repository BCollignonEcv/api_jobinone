# abort on errors
set -e

# Migrate Sqlite database
npx sequelize-cli db:migrate

# Add data to database
npx sequelize-cli db:seed --seed import-default-data.dev.js

