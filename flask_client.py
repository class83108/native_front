from flask import Flask,send_file,render_template,request
import requests

import sys



app = Flask(__name__)
@app.route('/index')
def index():
    #首頁
    return send_file('templates/index.html')
@app.route('/header')
def header():
    #首頁
    return send_file('templates/header.html')

@app.route('/customer/github/redirect/')
def callback():
    return send_file('templates/callback.html')

@app.route('/test_api')
def test_api():
    #測試
    return send_file('templates/test_api.html')

@app.route('/register')
def register():
    #註冊
    return send_file('templates/register.html')
@app.route('/login')
def login():
    #登入
    return send_file('templates/login.html')

@app.route('/<username>/info')
def info(username):
    #個人訊息
    return send_file('templates/about.html')
@app.route('/<username>/change_info')
def change_info(username):
    #修改個人訊息
    return send_file('templates/change_info.html')

@app.route('/<username>/change_password')
def change_password(username):
    #修改個人密碼
    return send_file('templates/change_password.html')

@app.route('/<username>/sub')
def sub(username):
    #修改訂閱內容
    return send_file('templates/send_mail.html')
@app.route('/forget_password')
def forget_password():
    #忘記密碼
    return send_file('templates/forget_password.html')


#爬蟲論文相關
@app.route('/article/zaki/<page_num>')
def article_zaki(page_num):
    #石岐論文
    return send_file('templates/article_zaki.html')
@app.route('/article/taiwan/<page_num>')
def article_taiwan(page_num):
    #台灣土雞論文
    return send_file('templates/article_Taiwan.html')
@app.route('/article/kinmen/<page_num>')
def article_kinmen(page_num):
    #金門論文
    return send_file('templates/article_kinmen.html')
@app.route('/article/nagoya/<page_num>')
def article_nagoya(page_num):
    #名古屋論文
    return send_file('templates/article_nagoya.html')
@app.route('/article/huadong/<page_num>')
def article_huadong(page_num):
    #花東論文
    return send_file('templates/article_huadong.html')
@app.route('/article/faith/<page_num>')
def article_faith(page_num):
    #信義論文
    return send_file('templates/article_faith.html')
@app.route('/article/takezaki/<page_num>')
def article_takezaki(page_num):
    #竹崎論文
    return send_file('templates/article_takezaki.html')
@app.route('/article/emei/<page_num>')
def article_emei(page_num):
    #峨嵋論文
    return send_file('templates/article_emei.html')
@app.route('/article/silkie/<page_num>')
def article_silkie(page_num):
    #絲羽烏骨雞論文
    return send_file('templates/article_silkie.html')

# 爬蟲進口原料
@app.route('/news/feedprice/<page_num>')
def feedprice(page_num):
    #進口原料
    return send_file('templates/feedprice.html')

# 爬蟲禽流感疫情資訊
@app.route('/news/aiinfo/<page_num>')
def aiinfo(page_num):
    #禽流感疫情資訊
    return send_file('templates/aiinfo.html')

# 爬蟲雞肉雞蛋價格
@app.route('/news/eggmeatprice/<page_num>')
def eggmeatprice(page_num):
    #進口原料
    return send_file('templates/eggmeatprice.html')

@app.route('/contact_us')
def contact_us():
    #測試登入
    return send_file('templates/contact_us.html')

@app.route('/breed_chicken')
def breed_chicken():
    #育種系列
    return send_file('templates/breed_chicken.html')

@app.route('/conservation_chicken')
def conservation_chicken():
    #保種系列
    return send_file('templates/conservation_chicken.html')

@app.route('/chicken/<breed>/<species>')
def strain(breed,species):
    #品種介紹
    return send_file('templates/chicken.html')



if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')