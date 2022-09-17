

function makeHeader(){

    var header_body = ''
    header_body += '<header><div class="container-fluid clear-padding-row">';
    header_body += '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
  header_body += '<div class="container-fluid">';
    header_body += '<a class="navbar-brand" href="#">';
     header_body += '<i class="fa-solid fa-feather-pointed"></i>台灣土種雞網</a>';
     header_body += '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
       header_body += '<span class="navbar-toggler-icon"></span>';
     header_body += '</button>';
        header_body += '<div class="collapse navbar-collapse" id="navbarSupportedContent">';
       header_body += '<ul class="navbar-nav ms-auto mb-2 mb-lg-0">';

         header_body += '<li class="nav-item">';
           header_body += '<a class="nav-link active" aria-current="page" href="/native/templates/index.html">';
             header_body += '<i class="fa-solid fa-house-user"></i>回到首頁</a></li>';
           header_body += '<li class="nav-item dropdown">';
           header_body += '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:white">';
             header_body += '<i class="fa-solid fa-newspaper"></i>最新消息</a>';

           header_body += '<ul class="dropdown-menu">';
             header_body += '<li><a class="dropdown-item" href="/native/templates/aiinfo.html?1">禽流感疫情資訊</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/feedprice.html?1">進口原物料價格</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/eggmeatprice.html?1">家禽產地交易行情</a></li></ul></li>';

           header_body += '<li class="nav-item dropdown">';
           header_body += '<span></span>';
           header_body += '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:white">';
             header_body += '<i class="fa-solid fa-egg"></i>雞種介紹</a>';

           header_body += '<ul class="dropdown-menu">';
             header_body += '<li><a class="dropdown-item" href="/native/templates/breed_chicken.html">育種品系介紹</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/conservation_chicken.html">保種品系介紹</a></li></ul></li>';


           header_body += '<li class="nav-item dropdown">';
           header_body += '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:white">';
             header_body += '<i class="fa-solid fa-book"></i>研究成果</a>';
           header_body += '<ul class="dropdown-menu">';
             header_body += '<li><a class="dropdown-item" href="/native/templates/article_Taiwan.html?1">台灣土雞論文</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/article_zaki.html?1">石岐雞論文</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/article_huadong.html?1">花東雞論文</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/article_kinmen.html?1">金門雞論文</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/article_silkie.html?1">絲羽烏骨雞論文</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/article_emei.html?1">峨嵋雞論文</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/article_takezaki.html?1">竹崎雞論文</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/article_faith.html?1">信義雞論文</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/article_nagoya.html?1">名古屋雞論文</a></li></ul></li>';

           header_body += '<li class="nav-item dropdown">';
           header_body += '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:white">';
             header_body += '<i class="fa-solid fa-circle-user"></i>會員中心</a>';

           header_body += '<ul class="dropdown-menu">';
             header_body += '<li><a class="dropdown-item" href="/native/templates/about.html">關於我</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/change_info.html">更改會員資料</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/forget_password.html">忘記密碼</a></li>';
             header_body += '<li><a class="dropdown-item" href="https://nativechicken-chatroom.herokuapp.com/chat/index/" target="_blank">台灣土種雞交流區</a></li></ul></li>';

           header_body += '<li class="nav-item">';
           header_body += '<a class="nav-link active" aria-current="page" href="/native/templates/contact_us.html"><i class="fa-solid fa-square-phone-flip"></i>聯絡我們</a></li>';

           header_body += '<li class="nav-item dropdown navbar-right">';
           header_body += '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:white">';
            header_body += '<i class="fa-solid fa-right-to-bracket"></i>登入/註冊</a>';

           header_body += '<ul class="dropdown-menu">';
             header_body += '<li><a class="dropdown-item" href="/native/templates/login.html">登入</a></li>';
             header_body += '<li><a class="dropdown-item" href="/native/templates/register.html">註冊</a></li>';
             header_body += '<div id="logout" style="display:none" ><li><a class="dropdown-item" href="#">登出</a></li></div>';
               header_body += '<li><hr class="dropdown-divider"></li>';
             header_body += '<li><a class="dropdown-item github_login" href="#">GitHub登入</a></li></ul></li>';
           header_body += '</ul></div></div></nav></div></header>';

    return header_body
}
function makeFooter(){
    var header_body = ''
    header_body += '<footer><div class="container clear-padding-row"><div class="row"><div class="col"><p>Copyright © 2022 國立中興大學動物科學系設計製作</p></div></div></div></footer>'
    return header_body
}


function loginOut(){

    $('#logout').on('click', function(){

            if(confirm("確定登出嗎？")){
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('user');
                window.location.href= '/native/templates/index.html';
            }
        }
    )

}
function githubLogin(){
$('.github_login').click(function(){
    $.ajax({
    type:'get',
    url:"http://13.234.239.11:80/v1/users/github/authorization",
    success:function(response){
    if(200==response.code){
        console.log(response)
        console.log('go to github')
        window.location.href=response.oauth_url
    }else{
    alert('服務器異常')
                   }
                }
    })
    })}