echo '编译项目'
npm run build:pro

echo '推送到服务器'
scp -r ./dist-pro/* my-server:/hopai
echo '--Done--'