# 使用官方 Nginx 镜像
FROM nginx:latest

# 将 React 构建产物复制到 Nginx HTML 目录
COPY build/ /usr/share/nginx/html

# 添加自定义 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
