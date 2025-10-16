#!/usr/bin/env bash
set -o errexit

echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Building React frontend..."
cd frontend/commercials
npm install
npm run build

echo "Copying React build to Django..."
cd ../..
# Create directories if they don't exist
mkdir -p backend/templates
mkdir -p backend/static

# Copy React build to Django
cp -r frontend/commercials/build/* backend/templates/
cp -r frontend/commercials/build/static/* backend/static/

echo "Running Django collectstatic..."
cd backend
python manage.py collectstatic --noinput --clear
python manage.py migrate

echo "Build completed successfully!"
