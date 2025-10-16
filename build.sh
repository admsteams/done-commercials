#!/usr/bin/env bash
set -o errexit

echo "=== Starting build process ==="

# Install Python dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt

# Build React frontend
echo "Building React frontend..."
cd frontend/commercials
npm install
npm run build

# Create static directory in backend
echo "Creating static directory..."
cd ../..
mkdir -p backend/static

# MANUAL COPY: Copy entire React build to backend/static
echo "Copying React build to static directory..."
cp -r frontend/commercials/build/* backend/static/

# Collect static files
echo "Collecting static files..."
cd backend
python manage.py collectstatic --noinput
python manage.py migrate

echo "=== Build completed successfully ==="