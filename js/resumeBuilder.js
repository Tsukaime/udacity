var bio = {
    "name" : "Arend Zijdenbos",
    "role" : "Web Designer",
    "welcomeMessage" : "This is my welcome message.",
    "contacts" : {
        "mobile" : "+316-81946786",
        "email" : "arendzijdenbos@hotmail.com",
        "github" : "wwww.github.com/tsukaime/udacity",
        "blog" : "notasite.com",
        "twitter" : "@Hscoached",
        "location" : "Netherlands"
    },
    "skills" : ["Gaming", "Poker",  "Web Design"],
    "bioPic" : "http://i.imgur.com/k7D0qlH.jpg",
    "display" : function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedPic);
        $("#header").append(formattedMessage);
        $("#header").append(HTMLskillsStart);

        var topContactsArray = [
            formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedBlog, formattedLocation
        ];
        for (var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
        for (var x in topContactsArray) {
            $("#topContacts").append(topContactsArray[x]);
            $("#footerContacts").append(topContactsArray[x]);
        }
    }
};
var work = {
    "jobs" : [{
           "employer" : "free Agent",
           "title" : "video Game Coach",
           "location" : "Netherlands",
           "dates" : "2015-current",
           "description" : "Coaching people in videogames like League of legends, Hearthstone and online poker"
        }],
        "display" : function() {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs.location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs.dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs.description);

        var workEntry = $("#workExperience").append(HTMLworkStart);
        $(".work-entry").append(formattedWorkTitle);
        $(".work-entry").append(formattedWorkLocation);
        $(".work-entry").append(formattedWorkDates);
        $(".work-entry").append(formattedWorkDescription);
    }
};
var project = {
        "projects" : {
            "title" : "portfoliowebsite",
            "dates" : "2015-2016",
            "description" : "My first website with the first version of my Portfoliowebsite",
            "image" : ["http://i.imgur.com/w0cVC9c.png", "http://i.imgur.com/IPNttSA.png", "http://i.imgur.com/1HUzepe.png"],
              },
        "display" : function() {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects.description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projects.image[0]);
        var formattedProjectImage1 = HTMLprojectImage.replace("%data%", project.projects.image[1]);
        var formattedProjectImage2 = HTMLprojectImage.replace("%data%", project.projects.image[2]);

        var projectEntry = $("#projects").append(HTMLprojectStart);
        $(".project-entry").append(formattedProjectTitle);
        $(".project-entry").append(formattedProjectDates);
        $(".project-entry").append(formattedProjectDescription);
        $(".project-entry").append(formattedProjectImage);
        $(".project-entry").append(formattedProjectImage1);
        $(".project-entry").append(formattedProjectImage2);
        }
    };
    var education = {
    "schools" : {
        "name" : "Het Lyceum Vos and Udacity",
        "location" : "Netherlands",
        "degree" : "Havo",
        "major" : "NotArealMajor",
        "dates" : "2015-2016",
    },
    "onlineClasses" : {
        "title" : ["Full-stack Web Developer", "Front-End Web Developer"],
        "school" : "Udacity",
        "dates" : "2016",
        "url" : "www.udacity.com"
        },
        "display" : function() {
            var formattedSchoolsName = HTMLschoolName.replace("%data%", education.schools.name);
            var formattedSchoolsLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
            var formattedSchoolsDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
            var formattedSchoolsMajor = HTMLschoolMajor.replace("%data%", education.schools.major);
            var formattedSchoolsDates = HTMLschoolDates.replace("%data%", education.schools.dates);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses.dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineClasses.url);

            var educationEntry =  $("#education").append(HTMLschoolStart)
            $(".education-entry").append(formattedSchoolsName);
            $(".education-entry").append(formattedSchoolsDegree);
            $(".education-entry").append(formattedSchoolsDates);
            $(".education-entry").append(formattedSchoolsLocation);
            $(".education-entry").append(formattedSchoolsMajor);
            $(".education-entry").append(formattedOnlineTitle);
            $(".education-entry").append(formattedOnlineSchool);
            $(".education-entry").append(formattedOnlineDates);
            $(".education-entry").append(formattedOnlineUrl);
        }
    };
    $("#mapDiv").append(googleMap);
bio.display();
education.display();
work.display();
project.display();
       