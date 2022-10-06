# Lightweight Linux operating system with python installed
FROM python:3.8-slim-buster
WORKDIR /app/fast-api-test
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1
COPY ./requirements.txt /app/fast-api-test/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/fast-api-test/requirements.txt
COPY . /app/fast-api-test/
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
