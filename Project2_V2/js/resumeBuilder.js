var bio = {

	"name" : "Carmen Coelho",
	"role" : "Design Engineer",
	"contacts": {
		"mobile" :"201-707-8158",
		"email" : "cc7172@att.com",
		"github" : "ccoelho1",
		"twitter" : "@ccoelho1",
		"location" : "New Jersey"
	},
	"welcomeMessage" : "Welcome to my Resume",
	"skills" : ["engineering", "programming", "front-end web developer", "management"],
	"biopic" : "images/fry.jpg",

"display" : function ( ){
       var formattedName = HTMLheaderName.replace("%data%",bio.name);
       var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
       var formattedPicture = HTMLbioPic.replace("%data%",bio.biopic);
       var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
       var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
       var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
       var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
       var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
       var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
       
       $("#header").prepend(formattedRole);
       $("#header").prepend(formattedName);
       $("#header").append(formattedPicture);
       $("#topContacts").append(formattedMobile);
       $("#topContacts").append(formattedEmail);
       $("#topContacts").append(formattedGithub);
       $("#topContacts").append(formattedTwitter);
       $("#topContacts").append(formattedLocation);
       $("#footerContacts").append(formattedMobile);
       $("#footerContacts").append(formattedEmail);
       $("#footerContacts").append(formattedGithub);
       $("#footerContacts").append(formattedTwitter);
       $("#footerContacts").append(formattedLocation);
       $("#header").append(formattedWelcomeMsg); 
       $("#header").append(HTMLskillsStart);
       var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
       $("#header").append(formattedSkills);
       var formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
       $("#header").append(formattedSkills);
       var formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
       $("#header").append(formattedSkills);
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
       $("#header").append(formattedSkills); 
       
    } 
  };  
  bio.display();	

var education = {
	"schools" : [
	{ 
		"name" : "Stevens institute of Technology",
		"location" : "Hoboken, NJ, US",
		"degree" : "Masters",
		"major" : ["Telecommunications"],
		"dates"	: 2001
},
{
	    "name" : "Rutgers University",
		"location" : "Newark, NJ, US",
		"degree" : "Bachelors",
		"major" : ["Management"],
		"dates"	: 1996
}
	],
	"onlineClasses": [
	{
		"title" : "Javascript Crash Course",
		"school" : "Udacity",
		"dates" : "February 2015",
		"url" : "http://www.udacity.com/course/ud804",
},
{

		"title" : "Intro to HTML and CSS ",
		"school" : "Udacity",
		"dates" : "January 2015",
		"url" : "https://www.udacity.com/course/ud304",
}
]
};
education.display = function() { for(var school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
	var formattedNameDegree = formattedName + formattedDegree;
	$(".education-entry:last").append (formattedNameDegree);

	var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
	$(".education-entry:last").append (formattedDates);

	var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
	$(".education-entry:last").append (formattedLocation);

	var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
	$(".education-entry:last").append (formattedMajor);
}
$("#education").append(HTMLonlineClasses);
for (var onlineClass in education.onlineClasses) { 
	$("#education").append(HTMLschoolStart);

	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
	var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
	$(".education-entry:last").append(formattedonlineTitleSchool);

	var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
	$(".education-entry:last").append(formattedonlineDates);

	var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
	$(".education-entry:last").append(formattedonlineURL);
}}
education.display();

 
var work = {
	"jobs": [
	{
		"employer" : "at&t",
		"title" : "Network Design Engineer",
		"location" : "New Jersey",
		"dates" : "June 2010 - Present",
		"description" : "Design and maintain all networks in green status.  Work continuously to improve the network infrastructure from a cost and performance perspective.  Interact with other engineering departments to address traffic forecast issues in a proactive manner. Perform audits on designs as necessary to make sure designs are optimal. Monitor all KPIs."
},
{
		"employer" : "at&t",
		"title" : "Transport Engineer",
		"location" : "New Jersey",
		"dates" : "June 2001 - May 2009",
		"description" : "Launched 8 multiple types of switches (TDMA, GSM, SONUS, UMTS (PMGWs)) and made sure all requirements were met for trunking E911, Voice mail, Calea, Direct Connects, 8YY, Ancillary, 2A, 2B, PSTN and IMTs. Designed 18 RNC’s (5200 & 9370s) on 6 MSN’s and did capacity management and planning for IUCS, IUR, and IUPS to address the demand and needs of our customers. Also, designed 33 BSC’s and did capacity management and planning on Aters and SS7. Ordered thousands of IUB’s for our cell sites based on capacity & build forecasts and worked with various vendors to fulfill our build in a timely basis (Verizon, ALS, Fiber Tower, and Lightpath)."
},
{
		"employer" : "at&t",
		"title" : "Switch Technician",
		"location" : "New Jersey",
		"dates" : "April 1999 - May 2001",
		"description" : "Responsible for installation and repair of network facilities at the DS0, DS1, DS3, SS7, PRI, BRI level including digital cross connects at the Titan 5500 DACS.  Perform routine and preventive maintenance, repair, and troubleshooting.  Respond to off-hour equipment alarms service effecting interruptions. Interface with CLECs, ILECs, NOC and QAAG during testing, troubleshooting and turn-up. Updated internal and external customers on status of service requests as well as maintained site paperwork and logs of work performed."
}
]
};
work.display = function() { for(var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append (formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append (formattedDates);

	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append (formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append (formattedDescription);
}} 
work.display();

var projects = {	
	"projects": [
	{
		"title" : "Project 1",
		"dates" : "January 2015",
		"description" : "Duplicate a page mockup",
		"images": ["images/mug.png", 
					"images/graph.png"
				  ]
},
{
		"title" : "Project 2",
		"dates" : "February 2015",
		"description" : "Interactive resume",
		"images": ["images/fry.jpg",
		"			images/linegraph.jpg"
				  ]
}
]
};
projects.display = function() { for(var project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	$(".project-entry:last").append (formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	$(".project-entry:last").append (formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append (formattedDescription);

	if(projects.projects[project].images.length > 0) {
		for ( var image in projects.projects[project].images) {
	var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
	$(".project-entry:last").append (formattedImage);	
	}
}}};
projects.display();

//<div id=”mapDiv”>
$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks (x,y);

});