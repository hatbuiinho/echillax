#!/bin/bash
source .env
OLD_VERSION=$FE_VERSION
echo "> UNTAG OLD IMAGE $OLD_VERSION" &&

    # Pull source code
    echo "> PULL SOURCE CODE" &&
    git pull &&
    source .env &&
    NEW_VERSION=$FE_VERSION &&
    if [ "$NEW_VERSION" != "$OLD_VERSION" ]; then
        sed -i~ s/^FE_VERSION.*/FE_VERSION=${NEW_VERSION}/ ./fe/.env.local
        docker rmi chillax-fe:${FE_VERSION} -f &&
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
    else
        echo "Unchange version $FE_VERSION"
    fi

rm ./fe/.env.local~
