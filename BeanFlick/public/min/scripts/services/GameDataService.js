App.service("GameDataService",function(e,r){var t={currentUser:null,getPopular:function(){var t=r.defer();return e.get("/api/game/popular").then(function(e){t.resolve(e.data)}),t.promise},get:function(t){var n=r.defer();return e.post("/api/game/"+t).then(function(e){n.resolve(e.data)}),n.promise}};return t});