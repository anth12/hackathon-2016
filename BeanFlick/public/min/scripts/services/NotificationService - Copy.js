App.service("NotificationService",function(){var i={info:function(n,o){i._show("info","fa fa-info",n,o)},success:function(n,o){i._show("success","fa fa-trophy",n,o)},warning:function(n,o){i._show("warning","fa fa-exclamation-triangle",n,o)},error:function(n,o){i._show("error","fa fa-exclamation",n,o)},_show:function(i,n,o,t){function a(){$("#notification-"+e).addClass("is-hidden"),setTimeout(function(){$("#notification-"+e).remove()},500)}t=t||5e3;var c=$(".notification-wrapper");c.length<1&&($("body").prepend('<div class="notification-wrapper"></div>'),c=$(".notification-wrapper"));var e=parseInt(1e4*Math.random());c.prepend('<div class="notification '+i+'" id="notification-'+e+'"></div>'),$("#notification-"+e).html('<div class="notification-icon"><i class="'+n+'"></i></div><div class="notification-body"><p>'+o+"</p></div></div>"),$("#notification-"+e).one("click",a),setTimeout(a,t)}};return i});