# Use a more lightweight base image if possible
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE=config.settings

# Set the working directory
WORKDIR /app

# Copy Pipfile and Pipfile.lock
COPY Pipfile Pipfile.lock /app/

# Install pipenv and project dependencies
# Combine installation and cleanup in one layer to reduce image size
RUN pip install --no-cache-dir pipenv && \
    pipenv install --system --deploy --ignore-pipfile && \
    rm -rf /root/.cache

# Copying your media files and application code
COPY ./media /app/media
COPY . /app/

# Use daphne or asgiref to run the application
CMD ["daphne", "config.asgi:application", "-b", "0.0.0.0", "-p", "8000"]
