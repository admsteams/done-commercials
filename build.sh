#!/bin/bash
set -e

echo "=== Installing dependencies ==="
pip install -r requirements.txt

echo "=== Building React app ==="
npm install
npm run build

echo "=== Setting up static files ==="
mkdir -p static
cp -r build/* static/

echo "=== Collecting static files ==="
python manage.py collectstatic --noinput --clear
python manage.py migrate

echo "=== Build complete ==="