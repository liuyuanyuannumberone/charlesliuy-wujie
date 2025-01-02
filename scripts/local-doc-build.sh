#!/usr/bin/env bash

# 将当前目录切换到脚本所在目录的上一级目录
cd $(dirname $0)/..

# 设置脚本选项，-e表示一旦有命令返回非零状态，脚本立即退出，
# -o pipefail 表示管道中任何一个命令失败，整个管道返回非零状态
set -eo pipefail

cd ./docs

npm run docs:build

cd ../

rm -rf ../doc/*

mv ./docs/.vitepress/dist/* ../doc/
cp ../doc/index.html ../doc/404.html
cd ../doc
git add .
git commit -m 'feat: demo修改'
git push
