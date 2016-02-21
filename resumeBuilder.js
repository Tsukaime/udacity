var bio = {
    "name" : "Arend Zijdenbos",
    "role" : "Web Designer",
    "welcomeMessage" : "This is my welcome message.",
    "contacts" : {
        "mobile" : "+316-8196786",
        "email" : "arendzijdenbos@hotmail.com",
        "github" : "wwww.github.com/tsukaime/udacity",
        "blog" : "-",
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
    }
}
var education = {
    "Schools" : {
        "name" : "Het Lyceum Vos and Udacity",
        "location" : "Netherlands and America",
        "degree" : "Havo",
        "majors" : "None",
        "dates" : "None",
        "url" : "www.udacity.com",
    },
    "onlineCourses" : {
        "Title" : ["Full-stack Web Developer", "Front-End Web Developer"],
        "School" : "Udacity",
        "Dates" : "2016",
        "url" : "www.udacity.com"
        },
    },
"display" : function() {

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
        var formattedSchoolMajors = HTMLschoolMajors.replace("%data%", education.schools.majors);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools.dates);
        var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", education.schools.url);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses.Dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses.Url);
    
var work = {
    "Jobs" : [
           "employer" : "Free Agent",
           "title" : "Video Game Coach",
           "location" : "Netherlands",
           "dates" : "2015-current",
           "description" : "Coaching people in videogames like League of legends, Hearthstone and online poker"
        ],
        "display" : function() {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs.location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs.dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs.description);
    }
}
var project = {
        "projects" : {
            "title" : "Portfoliowebsite",
            "dates" : "2015-2016",
            "description" : "My first website with the first version of my Portfoliowebsite",
            "images" : ["http://i.imgur.com/w0cVC9c.png", "http://i.imgur.com/IPNttSA.png", "http://i.imgur.com/1HUzepe.png"],
              },
        "display" : function() {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.projects.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects.description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.projects.image);
        }
    }
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedPic);
        $("#header").append(formattedMessage);
        $("#header").append(HTMLskillsStart);
        var topContactsArray = [
            formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedBlog, formattedLocation
        ];
        for (var x in topContactsArray) {
            $("#topContacts").append(topContactsArray[x]);
            $("#footerContacts").append(topContactsArray[x]);
        }
        for (var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
bio.display();
education.display();
work.display();
projects.display();