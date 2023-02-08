const dv1 = "http://media.developer.dolby.com/DolbyVision_Atmos/profile5_HLS/master.m3u8";
const dv2 = "https://ott.dolby.com/User/jxyu/PlayerTestSignal/HLS/Manifest/Holi_25fps_aac_dovi_1.m3u8";
const other = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
const src = dv1;
const video = document.querySelector('video');
const player = new Plyr(video ,{captions: {active:true, update: true, language:'en'}});

document.addEventListener('DOMContentLoaded',()=>{
    changeSource(src);
});

function changeSource(link){
    if (!Hls.isSupported()){
        video.src = link;
    }else{
        const hls = new Hls();
        hls.loadSource(link);
        hls.attachMedia(video);
        window.hls = hls;
    }
    window.player = player;
    player.player();
   
}
