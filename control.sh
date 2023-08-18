#! /usr/bin/bash

set -o allexport
source .env
set +o allexport

cd ./infra && ./migrate.sh