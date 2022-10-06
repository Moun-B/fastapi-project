# Lightweight Linux operating system with python installed
FROM python:3.8-slim-buster
WORKDIR /fast-api-test
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1
COPY ./requirements.txt /fast-api-test/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /fast-api-test/requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
