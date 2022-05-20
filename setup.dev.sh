# abort on errors
set -e

# Install dependencies
echo -------------------
echo --- npm:install ---
echo -------------------
echo
npm install

if [[ -f "data/dev-db.sqlite3" ]]
then
    # Reset Sqlite database
    echo
    echo ---------------------
    echo ---- db:undo:all ----
    echo ---------------------
    echo
    npx sequelize-cli db:migrate:undo:all
fi

# Migrate Sqlite database
echo
echo --------------------
echo ---- db:migrate ----
echo --------------------
echo
npx sequelize-cli db:migrate

# Add data to database
echo
echo -------------------
echo ----- db:seed -----
echo -------------------
echo
npx sequelize-cli db:seed --seed 20220409-default-data.dev.js

# Run API
echo
echo -------------------
echo ----- run:API -----
echo -------------------
echo

npm run dev