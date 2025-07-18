FROM python:3.8-slim
MAINTAINER Ashish Maurya
WORKDIR /app
COPY 01.py /app/01.py
CMD ["python", "01.py"]
 