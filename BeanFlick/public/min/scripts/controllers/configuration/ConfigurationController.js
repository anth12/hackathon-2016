App.controller("ConfigurationController",function(t,e,n,a,o,r){t.startGame=function(t){a.start(t).then(function(t){o.userGame=t.userGame,o.game=t.game,r.startGame(),history.pushState&&history.pushState(null,null,"/"+t.game.UrlCode)})};var l=io("/total-points");l.on("update",function(e){odometer.innerHTML=e,t.TotalLaunches=e,t.$apply()}),a.sumLaunches().then(function(t){odometer.innerHTML=t});var u=location.pathname.replace(/^\//,"");u.length>0&&/^[A-z0-9\-]*$/.test(u)&&n.getByUrl(u).then(function(e){null!=e&&t.startGame(e._id)})});