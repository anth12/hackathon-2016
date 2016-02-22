App.service('AchievementService', function (NotificationService) {
        

    var achievementService = {

        render: function(achievement) {
            
            if(achievement != null){

                NotificationService.achievement(achievement.name, achievement.description);
            }

        }
    }

    return achievementService;
});