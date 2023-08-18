#!/bin/bash

script_names="example"

for script_name in $script_names; do
    docker exec  postgres psql -d app -f "/var/lib/postgresql/migrations/$script_name.sql"
done
 