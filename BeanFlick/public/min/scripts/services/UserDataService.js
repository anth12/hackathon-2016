App.service("UserDataService",function(e,r){var s={currentUser:null,getCurrentUser:function(){var t=r.defer(),n=localStorage.getItem("SessionId");return null==n?e.post("/api/user/create").then(function(e){if(s.currentUser=e.data,s.currentUser.Sessions.length<0)throw Error("Invalid session");var r=s.currentUser.Sessions[s.currentUser.Sessions.length-1];localStorage.setItem("SessionId",r.ClientId),t.resolve(s.currentUser)}):e.get("/api/user/"+n).then(function(e){s.currentUser=e.data,t.resolve(s.currentUser)}),t.promise}};return s});