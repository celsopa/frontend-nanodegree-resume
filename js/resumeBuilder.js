var bio = {
    "name": "Celso Araújo",
    "role": "Lawyer | Scuba Instructor | Information Systems Student",
    "contacts": {
        "mobile": "+55 (82) 9 9117-8684",
        "email": "celsopa@msn.com",
        "github": "http://github.com/celsopa",
        "location": "Maceió-AL"
    },
    "bioPic": "images/me.jpg",
    "welcomeMessage": "Let me know what I can do for you!",
    "skill": ["Litigation experience", "Problem solving", "Organization / Management", "Teamwork", "Conflict Management",
        "Fluent in spanish", "Advanced English", "Programming", "Languages Python, \'C\', HTML, CSS and JavaScript"]
};

var work = {
    "jobs": [
        {
            "employer": "Araújo Advocacia e Consultoria Jurídica",
            "title": "Lawyer",
            "dates": "april/2014 - until now",
            "location" : "Maceió-AL",
            "description": "Represent clients in civil litigation and administratives legal proceedings, draw up legal documents, manage and advise clients on legal transactions. Practice in labor, consumer and social security law."
        },
        {
            "employer": "Let's Dive Mergulho e Aventura",
            "title": "Scuba Instructor",
            "dates": "april/2017 - april/2019",
            "location" : "Maceió-AL",
            "description": "Demonstrating safe scuba diving techniques, teaching students individually or in groups using discussions and demonstrations. Additional responsibilities include maintaining and transporting equipment, driving students to dive sites, stocking the boat appropriately with supplies and adhering to environmental protection procedures."
        },
        {
            "employer": "Lanzarote Non-Stop Divers",
            "title": "Scuba Instructor Trainee",
            "dates": "june/2018",
            "location" : "Lanzarote, Canary Island, Spain",
            "description": "Demonstrating safe scuba diving techniques, teaching students individually or in groups using discussions and demonstrations. Additional responsibilities include maintaining and transporting equipment, driving students to dive sites, stocking the boat appropriately with supplies and adhering to environmental protection procedures."
        },
        {
            "employer": "Maranhão & Nogueira Advogados Associados",
            "title": "Lawyer",
            "dates": "june/2012 - april/2014",
            "location" : "Maceió-AL",
            "description": "Specialized in Tax Law. Do research, conduct interviews and investigations and explain about local, state and federal tax laws to clients."
        }
    ]
};

var projects = {
    "project": [{
            "title": "Class Room Analyzer",
            "dates": "june/2019",
            "description": "Little project from 'Algorítmo e Lógica de Programação' discipline. The 'app' creates a simple file-database thats strores students data and analyze the student situation. Programming language: PYTHON",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": []
        },
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": []
        },

    ]
};


var education = {
    "schools": [{
            "name": "IFAL - Instituto Federal de Alagoas",
            "degree": "Bachelor",
            "majors": ["Science in Information Systems"],
            "dates": "february/2019 - december/2022",
            "location": "Maceió-AL",
            "url": "https://www2.ifal.edu.br/campus/site/campus_maceio"
        },
        {
            "name": "IBET - Instituto Brasileiro de Estudos Tributários",
            "degree": "Specialization",
            "majors": ["Tax Law"],
            "dates": "july/2012 - december/2014",
            "location": "Maceió-AL",
            "url": "https://www.ibet.com.br/"
        },
        {
            "name": "Faculdade SEUNE",
            "degree": "Bachelor",
            "majors": ["Law"],
            "dates": "july/2007 - june/2012",
            "location": "Maceió-AL",
            "url": "www.seune.edu.br"
        }
    ],
    "onlineCourses": [{
            "tittle": "Python Básico",
            "plataform": "Curso em Vídeo",
            "date": "2018",
            "url": ["https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6", "https://www.youtube.com/playlist?list=PLHz_AreHm4dk_nZHmxxf_J0WRAqy5Czye", "https://www.youtube.com/playlist?list=PLHz_AreHm4dksnH2jVTIVNviIMBVYyFnH"]
        },
        {
            "tittle": "JavaScript para iniciantes",
            "plataform": "Curso em Vídeo",
            "date": "2018",
            "url": "https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1"
        },
        {
            "tittle": "HTML5 e CSS3",
            "plataform": "Curso em Vídeo",
            "date": "2018",
            "url": "https://www.youtube.com/playlist?list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o"
        },
        {
            "tittle": "Responsive Web Design Fundamentals",
            "plataform": "Udacity",
            "date": "2019",
            "url": "https://classroom.udacity.com/courses/ud893"

        },
        {
            "tittle": "JavaScript Syntax",
            "plataform": "Udacity",
            "date": "2019",
            "url": "https://classroom.udacity.com/courses/ud804"

        },
        {
            "tittle": "Git e Contribuições para projeto open source",
            "plataform": "Udemy",
            "date": "2018",
            "url": "https://www.udemy.com/git-e-github/"
        }
    ]
};
if (bio.role){
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
}

if (bio.name){
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name))
}

if (bio.bioPic){
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic))
}

if (bio.welcomeMessage){
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage))
}

if (bio.contacts){
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}

if (bio.skill){
    $("#header").append(HTMLskillsStart);
    for (x in bio.skill){
        $("#skills").append(HTMLskills.replace("%data%", bio.skill[x]))
    }
}


work.display = function (){
    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart)
        if (work.jobs.hasOwnProperty(job)){
            var formattedHTMLorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
            var formattedHTMLWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
            var formattedEmployerTitle = formattedHTMLorkEmployer + formattedHTMLWorkTitle
            $(".work-entry:last").append(formattedEmployerTitle)
            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDate);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};


projects.display = function (){
    for (var pj in projects.project){
        $("#projects").append(HTMLprojectStart)
        if (projects.project.hasOwnProperty(pj) && projects.project[pj].title !== ""){
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[pj].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.project[pj].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[pj].description);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            if (projects.project[pj].images.length > 0){
                for (img in projects.project[pj].images){
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[pj].images[img]));    
                }
            }
        }
    }
};


education.display = function (){
    for (var edu in education.schools){
        $("#education").append(HTMLschoolStart);
        if (education.schools.hasOwnProperty(edu)){
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree); 
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last a").attr("href", education.schools[edu].url);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolLocation);
        }
    }
};

function inName(name){
    var nomes = name.trim().split(" ")
    var fName = nomes[0][0].toUpperCase() + nomes[0].slice(1)
    var lName = nomes[1].toUpperCase()
    formattedName = fName +" "+ lName
    return formattedName
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);





work.display();
projects.display();
education.display();