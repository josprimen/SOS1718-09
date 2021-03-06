/* global angular */

angular
    .module("ManagerApp", ["ngRoute"])
    .config(function ($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl: "oldindex.html"
            })
            .when("/analytics",{
                templateUrl: "analytics.html",
                controller: "ViewCtrlFull"
            })
            .when("/about",{
                templateUrl: "about.html"
            })
            .when("/integrations",{
                templateUrl: "integrations.html"
            })
            
            .when("/students-an/robot",{
                templateUrl: "studentRobot.html",
                controller: "studentRobotCtrl"
            })
            .when("/students-an/bike",{
                templateUrl: "studentBike.html",
                controller: "studentBikeCtrl"
            })
            .when("/students-an/meme",{
                templateUrl: "studentMeme.html",
                controller: "studentMemeCtrl"
            })
            .when("/students-an/imgur",{
                templateUrl: "studentOauthImgur.html",
            })
            .when("/students-an/imgurlogin",{
                templateUrl: "studentImgur.html",
                controller: "studentImgurCtrl"
            })
            .when("/students-an/imgursecure",{
                templateUrl: "studentImgurSecure.html",
                controller: "studentImgurSecureCtrl"
            })
            .when("/students-an",{
                templateUrl: "studentList.html",
                controller: "studentListCtrl"
            })
            .when("/students-an/stadistics",{
                templateUrl: "studentView.html",
                controller: "studentViewCtrl"
            })
            .when("/students-an/:province/:year/:gender",{
                templateUrl: "studentEdit.html",
                controller: "studentEditCtrl"

            }).when("/students-an/search",{
                templateUrl: "studentSearch.html",
                controller: "studentSearchCtrl"
                
            }).when("/students-an/partner",{
                templateUrl: "studentPartner.html",
                controller: "studentPartnerCtrl"
                
            })
            
            
             .when("/divorces-an",{
                templateUrl: "divorceList.html",
                controller: "divorceListCtrl"
            })
            .when("/divorces-an/:province/:year/",{
                templateUrl: "divorceEdit.html",
                controller: "divorceEditCtrl"
            })
            
            .when("/divorces-an/view",{
                templateUrl: "divorceView.html",
                controller: "divorceViewtCtrl"
            })
            .when("/divorces-an/shared",{
                templateUrl: "divorceShared.html",
                controller: "divorceSharedCtrl"
            })
            .when("/divorces-an/flickr",{
                templateUrl: "divorceExterna.html",
                controller: "divorceExterna"
            })
            .when("/divorces-an/twitter",{
                templateUrl: "divorceTwitter.html",
                controller: "divorceTwitter"
            })
            .when("/divorces-an/ine",{
                templateUrl: "divorceINE.html",
                controller: "divorceINE"
            })
            .when("/divorces-an/eurostats",{
                templateUrl: "divorceEuro.html",
                controller: "divorceEuro"
            })
            
            
            .when("/crimes-an",{
                templateUrl: "listCrimes.html",
                controller: "ListCtrl"
            })
            .when("/crimes-an/:province/:year/:gender",{
                templateUrl: "editCrimes.html",
                controller: "EditCtrl"
            })
            .when("/crimesView",{
                templateUrl: "crimesView.html",
                controller: "ViewCtrl"
            })
            .when("/crimesIntegration",{
                templateUrl: "crimesIntegration.html",
                controller: "ViewCtrl4"
            })
            .when("/crimesExternaNasa",{
                templateUrl: "crimesExternaNasa.html",
                controller: "ViewCtrlNasa"
            })
            .when("/crimesExternaSoundCloud",{
                templateUrl: "crimesExternaSoundCloud.html",
                controller: "ViewCtrlSoundCloud"
            })
            .when("/crimesExternaPokemon",{
                templateUrl: "crimesExternaPokemon.html",
                controller: "ViewCtrlPokemon"
            }).when("/crimesExternaStarWars",{
                templateUrl: "crimesExternaStarWars.html",
                controller: "ViewCtrlStarWars"
            });
    });
