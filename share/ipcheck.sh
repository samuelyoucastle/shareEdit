b=$(hostname -I| grep -o -e '[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}' |head -n 1);
sed -i'/^1=>/'d /var/www/html/share/config/config.php;
sed -i'/^2=>/'d /var/www/html/share/config/config.php;
sed -i "8i   1=>'$b',"  /var/www/html/share/config/config.php;
mkdir /shareStorage;
mkdir /shareStorage/share;
mkdir /shareStorage/share/协同编辑文件;
chmod 777 /shareStorage/share/协同编辑文件;
sudo -u apache php /var/www/html/share/occ files_external:import wbcc.json;
mv /var/www/html/share/httpd.conf  /etc/httpd/conf;
sed -i 's@#ServerName www.example.com@ServerName localhost@' /etc/httpd/conf/httpd.conf;

