#!/bin/bash

DOCKERFILE_BACKEND="$(cat ./app/server/Dockerfile)"
DOCKERFILE_FRONTEND="$(cat ./app/client/Dockerfile)"

DENY=(
  "RUN npm start"
)

echo "--------------------------"
echo '-app/backend/Dockerfile---'
echo "--------------------------"
echo "$DOCKERFILE_BACKEND"
echo "--------------------------"
echo '-app/frontend/Dockerfile--'
echo "--------------------------"
echo "$DOCKERFILE_FRONTEND"
echo "--------------------------"
echo "--------------------------"

error=0

for I in "${DENY[@]}"; do
  if [[ "$DOCKERFILE_BACKEND" == *"$I"* ]]; then
    echo "ERRO em 'app/server/Dockerfile': O comando '${I}' não é autorizado"
    error=1
  fi
  if [[ "$DOCKERFILE_FRONTEND" == *"$I"* ]]; then
    echo "ERRO em 'app/client/Dockerfile': O comando '${I}' não é autorizado"
    error=1
  fi
done

if [[ $error -eq 1 ]]; then
  echo "--------------------------"
  echo "--------------------------"
  echo "Ocorreu um erro"
  exit 1
fi
