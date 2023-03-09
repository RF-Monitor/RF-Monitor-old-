const path = require('path');
const {app} = require('electron')
const storage = require('electron-localstorage');
const ipcRenderer = require('electron').ipcRenderer;
const ganhua = ["緊急地震慢報","反白很重要!","最大震度9級","雖然RF-monitor所有即時資訊功能都可以自由關閉，但也不要全部關掉啊","乾真大","やりたいこと最優先","有玩csgo的各位大佬快加我好友","兩大過兩小過兩警告",""];
storage.setStoragePath(path.join(__dirname, '../../../../RF-Monitor_config/config.json'));
//////////////此處有幹話
ganhua_i = Math.floor(Math.random()*(ganhua.length-1));
document.getElementById("ganhua").innerHTML=ganhua[ganhua_i]

function submit(){
    storage.setItem('userlat',document.querySelector("#lat").value);
    storage.setItem('userlon',document.querySelector("#lon").value);
    if(document.querySelector("#enable_gpu").checked){
        storage.setItem('enable_gpu',true);
        console.log(storage.getItem('enable_gpu'))
    }else{
        storage.setItem('enable_gpu',"false");
        console.log(storage.getItem('enable_gpu')) 
    }
    if(document.querySelector("#enable_autolaunch").checked){
        storage.setItem('enable_autolaunch',true);
    }else{
        storage.setItem('enable_autolaunch',"false");
    }
    if(document.querySelector("#minimize_to_tray").checked){
        storage.setItem('minimize_to_tray',true);
    }else{
        storage.setItem('minimize_to_tray',"false");
    }
    if(document.querySelector("#enable_window_popup").checked){
        storage.setItem('enable_window_popup',true);
    }else{
        storage.setItem('enable_window_popup',"false");
    }
    if(document.querySelector("#enable_weather").checked){
        storage.setItem('enable_weather',true);
    }else{
        storage.setItem('enable_weather',"false");
    }
    if(document.querySelector("#enable_ty").checked){
        storage.setItem('enable_typhoon',true);
    }else{
        storage.setItem('enable_typhoon',"false");
    }
    if(document.querySelector("#enable_ty_analysis").checked){
        storage.setItem('enable_ty_analysis',true);
    }else{
        storage.setItem('enable_ty_analysis',"false");
    }
    if(document.querySelector("#enable_tsunami").checked){
        storage.setItem('enable_tsunami',true);
    }else{
        storage.setItem('enable_tsunami',"false");
    }
    if(document.querySelector("#enable_warningArea").checked){
        storage.setItem('enable_warningArea',true);
    }else{
        storage.setItem('enable_warningArea',"false");
    }
    if(document.querySelector("#enable_PGA").checked){
        storage.setItem('enable_shindo',true);
    }else{
        storage.setItem('enable_shindo',"false");
    }
    if(document.querySelector("#PGA_warn_only").checked){
        storage.setItem('PGA_warn_only',true);
    }else{
        storage.setItem('PGA_warn_only',"false");
    }
    if(document.querySelector("#enable_notification").checked){
        storage.setItem('enable_notification',true);
    }else{
        storage.setItem('enable_notification',"false");
    }
    //////////////////////
    if(document.querySelector("#enable_int_1").checked){
        storage.setItem('enable_shindo_sounds_1',true);
    }else{
        storage.setItem('enable_shindo_sounds_1',"false");
    }
    if(document.querySelector("#enable_int_2").checked){
        storage.setItem('enable_shindo_sounds_2',true);
    }else{
        storage.setItem('enable_shindo_sounds_2',"false");
    }
    if(document.querySelector("#enable_int_3").checked){
        storage.setItem('enable_shindo_sounds_3',true);
    }else{
        storage.setItem('enable_shindo_sounds_3',"false");
    }
    if(document.querySelector("#enable_int_4").checked){
        storage.setItem('enable_shindo_sounds_4',true);
    }else{
        storage.setItem('enable_shindo_sounds_4',"false");
    }
    if(document.querySelector("#enable_int_5-").checked){
        storage.setItem('enable_shindo_sounds_5-',true);
    }else{
        storage.setItem('enable_shindo_sounds_5-',"false");
    }
    if(document.querySelector("#enable_int_5k").checked){
        storage.setItem('enable_shindo_sounds_5+',true);
    }else{
        storage.setItem('enable_shindo_sounds_5+',"false");
    }
    if(document.querySelector("#enable_int_6-").checked){
        storage.setItem('enable_shindo_sounds_6-',true);
    }else{
        storage.setItem('enable_shindo_sounds_6-',"false");
    }
    if(document.querySelector("#enable_int_6k").checked){
        storage.setItem('enable_shindo_sounds_6+',true);
    }else{
        storage.setItem('enable_shindo_sounds_6+',"false");
    }
    if(document.querySelector("#enable_int_7").checked){
        storage.setItem('enable_shindo_sounds_7',true);
    }else{
        storage.setItem('enable_shindo_sounds_7',"false");
    }

    //////////////////////
    storage.setItem("shindo_mode",document.querySelector("#station_select").value);
    if(document.querySelector("#enable_PGA_TREM").checked){
        storage.setItem('enable_shindo_TREM',true);
    }else{
        storage.setItem('enable_shindo_TREM',"false");
    }
    if(document.querySelector("#enable_jp_eew").checked){
        storage.setItem('enable_eew_jp',true);
    }else{
        storage.setItem('enable_eew_jp',"false");
    }
    if(document.querySelector("#enable_tw_eew").checked){
        storage.setItem('enable_eew_tw',true);
    }else{
        storage.setItem('enable_eew_tw',"false");
    }
    if(document.querySelector("#enable_eew_tw_read").checked){
        storage.setItem('enable_eew_tw_read',true);
    }else{
        storage.setItem('enable_eew_tw_read',"false");
    }
    storage.setItem('opacity',document.querySelector("#opacity").value);
    console.log(storage.getStoragePath());
    ipcRenderer.send('restart');
}
function cancel(){
    ipcRenderer.send('hideSetting');
}
//初始化設定

let enable_gpu = storage.getItem('enable_gpu');
let enable_autolaunch = storage.getItem('enable_autolaunch');
let minimize_to_tray = storage.getItem('minimize_to_tray');
let userlat = storage.getItem('userlat');
let userlon = storage.getItem('userlon');
let enable_window_popup = storage.getItem('enable_window_popup');
let enable_weather = storage.getItem('enable_weather');
let enable_typhoon = storage.getItem('enable_typhoon');
let enable_ty_analysis = storage.getItem('enable_ty_analysis');
let enable_tsunami = storage.getItem('enable_tsunami');
let enable_shindo = storage.getItem('enable_shindo');
let PGA_warn_only = storage.getItem('PGA_warn_only');
let enable_warningArea = storage.getItem("enable_warningArea");
let enable_notification = storage.getItem("enable_notification");
///////////震度音效/////////////
let enable_shindo_sounds_1 = storage.getItem('enable_shindo_sounds_1');
let enable_shindo_sounds_2 = storage.getItem('enable_shindo_sounds_2');
let enable_shindo_sounds_3 = storage.getItem('enable_shindo_sounds_3');
let enable_shindo_sounds_4 = storage.getItem('enable_shindo_sounds_4');
let enable_shindo_sounds_5j = storage.getItem('enable_shindo_sounds_5-');
let enable_shindo_sounds_5k = storage.getItem('enable_shindo_sounds_5+');
let enable_shindo_sounds_6j = storage.getItem('enable_shindo_sounds_6-');
let enable_shindo_sounds_6k = storage.getItem('enable_shindo_sounds_6+');
let enable_shindo_sounds_7 = storage.getItem('enable_shindo_sounds_7');
/////////////////////////////////
let shindo_mode = storage.getItem('shindo_mode');
let enable_shindo_TREM = storage.getItem('enable_shindo_TREM');
let enable_eew_jp = storage.getItem('enable_eew_jp');
let enable_eew_tw = storage.getItem('enable_eew_tw');
let enable_eew_tw_read = storage.getItem("enable_eew_tw_read");
let opacity = storage.getItem('opacity');



document.getElementById("lat").value = userlat;
document.getElementById("lon").value = userlon;
if(enable_gpu != "false"){
    document.getElementById("enable_gpu").checked = true;
}
if(enable_autolaunch != "false"){
    document.getElementById("enable_autolaunch").checked = true;
}
if(minimize_to_tray != "false"){
    document.getElementById("minimize_to_tray").checked = true;
}
if(enable_window_popup != "false"){
    document.getElementById("enable_window_popup").checked = true;
}
if(enable_weather != "false"){
    document.getElementById("enable_weather").checked = true;
}

if(enable_tsunami != "false"){
    document.getElementById("enable_tsunami").checked = true;
}
if(enable_typhoon != "false"){
    document.getElementById("enable_ty").checked = true;
}
if(enable_ty_analysis != "false"){
    document.getElementById("enable_ty_analysis").checked = true;
}
if(enable_shindo != "false"){
    document.getElementById("enable_PGA").checked = true;
}
if(PGA_warn_only != "false"){
    document.getElementById("PGA_warn_only").checked = true;
}
if(enable_warningArea != "false"){
    document.getElementById("enable_warningArea").checked = true;
}
if(enable_notification != "false"){
    document.getElementById("enable_notification").checked = true;
}
///////////震度音效/////////////
if(enable_shindo_sounds_1 != "false"){
    document.getElementById("enable_int_1").checked = true;
}
if(enable_shindo_sounds_2 != "false"){
    document.getElementById("enable_int_2").checked = true;
}
if(enable_shindo_sounds_3 != "false"){
    document.getElementById("enable_int_3").checked = true;
}
if(enable_shindo_sounds_4 != "false"){
    document.getElementById("enable_int_4").checked = true;
}
if(enable_shindo_sounds_5j != "false"){
    document.getElementById("enable_int_5-").checked = true;
}
if(enable_shindo_sounds_5k != "false"){
    document.getElementById("enable_int_5k").checked = true;
}
if(enable_shindo_sounds_6j != "false"){
    document.getElementById("enable_int_6-").checked = true;
}
if(enable_shindo_sounds_6k != "false"){
    document.getElementById("enable_int_6k").checked = true;
}
if(enable_shindo_sounds_7 != "false"){
    document.getElementById("enable_int_7").checked = true;
}
///////////////////////////////
if(shindo_mode == "shindo"){
    document.getElementById("station_select_shindo").selected = true;
}else if(shindo_mode == "pga"){
    document.getElementById("station_select_pga").selected = true;
}
if(enable_shindo_TREM != "false"){
    document.getElementById("enable_PGA_TREM").checked = true;
}
if(enable_eew_jp != "false"){
    document.getElementById("enable_jp_eew").checked = true;
}
if(enable_eew_tw != "false"){
    document.getElementById("enable_tw_eew").checked = true;
}
if(enable_eew_tw_read != "false"){
    document.getElementById("enable_eew_tw_read").checked = true;
}
if(opacity != null){
    document.getElementById("opacity").value = opacity;
}

function EEW_sim(){
    let EEWsim_magnitude = document.getElementById("EEWsim_magnitude").value;
    let EEWsim_depth = document.getElementById("EEWsim_depth").value;
    let EEWsim_lat = document.getElementById("EEWsim_lat").value;
    let EEWsim_lon = document.getElementById("EEWsim_lon").value;
    let time = "";
    let EEWsim_y = "";
    let EEWsim_m = "";
    let EEWsim_d = "";
    let EEWsim_H = "";
    let EEWsim_M = "";
    let EEWsim_S = "";
    if(document.getElementById("EEWsim_now").checked == true){
        EEWsim_y = document.getElementById("EEWsim_y").value;
        EEWsim_m = document.getElementById("EEWsim_m").value;
        EEWsim_d = document.getElementById("EEWsim_d").value;
        EEWsim_H = document.getElementById("EEWsim_H").value;
        EEWsim_M = document.getElementById("EEWsim_M").value;
        EEWsim_S = document.getElementById("EEWsim_S").value;
        time = new Date(Date.UTC(EEWsim_y,EEWsim_m,EEWsim_d,EEWsim_H,EEWsim_M,EEWsim_S));
    }else{
        let date = new Date(Date.now() + ntpoffset_);
        EEWsim_y = date.getFullYear(); 
		EEWsim_m = date.getMonth(); 
		EEWsim_d = date.getDate();
		EEWsim_H = date.getHours()
		EEWsim_M = date.getMinutes();
		EEWsim_S = date.getSeconds();
        time = Date.now().toString();
    }

}