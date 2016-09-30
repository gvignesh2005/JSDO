/*global progress, $*/

var sso;

sso = {
    create: function (tokenURI, authenticationModel) {
        "use strict";
        
        return new progress.data.AuthenticationProvider(
            tokenURI,
            authenticationModel
        );
    },
    login: function (provider, username, password) {
        "use strict";
        
        var deferred = $.Deferred();
        
        provider.login(username, password)
            .then(function () {
                deferred.resolve(provider);
            }, function () {
                deferred.reject();
            });
            
        return deferred.promise();
    },
    logout: function (provider) {
        "use strict";
        
        var deferred = $.Deferred();
        
        provider.logout()
            .then(function () {
                deferred.resolve(provider);
            }, function () {
                deferred.reject();
            });
            
        return deferred.promise();
    },
    
};