# 使用 Nginx 官方镜像
FROM nginx:latest

# 设置容器内的工作目录（可选）
WORKDIR /usr/share/nginx/html

# 将你的前端构建文件复制到 Nginx 服务器的默认目录
COPY ./dist /usr/share/nginx/html

# 暴露容器的 80 端口
EXPOSE 80

# 默认情况下，Nginx 会在容器启动时自动运行
