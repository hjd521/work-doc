#!/bin/bash
set -e
pwd
cd docs/.vuepress
# 压缩dist为html.zip 
zip -q -r html.zip dist
# 上传文件到服务器
scp html.zip root@47.111.138.207:/usr/local/webserver/nginx/ 

