App.service("DrawService",function(t,e,o,h,a,i){function m(){c(),u(),v.drawImage(s.image,0,0,s.width,s.height),l(),v.drawImage(D,0,w),n(),v.drawImage(d.image,o.x-d.centerX,o.y-d.centerY,d.width,d.height),window.requestAnimationFrame(function(){console.log("logging"),m()})}function n(){v.beginPath(),v.rect(0,e.height-a.throwAreaHeight,e.width,a.throwAreaHeight),v.fillStyle="#d74680",v.fill()}function u(){0>=w-100&&a.mouthClosed?w+=a.mouthSpeed:(a.mouthClosed=!1,w-=a.mouthSpeed,0>=w&&(a.mouthClosed=!0)),o.mouthOpening=w}function r(){y.clearRect(0,0,v.width,v.height),y.beginPath(),y.moveTo(a.mouthData.mouthLeft.x,a.mouthData.mouthLeft.y),y.lineTo(a.mouthData.mouthRight.x,a.mouthData.mouthRight.y),y.lineTo(a.mouthData.mouthRight.x,a.mouthData.mouthRight.y+100),y.lineTo(a.mouthData.mouthLeft.x,a.mouthData.mouthLeft.y+100-(a.mouthData.mouthLeft.y-a.mouthData.mouthRight.y)),y.closePath(),y.clip(),y.drawImage(s.image,0,0)}function l(){v.beginPath(),v.fillStyle="black",v.moveTo(a.mouthData.mouthLeft.x,a.mouthData.mouthLeft.y),v.lineTo(a.mouthData.mouthRight.x,a.mouthData.mouthRight.y),v.lineTo(a.mouthData.mouthRight.x,a.mouthData.mouthRight.y+90),v.lineTo(a.mouthData.mouthLeft.x,a.mouthData.mouthLeft.y+90-(a.mouthData.mouthLeft.y-a.mouthData.mouthRight.y)),v.closePath(),v.fill()}function c(){e.canvasContext.clearRect(0,0,e.width,e.height)}var g,d,s,f,w,v,D,y;this.draw=function(){d=h.throwable,s=h.face,f=(e.width-s.width)/2,v=e.canvasContext,D=document.createElement("canvas"),D.width=s.width,D.height=s.height,y=D.getContext("2d"),w=0,r(),m()},this.movement=function(){var m=t.defer();a.powerSetting;return g=setInterval(function(){var t=i.scored();t&&(clearInterval(g),m.resolve({stop:!0,scored:!0}));var a=i.friction();a&&(clearInterval(g),m.resolve({stop:!0,scored:!1})),o.y-h.throwable.centerY>0&&o.y+h.throwable.centerY<e.height?o.y-=o.movementData.speedY/300:(clearInterval(g),m.resolve({stop:!0,scored:!1})),o.x-h.throwable.centerX>0&&o.x+h.throwable.centerX<e.width?o.x+=o.movementData.speedX/300:(clearInterval(g),m.resolve({stop:!0,scored:!1}))}),m.promise}});