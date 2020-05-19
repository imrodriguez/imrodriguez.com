#!/bin/bash
#  ___           _        _ _ 
# |_ _|_ __  ___| |_ __ _| | |
#  | || '_ \/ __| __/ _` | | |
#  | || | | \__ \ || (_| | | |
# |___|_| |_|___/\__\__,_|_|_| 

source .env

./start.sh
#backend build 
sleep 5

# Install dependencies with composer for Drupal
docker-compose exec -u 1000 backend bash -c "composer install -o"
# Install Drupal site
docker-compose exec -u 1000 backend bash -c "vendor/bin/drush site-install --db-url=mysql://root:${MYSQL_ROOT_PASSWORD}@db:3306/${MYSQL_DEFAULT_DATABASE} --account-name ${DRUPAL_USER} --account-pass ${DRUPAL_PASSWD} -y"
# Config UUUID of Drupal for allow import from repo config
docker-compose exec -u 1000 backend bash -c "vendor/bin/drush config-set 'system.site' uuid '${DRUPAL_UUID}' -y"
# Import default config of repo
docker-compose exec -u 1000 backend bash -c "vendor/bin/drush cim --partial -y"
# Copy services.yml for allow request HTTP
docker-compose exec -u 1000 backend bash -c "cp web/sites/default/default.services.yml web/sites/default/services.yml"

#frontend build
cd website
# Install dependencies
npm install
# Build React app
npm run build