# abort on errors
set -e

# Install package dependency
npm i

# Clean Sqlite database
echo db:migrate:undo:all
npx sequelize-cli db:migrate:undo:all

# Migrate Sqlite database
echo db:migrate
npx sequelize-cli db:migrate

# Add data to database
echo db:seed default-users
npx sequelize-cli db:seed --seed 20220116223125-default-users.js
echo db:seed default-sources
npx sequelize-cli db:seed --seed 20220116223142-default-sources.js
echo db:seed default-roles
npx sequelize-cli db:seed --seed 20220122175334-default-roles.js
echo db:seed default-administrators
npx sequelize-cli db:seed --seed 20220122175341-default-administrators.js
# Run App
node server.js

cd -