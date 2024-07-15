#!/bin/bash
echo "UNTAG CHILLAX $FE_VERSION" &&
docker rmi chillax-fe:${FE_VERSION} -f && source .env &&

    NEW_VERSION=$FE_VERSION &&
        sed -i~ s/^FE_VERSION.*/FE_VERSION=${NEW_VERSION}/ ./.env.local &&
            echo "> BUILD FE VERSION $FE_VERSION" &&
            docker build ./fe -t chillax-fe:${FE_VERSION} &&
            # Run container
            echo "> RUN CONTAINER" &&
            docker compose down &&
            docker compose up -d --remove-orphans &&
            # Remove unuse image
            echo "> REMOVE UNUSE IMAGE" &&
            runningImages=$(docker ps --format {{.Image}}) &&
            docker rmi $(docker images --format {{.Repository}}:{{.Tag}} | grep -v "$runningImages")


rm ./fe/.env.local~
