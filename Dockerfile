FROM python:3.11-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PORT=8080

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Build React frontend
WORKDIR /app/frontend/commercials
RUN npm install
RUN npm run build

# Go back to root directory
WORKDIR /app

# Create static directory and copy React build
RUN mkdir -p backend/static
RUN cp -r frontend/commercials/build/* backend/static/

# Collect static files and migrate
WORKDIR /app/backend
RUN python manage.py collectstatic --noinput

# Expose the port
EXPOSE $PORT

# Run the application
CMD python manage.py migrate && gunicorn commercials.wsgi:application --bind 0.0.0.0:$PORT