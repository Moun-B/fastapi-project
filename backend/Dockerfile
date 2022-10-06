# Lightweight Linux operating system with python installed
FROM python:3.8-slim-buster

# Will send any Python output straight to the terminal (allows us to work in "real time")
ENV PYTHONUNBUFFERED=1
WORKDIR /app/fast-api-project

# Taking all the dependencies requirements and install them
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# Copy all the files from the application directory
COPY . .

# Run the command to start the server (0.0.0.0:8000 allows all IP address to run the service)
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
