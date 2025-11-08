FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive

# Cài tiện ích cơ bản + unrar, node, python, java
RUN apt update && apt install -y \
    curl wget git unzip unrar python3 python3-pip openjdk-17-jre-headless nodejs npm \
    && apt clean

WORKDIR /app
COPY . .

# Mở terminal khi container khởi chạy
CMD ["/bin/bash"]
