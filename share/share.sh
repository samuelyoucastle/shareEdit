#！/bin/bahs
chown apache:apache -R /var/www/html;
#sudo -u apache php occ maintenance:install --admin-pass="admin";
b=$(hostname -I| grep -o -e '[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}.[0-9]\{1,3\}' |head -n 1);
sed -i'/^1=>/'d /var/www/html/share/config/config.php;
sed -i'/^2=>/'d /var/www/html/share/config/config.php;
sed -i "8i   2=>'$b',"  /var/www/html/share/config/config.php;
sed -i "4i   'allow_local_remote_servers'=>true,"  /var/www/html/share/config/config.php;
#sed -i "16i   'default_language'=>'zh_CN',"  /var/www/html/share/config/config.php;
#sed -i "16i   'default_locale'=>'zh',"  /var/www/html/share/config/config.php;
sudo -u apache php occ app:enable onlyoffice;
sudo -u apache php occ config:app:set onlyoffice --value="http://$b:7777/"  DocumentServerUrl;
sed -i " 12i export OC_PASS=lancoot1"  /root/.bashrc;
export OC_PASS=lancoot1;
su -s /bin/sh apache -c 'php occ user:add --password-from-env  --display-name=share --group=share share';
mkdir /shareStorage;
mkdir /shareStorage/share;
mkdir /shareStorage/share/协同编辑文件;
chown apache /shareStorage/share/协同编辑文件;
chmod 777 /shareStorage/share/协同编辑文件;
touch /shareStorage/share/协同编辑文件/.saveall;
chattr  +i +a  /shareStorage/share/协同编辑文件/.saveall
#ln -s /var/www/html/share/data/share/files /shareStorage/share/share;
sudo -u apache php /var/www/html/share/occ app:enable files_external;
sudo -u apache php /var/www/html/share/occ files_external:import wbcc.json;
chmod 777 /var/www/html/share/ipcheck.sh;
docker rm $(docker ps --all -q -f status=created);
docker run --restart=always -i -t -d -p 7777:80 3e3325817974;
#docker run --restart=always -i -t -d -p 7777:80 gmsjy/onlyoffice ;

