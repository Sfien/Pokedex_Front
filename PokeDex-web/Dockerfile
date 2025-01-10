# 使用官方 Nginx 镜像作为基础镜像
FROM nginx:alpine

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 将本地的前端代码（HTML, CSS, JS）复制到容器的 Nginx 根目录
COPY ./index.html ./detail.html ./css ./js ./assets /usr/share/nginx/html/

# 将 Nginx 配置文件复制到容器中
COPY ./nginx.conf /etc/nginx/nginx.conf

# 暴露容器端口 80
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
