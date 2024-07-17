#!/bin/bash
source .env &&
    sed -i~ s/^FE_VERSION.*/FE_VERSION=${FE_VERSION}/ ./fe/.env.local &&
    echo "> BUILD FE VERSION $FE_VERSION" &&
    docker build ./fe -t chillax-fe:${FE_VERSION} &&
    # Run container
    echo "> RUN CONTAINER" &&
    docker compose down chillax-fe &&
    docker compose up chillax-fe -d --remove-orphans &&
    # Remove unuse image
    echo "> REMOVE UNUSE IMAGE" &&
    runningImages=$(docker ps --format {{.Image}}) &&
    docker rmi $(docker images --format {{.Repository}}:{{.Tag}} | grep -v "$runningImages")

rm ./fe/.env.local~
