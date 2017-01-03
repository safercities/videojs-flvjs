# FLV plugin for video.js using flv.js
Plays FLV with [video.js](https://github.com/videojs/video.js) by transmuxing FLV (either live or VoD) to MP4 and using MSE, using [Bilibili's flv.js](https://github.com/Bilibili/flv.js) tech. 

This plugin adds a source handler for flv files, as well as HTTP/Websockets for streaming live FLV streams. For more information, have a look below at the options

## Installation 
### NPM
To install `videojs-flvjs` with npm run

```bash
npm install --save securogroup/videojs-flvjs
```

## Getting Started
Get a copy of [videojs-flvjs](#installation) and include it in your page along with video.js (this shows the live websocket implementation):

```html
<video id=player width=600 height=300 class="video-js vjs-default-skin" controls>
  <source src="ws://example.com/live/video.flv" type="video/flv">
</video>
<script src="video.js"></script>
<script src="videojs-flvjs.js"></script>
<script>
  var player = videojs('#player');
</script>
```

## Options
flv.js is [very configurable](https://github.com/Bilibili/flv.js/blob/master/docs/api.md), you may pass in an options object to the source handler at player initialization. You can pass in options just like you would for other parts of video.js:

``` html
<video id=player width=600 height=300 class="video-js vjs-default-skin" controls>
  <source src="ws://example.com/live/video.flv" type="video/flv">
</video>
<script src="video.js"></script>
<script src="videojs-flvjs.js"></script>
<script>
    var player = videojs('video', {
        autoplay: true,
        html5: {
            flvjsConfig: {
                isLive: true,
                enableStashBuffer: false
            }
        }
    });
</script>
```

## Thanks
Thanks to the videojs-contrib-hls.js plugin for the inspiration on how to write a custom tech. This repo is modled off theirs.