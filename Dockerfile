# Base image: Ubuntu + các công cụ cơ bản
FROM ubuntu:22.04

# Cập nhật và cài đặt tiện ích
RUN apt update && apt install -y \
    curl wget unzip git python3 python3-pip openjdk-17-jre-headless nodejs npm \
    && apt clean

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy toàn bộ file từ repo vào container
COPY . .

# Nếu có file .rar, cài unrar để giải nén
RUN apt install -y unrar && unrar x "*.rar" || true

# Cổng mặc định
EXPOSE 8080

# Chạy file chính (tùy theo ngôn ngữ bạn dùng)
# Bạn có thể đổi dòng CMD này cho phù hợp
CMD ["bash", "-c", "if [ -f server.jar ]; then java -jar server.jar; elif [ -f index.js ]; then node index.js; elif [ -f main.py ]; then python3 main.py; else echo 'No runnable file found'; sleep 3600; fi"]

