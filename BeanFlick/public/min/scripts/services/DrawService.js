App.service("DrawService",function(e,t,a,r,o,h){function i(){n(),v.drawImage(s.image,0,0,s.width,s.height),o.mouthArea.y>=u-100&&o.mouthClosed?u+=o.mouthSpeed:(o.mouthClosed=!1,u-=o.mouthSpeed,o.mouthArea.y>=u&&(o.mouthClosed=!0)),v.beginPath(),v.rect(o.mouthArea.x,o.mouthArea.y,g,u),v.fillStyle="black",v.fill(),v.putImageData(f,d,u),v.drawImage(m.image,a.x-m.centerX,a.y-m.centerY,m.width,m.height),c=window.requestAnimationFrame(function(){i()})}function n(){t.canvasContext.clearRect(0,0,t.width,t.height)}var c,l,m,s,u,d,g,w,v,f;this.draw=function(){m=r.throwable,s=r.face,v=t.canvasContext,u=o.mouthArea.y,d=o.mouthArea.x,g=o.mouthArea.width,w=o.mouthArea.height,v.beginPath(),v.rect(o.mouthArea.x,o.mouthArea.y,g,u),v.fillStyle="black",v.fill(),v.drawImage(s.image,0,0,s.width,s.height),f=v.getImageData(d,u,g,w),u+=1,v.putImageData(f,d,u),v.drawImage(m.image,a.x-m.centerX,a.y-m.centerY,m.width,m.height),i()},this.clear=function(){n()},this.movement=function(){var i=e.defer();o.powerSetting;return l=setInterval(function(){var e=h.scored();e&&(clearInterval(l),i.resolve({stop:!0,scored:!0}));var o=h.friction();o&&(clearInterval(l),i.resolve({stop:!0,scored:!1})),a.y-r.throwable.centerY>0&&a.y+r.throwable.centerY<t.height?a.y-=a.movementData.speedY/300:(clearInterval(l),i.resolve({stop:!0,scored:!1})),a.x-r.throwable.centerX>0&&a.x+r.throwable.centerX<t.width?a.x+=a.movementData.speedX/300:(clearInterval(l),i.resolve({stop:!0,scored:!1}))}),i.promise}});