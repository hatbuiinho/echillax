#!/bin/bash
FE_ENV=$(printenv | sort | grep -E "^NEXT|DIRECTUS") &&
    [[ -f ./fe/.env.local ]] || (touch ./fe/.env.local) &&
    : >./fe/.env.local && echo "$FE_ENV" >>./fe/.env.local

BE_ENV=$(printenv | sort | grep -E "^KEY|SECRET|DB|CACHE|CORS|ADMIN|AUTH") &&
    [[ -f ./chillax.env.local ]] || (touch ./chillax.env.local) &&
    : >./chillax.env.local && echo "$BE_ENV" >>./chillax.env.local
