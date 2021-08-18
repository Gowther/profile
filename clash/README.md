在Windows下使用winsw后台运行，配置文件参见winsw.xml，在启动服务的时候会自动下载mmdb数据库。

使用方法：
1. 下载winsw，修改名称为“winsw.exe”，放在clash目录中
2. 将clash-\*.exe放在clash/bin目录下，将配置文件放在clash目录下
3. 配置环境变量，将winsw所在文件夹添加到PATH后重启
4. 执行
    ```sh
    winsw install
    winsw start
    ```
