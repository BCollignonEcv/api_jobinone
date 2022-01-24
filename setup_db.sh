# abort on errors
set -e

# Migrate Sqlite database
echo db:migrate
npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate

# Add data to database
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed --seed 20220116223125-default-data.js

cd -