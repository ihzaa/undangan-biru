localStorage.setItem("paket",3),AOS.init({duration:3e3}),$(".slide-story").length&&new Splide(".slide-story",{type:"fade",rewind:!0,autoplay:!1,interval:5e3,speed:3e3,rewindSpeed:2e3,pagination:!0,cover:!0,updateOnMove:!0,arrows:!0,lazyLoad:"nearby"}).mount(),$(document).ready(function(){let a=$(".lazy-background"),e=$(".lazy-img"),t=new IntersectionObserver((a,e)=>{a.forEach(a=>{if(a.isIntersecting){let t=$(a.target);if(t.hasClass("lazy-background")){let n=t.data("bg");t.css("background-image","url("+n+")"),t.removeClass("lazy-background")}if(t.hasClass("lazy-img")){let i=t.data("src");t.attr("src",i),t.removeClass("lazy-img")}e.unobserve(a.target)}})});a.each(function(){t.observe(this)}),e.each(function(){t.observe(this)})}),$("p").each(function(a){$(this).addClass("fun-p-"+a)}),$("div").each(function(a){$(this).addClass("fun-div-"+a)}),$("h1").each(function(a){$(this).addClass("fun-h1-"+a)}),$("h2").each(function(a){$(this).addClass("fun-h2-"+a)}),$("h3").each(function(a){$(this).addClass("fun-h3-"+a)}),$("h4").each(function(a){$(this).addClass("fun-h4-"+a)}),$("h5").each(function(a){$(this).addClass("fun-h5-"+a)}),$("h6").each(function(a){$(this).addClass("fun-h6-"+a)}),$("span").each(function(a){$(this).addClass("fun-span-"+a)}),$("li").each(function(a){$(this).addClass("fun-li-"+a)}),$("ul").each(function(a){$(this).addClass("fun-ul-"+a)}),$("ol").each(function(a){$(this).addClass("fun-ol-"+a)}),$("a").each(function(a){$(this).addClass("fun-a-"+a)}),$("img").each(function(a){$(this).addClass("fun-img-"+a)}),$("small").each(function(a){$(this).addClass("fun-small-"+a)});var element,isPaused=!1,time=0,scroll=25,urlParams=new URLSearchParams(window.location.search),scrollValue=urlParams.get("scroll");scrollValue&&(scroll=scrollValue);var cekVia=localStorage.getItem("via");function runAutoScroll(){window.setInterval(function(){isPaused||(time++,window.scrollBy(0,1))},scroll)}function openEditModal(a){$("#"+a).show(),anime({targets:"#"+a+"-page1",translateY:0,opacity:1,duration:250,easing:"easeInOutSine"})}function closeEditModal(a){$(".onedit-class").removeClass("onedit-class"),anime({targets:"#"+a+"-page1",translateY:400,opacity:0,duration:250,easing:"easeInOutSine"}),setTimeout(function(){$("#"+a).hide()},250)}function registrasiRe(){var a=new FormData($("#login-form")[0]),e=$("#login-form").attr("action");$(".btn-login-re").text(),$(".btn-login-re").text("Loading..."),$("button, input, textarea").prop("disabled",!0),$.ajax({type:"POST",url:e,data:a,processData:!1,contentType:!1,success:function(a){var e=JSON.parse(a),t=e.status,n=e.msg;1==t?(closeEditModal("login"),openEditModal("data-pernikahan"),$("#notif-login-re").text("")):$("#notif-login-re").text(n),$("button, input, textarea").prop("disabled",!1),$(".btn-login-re").text("Masuk Dan Edit")},error:function(a,e,t){$("#notif-login-re").text("Terjadi kesalahan, periksa koneksi internet dan coba lagi"),$("button, input, textarea").prop("disabled",!1),$(".btn-login-re").text("Masuk Dan Edit")}})}cekVia&&$('input[name="kupon"]').val(cekVia),$("#auto_scroll").on("click",function(a){a.preventDefault(),isPaused?($("#menu_auto_scroll").css("background-color","#4970ea"),isPaused=!1,$(".notif_scroll").show()):(isPaused=!0,$("#menu_auto_scroll").css("background-color","transparent"),$(".notif_scroll").hide())}),localStorage.setItem("user_id",2);var d=new Date("Fri Oct 22 2021 10:31:00");let searchParams2=new URLSearchParams(window.location.search),demoParam=searchParams2.get("demo"),contohParam=searchParams2.get("contoh");if(1==demoParam){$(".awal1").remove();let a=$(".pages1");a&&(a.closest("body").attr("style","max-width:440px; margin: 0 auto; width: 100%"),a.append(`
    <div class="navigasi-realtime" style="position: absolute; z-index:99;bottom:7rem;left:2rem;">
        <div style="display:flex; width:100%;">
           <button type="button" onclick="prev()"> <svg class=" w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:50px; height:50px; background-color: #fff;border-radius: 1.25rem;opacity: 0.9;fill: #2d3748;" >
                <path fill-rule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clip-rule="evenodd"/>
            </svg>
            </button>
            <button type="button" onclick="next()">
                <svg class=" w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:50px; height:50px; background-color: #fff;border-radius: 1.25rem;opacity: 0.9;fill: #2d3748; margin-left: 7px;">
                <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"/>
            </svg>
                </button>
        </div>

        </div>`)),$(".awal").hide(),$("#playAudio").prop("muted",!0)}$("#wa3").hide(),$("#ucapan_2").bind("input propertychange",function(){$("#wa2").show()}),$("#hadir_id").change(function(){"1"==$(this).val()?($("#wa3").show(),$(".custom-form").show(),$(".custom-form").find("input, textarea, select").prop("disabled",!1),$("#jumlah_datang_id").val("1")):($("#wa3").hide(),$(".custom-form").hide(),$(".custom-form").find("input, textarea, select").prop("disabled",!0),$("#jumlah_datang_id").val("0"))}),$(".status_radio").change(function(){"1"==$(this).val()?($("#wa3").show(),$("#jumlah_datang_id").val("1")):($("#wa3").hide(),$("#jumlah_datang_id").val("0"))}),$("#hadir_id_popup").change(function(){"1"==$(this).val()?($("#wa3_popup").show(),$("#formContainer2").show(),$("#formContainer2").find("input, textarea, select").prop("disabled",!1),$("#jumlah_datang_id_popup").val("1")):($("#wa3_popup").hide(),$("#jumlah_datang_id_popup").val("0"),$("#formContainer2").hide(),$("#formContainer2").find("input, textarea, select").prop("disabled",!0))}),$("#konfirmasi-hadiah").submit(function(a){a.preventDefault();let e=$("#nama").val(),t=$("#jumlah").val(),n=$("input[name=norek]:checked").val(),i=n.split("|"),o="087888030598";if(o=o.replace(/^0/,"62"),e&&t&&n){let r=`https://wa.me/${o}?text=`+encodeURIComponent("Halo, saya "+e+" ingin konfirmasi pemberian hadiah sejumlah Rp. "+t+" melalui nomor Rekening"+i[1]+" atas nama "+i[0]+". Bisa di check yaa.");window.open(r,"_blank")}});let jamStart1=$("#jam_start1").val(),jamEnd1=$("#jam_end1").val();$("#sampai_selesai_check").click(function(){(null==jamStart1||null==jamEnd1)&&($("#jam_start1").val("08:00"),$("#jam_end1").val("08:00"))});let jamStart2=$("#jamStart2").val(),jamEnd2=$("#jam_end2").val();function alertMe(a){setInterval(function(){a.text("copy")},1e3)}$("#sampai_selesai_check2").click(function(){(null==jamStart2||null==jamEnd2)&&($("#jamStart2").val("08:00"),$("#jam_end2").val("08:00"))}),$("#galleryGrid").justifiedGallery({captions:!1,rowHeight:180,margins:5,lastRow:"nojustify"}),$("#filed_kehadiran").show(),$(".bantu_bayar2").on("click touchstart tap",function(){return $("#modal-bayar").modal("show"),1}),$(".rek_copy").on("click touchstart tap",function(){return $(this).text("copied!"),alertMe($(this)),1}),$("#btn_titip").on("click touchstart tap",function(){pembayaran()});var urlParams=new URLSearchParams(window.location.search),sectionName=urlParams.get("contoh");function openLink2(a){window.location.href=a}function saveToCalendar(){var a="2025";window.open("https://calendar.google.com/calendar/u/0/r/eventedit?text=The Wedding Of Ayu Dan Ihza&dates="+a+"0830T080000/"+a+"0830T090000","_blank")}function playMp3(){var a=document.getElementById("prev_mp3");a.paused?(a.play(),$("#play_mp3").text("Pause Audio")):(a.pause(),a.currentTime=0,$("#play_mp3").text("Play Audio"))}function isUserFilledPopupKehadiranForm(){localStorage.getItem("ucapanPopup-1952-Bapak%2520Budi")&&($("#filed_kehadiran").css("display","none"),$("#hadir_id").val(1),$("#formContainer").remove(),$(".custom-form").remove(),$("#notifPopupFill").css("display","block"))}function isUserFilledKehadiranForm(){localStorage.getItem("ucapanForm-1952-Bapak%2520Budi")&&($("#formContainer2").remove(),$("#kehadiran-modal-body").remove(),closeKehadrianModal(),$("#filed_kehadiran").remove(),$("#wa3").remove(),$(".custom-form").remove(),$("#notifPopupFill").css("display","block"))}function resetKehadiran(){localStorage.removeItem("ucapanPopup-1952-Bapak%2520Budi"),localStorage.removeItem("ucapanForm-1952-Bapak%2520Budi"),location.reload()}function loadUcapan(){}function aktifkanQRCode(){var a=localStorage.getItem("1952-nama");"undefined"==a||""==a||null==a?$("#qrcode_id").hide():$("#qrcode_id").show()}function opened(){let a=searchParams.get("kpd");if(!localStorage.getItem("open-1952")){let e={_token:"4ZLQ9cLByQcLksBLlzyMM3e5oJHcPZQBsqzvEETy"};a&&(e.nama_tamu=a),$.ajax({url:"/count-open/1952",method:"POST",data:e,success:function(a){localStorage.setItem("open-1952",!0)},error:function(a,e,t){console.error("Gagal menghitung:",t)}})}$("#konfir_nama").val(a),$("#playAudio").length&&$("#playAudio").get(0).play(),aktifkanQRCode(),setTimeout(function(){},1e4),setTimeout(function(){},5e3),runAutoScroll(),anime({targets:".awal",translateY:400,opacity:0,duration:500,easing:"easeInOutSine"}),setTimeout(function(){$(this).hide(),$(".awal").remove()},500),runAnimationOrnament(),runAnimationLoop(),runAnimationWithoutScrollTrigger()}function animUcapan(){var a=[{id:443138,pernikahan_id:1952,nama:"Purwanti",wa_tamu:"91918461318",ucapan:"Selamat",anonim:0,ket_hadir:0,jumlah:0,notif:null,balasan:null,password:"rfp8ba",slug:"740c5538-c422-4eb0-989d-6c7c638cdc80",email_tamu:null,created_at:"2023-10-20 11:45:15",updated_at:"2023-10-20 11:45:15"},{id:679481,pernikahan_id:1952,nama:"Tidak gratis",wa_tamu:"888",ucapan:"Prcuma, tidak gratis  - Isian Custom Form: Bisa Bangett Dong Custom Form",anonim:0,ket_hadir:1,jumlah:10,notif:1,balasan:null,password:"dkbny8",slug:"93473d7d-6bcd-4ddd-9ce4-cdfdea73da52",email_tamu:null,created_at:"2024-01-17 07:41:37",updated_at:"2024-01-17 07:41:37"},{id:225810,pernikahan_id:1952,nama:"Bapak Budi",wa_tamu:"081350400804",ucapan:"okelaj",anonim:0,ket_hadir:0,jumlah:0,notif:1,balasan:null,password:null,slug:null,email_tamu:null,created_at:"2023-07-10 18:35:04",updated_at:"2023-07-10 18:35:04"},{id:244707,pernikahan_id:1952,nama:"Bapak Budi",wa_tamu:"08526545569",ucapan:"hai",anonim:0,ket_hadir:1,jumlah:15,notif:1,balasan:null,password:null,slug:null,email_tamu:null,created_at:"2023-07-21 21:36:50",updated_at:"2023-07-21 21:36:50"},{id:67791,pernikahan_id:1952,nama:"Anonim",wa_tamu:"0394818",ucapan:"Hd7heJsudjajmamxm",anonim:0,ket_hadir:1,jumlah:0,notif:null,balasan:null,password:null,slug:null,email_tamu:null,created_at:"2023-03-20 21:33:48",updated_at:"2023-03-20 21:33:48"},{id:1237798,pernikahan_id:1952,nama:"Bapak Budi",wa_tamu:null,ucapan:"Selamat ya",anonim:0,ket_hadir:1,jumlah:1,notif:null,balasan:null,password:"6amkpt",slug:"367d9b7b-9ecc-44ae-b32d-30664ee2bcfd",email_tamu:null,created_at:"2024-06-30 06:04:14",updated_at:"2024-06-30 06:04:14"},{id:226907,pernikahan_id:1952,nama:"Susan Leban",wa_tamu:"081339651048",ucapan:"Selamat berbahagia buat kk Ayu dan kk Ihza semoga rumah tangga nya rukun terus amin \ud83d\ude07\ud83d\ude4f",anonim:0,ket_hadir:0,jumlah:0,notif:1,balasan:null,password:null,slug:null,email_tamu:null,created_at:"2023-07-11 08:45:21",updated_at:"2023-07-11 08:45:21"},{id:228962,pernikahan_id:1952,nama:"Fandy",wa_tamu:"604646",ucapan:"Akal",anonim:0,ket_hadir:1,jumlah:1,notif:1,balasan:null,password:null,slug:null,email_tamu:null,created_at:"2023-07-12 06:26:40",updated_at:"2023-07-12 06:26:40"},{id:446983,pernikahan_id:1952,nama:".",wa_tamu:"083195107473",ucapan:".",anonim:0,ket_hadir:1,jumlah:1,notif:1,balasan:null,password:"h9ymqh",slug:"cdcb1a7d-7c39-4269-b09a-ef8f98cf6642",email_tamu:null,created_at:"2023-10-21 13:21:31",updated_at:"2023-10-21 13:21:31"},{id:462500,pernikahan_id:1952,nama:"Bapak Bud",wa_tamu:"00",ucapan:"Slamat",anonim:0,ket_hadir:1,jumlah:3,notif:1,balasan:null,password:"wplomj",slug:"75d185b7-0e28-449c-8ad6-64a3eba636cc",email_tamu:null,created_at:"2023-10-26 14:11:37",updated_at:"2023-10-26 14:11:37"},],e=getRndInteger(0,a.length-1);$("#nama_tamu").text(a[e].nama),$("#ucapan_tamu").text(a[e].ucapan),anime({targets:".animasi-ucapan",translateX:70,opacity:1,duration:2e3}),setTimeout(function(){anime({targets:".animasi-ucapan",translateX:0,opacity:0,duration:2e3})},5e3)}function getRndInteger(a,e){return Math.floor(Math.random()*(e-a+1))+a}function bukaTamu(){localStorage.getItem("1952")?$(".modal").modal("hide"):$("#exampleModal2").modal({backdrop:"static",keyboard:!1})}function bukaProtokol(){$("#modal_protokol").modal({backdrop:"static",keyboard:!1})}function belum(a){$("#exampleModal").modal({backdrop:"static",keyboard:!1})}function whatsappCheck(){}1==sectionName&&($("#head_buat").show(),$("#animasi_ucapan").remove()),1==demoParam&&$("#animasi_ucapan").remove(),simplyCountdown(".simply-countdown-one",{year:2025,month:8,day:30,enableUtc:!1,hours:0,minutes:0,seconds:0}),"6"==$("#salamAgama").val()?$("#customAgamaInput").show():$("#customAgamaInput").hide(),$("#salamAgama").change(function(){"6"==$(this).val()?$("#customAgamaInput").show():$("#customAgamaInput").hide()}),$(".simply-countdown").attr("data-id",1952),$(".countdown-acara").append(`
<div style="width:100%; justify-content:center;">
    <a onclick="saveToCalendar()" class="btn btn-save-the-date" style="    position: relative;
    display: flex;
    margin: 0 auto;
    color: #fff;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    margin-top: 10px;
    background: #000080;
    color: white;
    border: 1.5px solid #000080;
    fill: white;" target="_blank">Save To Calendar</a>
</div>`),$(document).ready(function(){$("#data-pernikahan-form").submit(function(){return $("#btn-id-buat-re").prop("disabled",!0),setTimeout(function(){$("#btn-id-buat-re").prop("disabled",!1)},5e3),window.dataLayer.push({event:"buat_acara_baru_re"}),!0}),setTimeout(function(){anime({targets:"#kucing_imut",opacity:1,duration:1e3}),setTimeout(function(){anime({targets:"#kucing_imut",opacity:0,duration:1e3}),setTimeout(function(){$("#kucing_imut").hide(),$("#text-loading").remove()},1e3)},6e3)},2e3),localStorage.getItem("isiUcapan")&&$("#img-kado-buka").show(),$("#jumlah_datang_id").on("blur",function(){var a=parseInt($(this).val());isNaN(a)||a<0||a>10?($(this).val(""),$("#alert_data_ucapan").text("Maksimal jumlah hadir adalah 10 orang")):$("#alert_data_ucapan").text("")});var a=location.search.split("kpd=")[1];$("#konfir_nama").val(a),$("#notif_wa").hide(),localStorage.setItem("1952",!0),localStorage.setItem("nama",a);var e=localStorage.getItem("1952-nama");"undefined"==e||""==e||null==e?($("#qrcode_id").hide(),e!=a&&localStorage.setItem("1952-nama",a)):$("#qrcode_id").show(),setInterval(function(){animUcapan()},6e3),setTimeout(function(){loadUcapan()},3e3),anime({targets:".flower-anim",rotate:{value:30,duration:3e3,easing:"easeInOutSine"},scale:1.5,loop:!0,direction:"alternate",easing:"easeInOutSine"})}),$("#music_list_id").on("change",function(){var a=$(this).val(),e=document.getElementById("prev_mp3");console.log(a),$("#prev_mp3").attr("src","/"+a),$("#prev_mp3").trigger("load"),e.pause(),e.currentTime=0,$("#play_mp3").text("Play Audio")}),$("#push_ucapan").submit(function(a){a.preventDefault();var e=$("#tombol_kirim_2").text();$("#tombol_kirim_2").prop("disabled",!0),$("#konfir_nama_2").prop("readonly",!0),$("#ucapan_2").prop("readonly",!0),$("#tombol_kirim_2").text("Mengirim ...");var t=$(this).attr("action"),n=[];$("#formContainer .form-value").each(function(){n.push({field_name:$(this).data("field_name"),value:$(this).val().trim()})});var i=$('meta[name="csrf-token"]').attr("content"),o={_token:i,pernikahan_id:"1952",nama:$("#konfir_nama_2").val(),ucapan:$("#ucapan_2").val(),formTambahan:n,wa_tamu:$("#wa_tamu").val(),email_tamu:$("#email_tamu").val(),notif:$("#notif").val(),ket_hadir:$("#hadir_id").val(),jumlah:$("#jumlah_datang_id").val()};$.ajax({type:"POST",url:t,data:o,beforeSend:function(a){a.setRequestHeader("X-CSRFToken",i)},success:function(a){loadUcapan(),$("#tombol_kirim_2").prop("disabled",!1),$("#ucapan_2").val(""),$("#konfir_nama_2").prop("readonly",!1),$("#ucapan_2").prop("readonly",!1),$("#tombol_kirim_2").text(e),$("#push_ucapan").after('<p id="notif-submt" style="line-height: 14px;font-weight: 200;font-size: 12px;margin-top: 20px;background-color: #fff8d5;border-radius: 5px;color: #3b3b3b;padding: 5px;">Thank you, Your message has been successfully submitted</p>'),pembayaran(),openShop(),localStorage.setItem("isiUcapan",!0),localStorage.setItem("ucapanForm-1952-Bapak%2520Budi",!0),isUserFilledKehadiranForm(),setTimeout(function(){$("#notif-submt").hide()},7e3)},error:function(a,e){var t="";t=0===a.status?"Not connect.\n Verify Network.":404==a.status?"Requested page not found. [404]":500==a.status?"Internal Server Error [500].":"parsererror"===e?"Requested JSON parse failed.":"timeout"===e?"Time out error.":"abort"===e?"Ajax request aborted.":"Uncaught Error.\n"+a.responseText,console.log("Kirim ucapan gagal: "+t),$("#tombol_kirim_2").prop("disabled",!1),$("#konfir_nama_2").prop("readonly",!1),$("#ucapan_2").prop("readonly",!1),$("#tombol_kirim_2").text("Kirim")}})}),isUserFilledPopupKehadiranForm(),isUserFilledKehadiranForm(),$("#push_ucapan_popup").submit(function(a){a.preventDefault(),$("#tombol_kirim_2_popup").prop("disabled",!0),$("#konfir_nama_2_popup").prop("readonly",!0),$("#ucapan_2_popup").prop("readonly",!0),$("#tombol_kirim_2_popup").text("Mengirim ...");var e=$(this),t=e.attr("action"),n=[];$("#formContainer2 .form-value").each(function(){n.push({field_name:$(this).data("field_name"),value:$(this).val().trim()})});var i=e.serializeArray().reduce(function(a,e){return a[e.name]=e.value,a},{});i.formTambahan=n;var o=$.param(i);$.ajax({type:"POST",url:t,data:o,success:function(a){loadUcapan(),$("#tombol_kirim_2_popup").prop("disabled",!1),$("#ucapan_2_popup").val(""),$("#konfir_nama_2_popup").prop("readonly",!1),$("#ucapan_2_popup").prop("readonly",!1),$("#tombol_kirim_2_popup").text("Kirim"),pembayaran(),openShop(),localStorage.setItem("isiUcapan",!0),closeKehadrianModal(),localStorage.setItem("ucapanPopup-1952-Bapak%2520Budi",!0),isUserFilledPopupKehadiranForm()},error:function(a,e){var t="";t=0===a.status?"Not connect.\n Verify Network.":404==a.status?"Requested page not found. [404]":500==a.status?"Internal Server Error [500].":"parsererror"===e?"Requested JSON parse failed.":"timeout"===e?"Time out error.":"abort"===e?"Ajax request aborted.":"Uncaught Error.\n"+a.responseText,console.log("Kirim ucapan gagal: "+t),$("#tombol_kirim_2_popup").prop("disabled",!1),$("#konfir_nama_2_popup").prop("readonly",!1),$("#ucapan_2_popup").prop("readonly",!1),$("#tombol_kirim_2_popup").text("Kirim")}})}),$(document).on("click",".pagination a",function(a){a.preventDefault(),fetch_data($(this).attr("href").split("page=")[1])}),$(".awal").on("click",function(){opened()}),$("#c-acara-id a").click(function(a){if(!localStorage.getItem("open-maps-1952")){let e={_token:"4ZLQ9cLByQcLksBLlzyMM3e5oJHcPZQBsqzvEETy"};param&&(e.nama_tamu=param),$.ajax({url:"/count-open-maps/1952",method:"POST",data:e,success:function(a){localStorage.setItem("open-maps-1952",!0)},error:function(a,e,t){console.error("Gagal menghitung:",t)}})}}),whatsappCheck();let searchParams=new URLSearchParams(window.location.search);searchParams.has("kpd");let param=searchParams.get("kpd");var cekNama=localStorage.getItem("1952-nama");function scrollToMap(){document.querySelector(".map_id2").scrollIntoView({behavior:"smooth"})}function scrollToUcapan(){openKehadiranModal(),document.querySelector("#push_ucapan").scrollIntoView({behavior:"smooth"})}function scrollToGalery(){document.querySelector("#galery_id").scrollIntoView({behavior:"smooth"})}function scrollToHome(){document.querySelector("#page").scrollIntoView({behavior:"smooth"})}function closeModal(a){$(a).hide()}null==param||""==param||"null"==param?($("#konfir_nama_2").val(cekNama),$("#konfir_nama_2_popup").val(cekNama),$("#kpd").html(cekNama),$("#kpdn").html(cekNama),$("#kpd2").html(cekNama)):($("#konfir_nama_2").val(param),$("#konfir_nama_2_popup").val(param),$("#kpd").html(param),$("#kpdn").html(param),$("#kpd2").html(param)),$("#volume").click(function(){var a=$("#playAudio").prop("muted");$("#playAudio").prop("muted",!a),!0===a?$(this).css("background-color","#4970ea"):$(this).css("background-color","#4970ea00")});var kadoTerbuka=!1;function toConfirKado(){$("#kado-pilih").hide(),$("#kado-xendit").hide(),$("#kado-konfir").show(),window.dataLayer.push({event:"titip_kado_konfir"})}function closeKadoModal(){anime({targets:"#kado-modal-body",translateY:400,opacity:0,duration:500,easing:"easeInOutSine"}),setTimeout(function(){$("#kado-modal").hide()},500)}$("#header_kd_kembali").on("click",function(){$("#kado-pilih").show(),$("#kado-konfir").hide(),$("#kado-xendit").hide()});const rupiah=a=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(a);var totalKado=0,idKado=[],kadoItems=[];function addToCartKado(a,e,t){totalKado+=e,$("#idkado-"+a+"-add").hide(),$("#idkado-"+a+"-remove").show(),$(".total-kado-id").text(rupiah(totalKado)),totalKado>0?$("#konfirmasi-btn-kado").prop("disabled",!1):$("#konfirmasi-btn-kado").prop("disabled",!0),idKado.push(a),kadoItems.push({id:a,item_name:t.nama_produk,item_id:t.nama_produk.replace(/\s/g,""),price:t.harga_produk,item_brand:"",item_category:"Titip Kado",item_list_name:"Kado"}),$("#kado-id-send").val(idKado)}function removeFromCartKado(a,e){totalKado-=e,$("#idkado-"+a+"-add").show(),$("#idkado-"+a+"-remove").hide(),$(".total-kado-id").text(rupiah(totalKado)),totalKado>0?$("#konfirmasi-btn-kado").prop("disabled",!1):$("#konfirmasi-btn-kado").prop("disabled",!0);var t=idKado.indexOf(a);-1!==t&&(idKado.splice(t,1),kadoItems.splice(t,1)),$("#kado-id-send").val(idKado)}var uuidKado="";function onYouTubeIframeAPIReady(){var a;a=new YT.Player("youtube-video",{events:{onReady:onPlayerReady}})}function onPlayerReady(a){var e=a.target,t=$("#youtube-video").offset().top,n=!1;$(window).on("scroll",function(){var a=$(this).scrollTop(),i=t-$(window).height()+600;a>=i&&!n&&(e.playVideo(),n=!0,console.log("PLAY VIDEONYAA"),isPaused=!0,$("#menu_auto_scroll").css("background-color","transparent"),$(".notif_scroll").hide(),$("#playAudio").prop("muted",!0),$(this).css("background-color","#4970ea00"))})}function calculateScrollPercentage(){let a=$(window).scrollTop(),e=$(window).height(),t=$(document).height();return a/(t-e)*100}function closeKehadrianModal(){anime({targets:"#kehadiran-modal-body",translateY:400,opacity:0,duration:500,easing:"easeInOutSine"}),setTimeout(function(){$("#menu-kehadiran-bawah").css("opacity",0),$("#menu-kehadiran-bawah").css("transform","scale(2.5)"),anime({targets:"#menu-kehadiran-bawah",scale:1,opacity:1,duration:1e3,easing:"easeInOutSine"})},400),setTimeout(function(){$("#kehadiran-modal").hide()},500)}function openKehadiranModal(){}function closeAmplopModal(){anime({targets:"#amplop-modal-body",translateY:400,opacity:0,duration:500,easing:"easeInOutSine"}),setTimeout(function(){$("#amplop-modal").hide()},500)}function openAmplopModal(){$("#amplop-modal").show(),anime({targets:"#amplop-modal-body",translateY:0,opacity:1,duration:500,easing:"easeInOutSine"}),console.log("open modal")}function closeGiftModal(){anime({targets:"#gift-modal-body",translateY:400,opacity:0,duration:500,easing:"easeInOutSine"}),setTimeout(function(){$("#gift-modal").hide()},500)}function openGiftModal(){$("#gift-modal").show(),anime({targets:"#gift-modal-body",translateY:0,opacity:1,duration:500,easing:"easeInOutSine"}),console.log("open modal"),window.dataLayer.push({event:"gift_list_view"})}$("#submit-kado").submit(function(){return $.ajax({url:$(this).attr("action"),data:$(this).serialize(),type:$(this).attr("method"),dataType:"html",beforeSend:function(){$("input").attr("disabled",!0),$("button").attr("disabled",!0),$("#btn-pembayaran-kado").html("Memproses ...")},complete:function(){$("input").attr("disabled",!1),$("button").attr("disabled",!1),$("#btn-pembayaran-kado").html("CHECKOUT")},success:function(a){let e=1;kadoItems=kadoItems.map(a=>{let{id:t,...n}=a;return{...n,index:e++}}),window.dataLayer.push({event:"purchase",ecommerce:{transaction_id:"T_"+new Date().getTime()+Math.floor(1e3*Math.random()),currencyCode:"IDR",currency:"IDR",affiliation:"",value:totalKado,tax:0,shipping:0,coupon:"",items:kadoItems}});var t=JSON.parse(a);uuidKado=t.uuid,0!=a&&($("#kado-pilih").hide(),$("#kado-konfir").hide(),$("#kado-xendit").show(),frame='<iframe style="height: 100%" src="'+t.url+'" height="auto" width="100%" title="Iframe Example"></iframe>',$("#frame-xendit-kado").html(frame),setTimeout(function(){$("#btn-tracking-kado").text("Lihat Tracking Kado")},5e3)),window.dataLayer.push({event:"titip_kado_submit"})}}),!1}),$(window).scroll(function(){calculateScrollPercentage()>=60&&(localStorage.getItem("isiUcapan_1952")||openKehadiranModal(),$(window).off("scroll"))});var idGift="",koinGift="",imgGift="";function addToCartGift(a,e,t){idGift=a,koinGift=e,imgGift=t,$(".grid-item-gift").removeClass("selected-gift"),$(".btn_gift_item").removeClass("btn_gift_item_selec"),$(".btn_gift_item").text("Select"),$("#btn_sel_gift_"+a).text("Selected"),$("#list_gift_"+a).addClass("selected-gift"),$("#btn_sel_gift_"+a).addClass("btn_gift_item_selec"),$("#total_koin_gift").text(e),$("#konfirmasi-btn-gift").prop("disabled",!1),$("#confirm-gift-img").prop("src",t),$("#confirm-koin-id").text(e),$(".total-gift-id").text(rupiah(1500*e)),$("#gift-id-send").val(a)}function toConfirmGift(){window.dataLayer.push({event:"gift_konfir"}),anime({targets:"#div-list-gift",translateX:-200,opacity:0,duration:200,easing:"easeInOutSine"}),setTimeout(function(){anime({targets:"#div-confirm-gift",translateX:0,opacity:1,duration:200,easing:"easeInOutSine"}),$("#gift-konfir").show()},100),setTimeout(function(){$("#gift-pilih").hide(),$("#gift-xendit").hide()},200)}function toListGift(){anime({targets:"#div-confirm-gift",translateX:200,opacity:0,duration:200,easing:"easeInOutSine"}),setTimeout(function(){anime({targets:"#div-list-gift",translateX:0,opacity:1,duration:200,easing:"easeInOutSine"}),$("#gift-pilih").show()},100),setTimeout(function(){$("#gift-konfir").hide(),$("#gift-xendit").hide()},200)}var uuidGift="";function reloadGift(){document.querySelector("#box_ucapan").scrollIntoView({behavior:"smooth"}),loadUcapan(),closeGiftModal()}function openEmbed(a){$("#embed-info").empty(),$("#embed-info").html('<iframe src="'+a+'" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'),openEditModal("info")}function embedLink(a){$("#embed-link").empty(),$("#embed-link").html('<iframe src="'+a+'" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>'),openEditModal("embed"),$("#embed-link iframe").on("load",function(){$("#loader").hide(),$("#loader-container").hide()}),$("#loader").show(),$("#loader-container").show()}function saveLink(){var a="2025";window.open("https://calendar.google.com/calendar/u/0/r/eventedit?text=The Wedding Of Ayu Dan Ihza&dates="+a+"0304T080000/"+a+"0304T090000","_blank")}$("#submit-gift").submit(function(){return $.ajax({url:$(this).attr("action"),data:$(this).serialize(),type:$(this).attr("method"),dataType:"html",beforeSend:function(){$("input").attr("disabled",!0),$("button").attr("disabled",!0),$("#btn-pembayaran-gift").html("Memproses ...")},complete:function(){$("input").attr("disabled",!1),$("button").attr("disabled",!1),$("#btn-pembayaran-gift").html("CHECKOUT")},success:function(a){var e=JSON.parse(a);0!=a&&($("#gift-pilih").hide(),$("#gift-konfir").hide(),$("#gift-xendit").show(),frame='<iframe style="height: 100%" src="'+e.url+'" height="auto" width="100%" title="Iframe Example"></iframe>',$("#frame-xendit-gift").html(frame),setTimeout(function(){$("#btn-tracking-gift").text("Selesai")},5e3)),window.dataLayer.push({event:"gift_submit"})}}),!1}),window._mfq=window._mfq||[],window._mfq.push(["setVariable","paket","3"]),document.querySelector("#fh5co-gallery-list")&&$("#fh5co-gallery-list").magnificPopup({delegate:"a.image-popup",type:"image",mainClass:"mfp-with-zoom mfp-img-mobile",tLoading:"Loading image",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},zoom:{enabled:!0,duration:300,opener:function(a){return a.find(".case-studies-summary")}}}),document.querySelector("#galleryGrid")&&$("#galleryGrid").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}}}),$("#push_ucapan .form-control").attr("style","color: #ffffff !important; border-bottom: 2px solid #0f0097 !important; background: #FFFFFF1F !important; border: 0px; border-radius: 6px !important; height: 3em !important;"),$("#form_ucapan .form-control").attr("style","color: #ffffff !important; border-bottom: 2px solid #0f0097 !important; background: #FFFFFF1F !important; border: 0px; border-radius: 6px !important; height: 3em !important;"),$(".box-ucapan-wrapper").remove(),AOS.init({disable:!0}),$("#head_buat").hide();var like=localStorage.getItem("like-1952"),likeEl=document.getElementById("tt-love");function toggleLike(){var a=document.getElementById("tt-love");"red"===a.style.color?(a.style.color="white",localStorage.setItem("like-1952",0)):(localStorage.setItem("like-1952",1),a.style.color="red")}function saveLink(){var a="2025";window.open("https://calendar.google.com/calendar/u/0/r/eventedit?text=The Wedding Of Ayu Dan Ihza&dates="+a+"0304T080000/"+a+"0304T090000","_blank")}function doAnimation(a){switch(a){case"mn-opening":console.log("index ke opening: "+a),kembali();break;case"mn-salam":kembali(),console.log("index ke salam: "+a);break;case"mn-doa":kembali(),console.log("index ke doa: "+a);break;case"mn-mempelai":mempelaiMove(),console.log("index ke mempelai: "+a);break;case"mn-acara":console.log("index ke acara: "+a);break;case"mn-map":console.log("index ke map: "+a);break;case"mn-rundown":console.log("index ke rundawn: "+a);break;case"mn-pengumuman":console.log("index ke pengumuman: "+a);break;case"mn-story":case"mn-video":case"mn-galery":case"mn-penutup":console.log("index ke video: "+a);break;case"mn-rsvp":console.log("index ke rsvp: "+a);break;case"mn-gift":console.log("index ke gift: "+a);break;case"mn-terimakasih":console.log("index ke terimaksih: "+a)}}function mempelaiMove(){setTimeout(function(){anime({targets:"#burung-move",translateX:-300,translateY:-80,scaleX:1.5,scaleY:1.5,opacity:1,duration:2e3,easing:"easeInOutQuad"})},2e3)}