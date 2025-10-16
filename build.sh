#!/usr/bin/env bash
set -o errexit

echo "=== Starting build process ==="

# Install Python dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt

# Build React frontend
echo "Building React frontend..."
npm install
npm run build

# Create static directory structure
echo "Creating static directory structure..."
mkdir -p static
mkdir -p staticfiles

# Copy React build to static directory
echo "Copying React build to static directory..."
cp -r build/* static/

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput --clear
python manage.py migrate

echo "=== Build completed successfully ==="