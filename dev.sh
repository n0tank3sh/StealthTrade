#!/bin/bash

# Set container name

CONTAINER_NAME="postgres_container"

# Check if the container is already running
if docker ps --filter "name=$CONTAINER_NAME" --filter "status=running" | grep "$CONTAINER_NAME" > /dev/null; then
    echo "PostgreSQL container '$CONTAINER_NAME' is already running."
else
    echo "PostgreSQL container '$CONTAINER_NAME' is not running. Starting container..."

    # Check if the container exists but is stopped
    if docker ps -a --filter "name=$CONTAINER_NAME" | grep "$CONTAINER_NAME" > /dev/null; then
        docker start "$CONTAINER_NAME"
    else
        # Pull PostgreSQL image if not already available
        docker pull postgres:latest

        # Run the PostgreSQL container
        docker run --name "$CONTAINER_NAME" -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=mydb -p 5432:5432 -d postgres:latest
        echo "PostgreSQL container '$CONTAINER_NAME' started successfully."
    fi
fi

export DATABASE="postgresql://myuser:mypassword@localhost:5432/mydb"

# Database connection string
DB_CONNECTION="postgresql://myuser:mypassword@localhost:5432/mydb"
MIGRATION_DIR="db/migrations"

# Check if goose migration is already up
if goose -dir "$MIGRATION_DIR" postgres "$DB_CONNECTION" status | grep -q "pending"; then
  echo "Pending migrations found. Applying migrations..."
  goose -dir "$MIGRATION_DIR" postgres "$DB_CONNECTION" up
else
  echo "All migrations are up to date."
fi