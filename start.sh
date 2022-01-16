# abort on errors
set -e

# Install package dependency
npm i

# Migrate Sqlite database
npx sequelize-cli db:migrate

# Add data to database
npx sequelize-cli db:seed --seed 20220107150123-add-default-roles.js
npx sequelize-cli db:seed --seed 20220107160235-fake-users.js
npx sequelize-cli db:seed --seed 20220109180749-fake-posts.js
npx sequelize-cli db:seed --seed 20220109180755-fake-comments.js

# Run App
node server.js

cd -