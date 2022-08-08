# -*- coding: utf-8 -*-
from re import findall
#from urllib.request import urlopen
from urllib import urlopen
import os
import requests
import json
import time
import subprocess
import re
#path_to_watch = r"C:\Users\Administrator\Desktop\addt"
path_to_watch = r"/home"
path_to_read = r"/shareStorage/share/share"
before = dict ([(f, None) for f in os.listdir (path_to_watch)])
befored = dict ([(f, None) for f in os.listdir (path_to_read)])
with open (r"/var/www/html/share/a.txt") as f:
  s=f.read()
  s1=re.split('\n',s)
url = "http://admin:admin@"+s1[0]+"/share/ocs/v1.php/cloud/users"  #接入地址
ocs = "true"
headers = {
    'OCS-APIRequest': 'true',
}
user_body = {"userid": "userid", "password": "123456", "displayName": "QM", "email": "TEST@qq.com",
             "groups": ["class01"], "subadmin": [], "quota": "100MB", "language": "zh_CN"}
group_body = {"groupid": "groupname"}
if before:
  for i in before:
    a=i[4:]
    print(a)
    # print ("Added: " , ", ".join (added))
    user_body["displayName"] = a
    user_body["groups"][0] = "admin"
    user_body["userid"] = a
    user_body["email"] = a
    user_body["password"] = "lancoot1"
    user_body["quota"] = ""
    response = requests.post(url, json=user_body, headers=headers)
    print("badd")
'''while 1:
  time.sleep (10)
  after = dict ([(f, None) for f in os.listdir (path_to_watch)])
  afterd = dict ([(f, None) for f in os.listdir (path_to_read)])
  added = [f for f in after if not f in before]
  new = [f for f in afterd if not f in befored]
  removed = [f for f in before if not f in after]
  deleted = [f for f in befored if not f in afterd]
  if added:
    for i in added:
      a=i[4:]
      print(a)
      #print ("Added: " , ", ".join (added))
      user_body["displayName"] =a
      user_body["groups"][0] = "admin"
      user_body["userid"] = a
      user_body["email"] = a
      user_body["password"] = "lancoot1"
      user_body["quota"] = ""
      response = requests.post(url, json=user_body, headers=headers)
      print("aadd")
  if removed:
    for i in removed:
      print ("Removed: " , ", ".join (removed))
      response = requests.delete(url + '/' + i, json=group_body, headers=headers)

  print("end")
  #before = after
  befored = afterd'''
