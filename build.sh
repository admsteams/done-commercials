#!/usr/bin/env bash
set -o errexit

# Install Python dependencies
pip install -r requirements.txt

# Build React frontend
cd frontend/commercials
npm install
npm run build

# Copy React build to Django static files
cd ../..
cp -r frontend/commercials/build/* backend/templates/
cp -r frontend/commercials/build/static/* backend/static/

# Collect static files
cd backend
python manage.py collectstatic --noinput
python manage.py migrate