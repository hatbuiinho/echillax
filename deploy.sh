#!/bin/bash
source .env
git pull && \
docker build ./fe -t chillax-fe:${FE_VERSION} && \
docker rmi -f $(docker images -f "dangling=true" -q) \
docker compose down && \
docker compose up -d --remove-orphans