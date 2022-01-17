# abort on errors
set -e

# Install package dependency
npm i

# Clean Sqlite database
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:migrate:undo:all

# Migrate Sqlite database
npx sequelize-cli db:migrate

# Add data to database
npx sequelize-cli db:seed --seed 20220116223125-default-users.js
npx sequelize-cli db:seed --seed 20220116223142-default-sources.js


# Run App
node server.js

cd -