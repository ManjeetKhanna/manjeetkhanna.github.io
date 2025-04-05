var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+12136439862'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>+1 (213)643-9862</label></div> </a> <a href='mailto:manjeetkhanna04@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/ManjeetKhanna'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a href='https://www.linkedin.com/in/manjeet-khanna-1853711a5' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
// var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Manjeet Resume.pdf</label></div><a href='assets/Manjeet Khanna&#39;s Resume.pdf' download='Manjeet_Khanna_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2742814122!2d-118.41173209259346!3d34.07487027923257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64d5b7f8e67%3A0x14cdca4fa4b65d7e!2sMonterey%20Park%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1698359294300!5m2!1sen!2sus' class='map'></iframe></div><label class='add'><address>Monterey Park,<br>Los Angeles,<br>United States of America</address>";

var repliesfForHowAreYou = ["I'm fine.", "I'm good. And yourself?", "Not bad. How are you?", "I'm doing well, and you?", "Good, how about you?", "I'm great!", "Everything is fine when you are around.", "The best I can be. I hope you are at your best too.", "I'm still learning and eagerly waiting to grasp new things."];
var repliesForHello = ["Hello there!", "Hey!", "Hola!", "Nice to meet you!", "I'm here!", "Hey! How's it going?", "What's up?", "Hey! What a pleasant surprise!"];
var repliesForBye = ["Catch you on the flip side!", "Bye-bye, butterfly.", "See you soon!", "Catch you later!", "Bye for now", "See you on the internet!"];
var repliesfForLove = ["I get that a lot!", "You are day-dreaming again!", "I love You........Tube! LOL!", "I love you too!", "You are not my type!", "❤️"]
var repliesForCommandUnknown = ["Hey I couldn't catch you....<br>Send 'info' to know more about usage.", "I didn't get it.", "Please can you repeat it?", "I'm still learning...please use approriate keywords in your phrase.", "I'm still working on it.<br>"];
var repliesForVoiceAssistants = ["Yes! I know her.", "Of-cource! Who don't know her?", "I'm teching lessions from her!", "She is my BFF!", "My childhood friend!"];
function getRandom(arrayOfReplies) {
    var sizeOfArray = arrayOfReplies.length;
    return arrayOfReplies[Math.floor(Math.random() * sizeOfArray)];
}

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Manjeet Naresh Khanna,</a></span> a developer on a mission to innovate, automate, and elevate the way we interact with technology.<br><br>Crafting the future with smart code, cloud expertise, and innovative solutions.<br><br>Ready to explore? Type <span class='bold'>'info'</span> and I'll show you the way!<br>");
            }, 2000);
            break;
        case "info":
            sendTextMessage("<span class='sk'>Want to know more? Type a keyword below: <br>e.g<br><span class='bold'>'about'</span> - Learn more about me<br><span class='bold'>'skills'</span> - See my skills and expertise<br><span class='bold'>'experience'</span> - Explore my professional experience<br><span class='bold'>'certifications'</span> - View my certifications<br><span class='bold'>'projects'</span> - Check out my projects<br><span class='bold'>'address'</span> - Get my address details<br><span class='bold'>'contact'</span> - Find ways to contact me<br><span class='bold'>'clear'</span> - Clear the conversation</span>");
            break;            
        // case "resume":
        //     sendTextMessage(resumeString);
        //     break;
        case "skills":
            sendTextMessage("<span class='sk'>Hi there! Here's a quick look at my tech skills:<br><br>💻 Languages:<br><span class='bold'>Python, Java, C++, C, JavaScript, SQL<br></span><br><br>🗄️ Databases:<br><span class='bold'>PostgreSQL, MySQL, MongoDB, Firestore<br></span><br><br>☁️ Cloud & DevOps:<br><span class='bold'>GCP, AWS, Microsoft Azure, Firebase, Azure DevOps, Docker, Kubernetes, Jenkins, GitHub<br></span><br><br>🛠️ Frameworks & Tools:<br><span class='bold'>Node.js, Vue.js, React.js, VS Code, Jira, Git, Postman, Jupyter Notebook<br></span><br><br>📊 Data Visualization:<br><span class='bold'>Microsoft PowerBI, Tableau<br></span><br>");
            break;

        case "education":
            sendTextMessage("🎓 Master’s in Computer Science<br>California State University, Los Angeles<br>Graduation: May 2025 | GPA: 3.7/4.0<br><br>Key Courses: Design & Analysis of Algorithms, Advanced Topics in AI and Data Science, Web Programming, Operating Systems, Computer Graphics<br><br>🎓 Bachelor’s in Information Technology<br>Savitribai Phule Pune University<br>Graduation: May 2021 | GPA: 3.8/4.0");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 As a Master’s student in Computer Science with a focus on data engineering, software development, and cloud technologies, I bring over two years of hands-on experience in creating robust data pipelines, automating processes, and developing software solutions. I specialize in SQL, Python, and cloud platforms like AWS, GCP, and Azure, with a passion for solving complex technical problems and optimizing workflows.<br><br>🚀👨🏻‍💻 I have worked across various industries, from data engineering roles that leverage BigQuery for large datasets to building middleware solutions in the banking sector. My projects also involve developing interactive dashboards in PowerBI, ensuring secure and efficient services in cloud environments, and hands-on experience with AWS and Google Cloud services.<br><br>💡 With a solid foundation in software engineering and a drive for innovation, I am keen to contribute my technical expertise to exciting projects, continuously grow, and explore emerging technologies in the data and software development fields.<br><br>");
            break;            
        case "experience":
            sendTextMessage("<span class='sk'>Experience:<br><br>" +
                "<span class='bold'>California State University - Los Angeles | Student Technical Assistant</span><br><span style='color: orange;'>October 2023 – Present</span><br>" +
                "• Revamped web pages with JavaScript and Drupal; built an automation system using Python, Plotly, and Excel, reducing manual tasks for faculty by 40%.<br>" +
                "• Provided tech support for 200+ workstations, enhancing IT inventory processes by 15%.<br><br>" +
        
                "<span class='bold'>Accenture | Software Engineer</span><br><span style='color: orange;'>August 2021 – July 2023</span><br>" +
                "• Automated manual processes in CI/CD Azure pipelines, reducing manual efforts by 90%.<br>" +
                "• Developed SQL scripts for code optimization, achieving 89% efficiency.<br>" +
                "• Built data validation scripts and curated datasets in Google BigQuery, improving big data management by 54%.<br>" +
                "• Documented solutions in JIRA Confluence, cutting developer coding time by 48%.<br>" +
                "• Automated workflows with Cloud Functions, Pub/Sub, Airflow, and Terraform, increasing efficiency by 20%.<br><br>" +
        
                "<span class='bold'>Pixaflip Technologies | Web Developer Intern</span><br><span style='color: orange;'>March 2020 – April 2020</span><br>" +
                "• Designed and developed responsive websites with WordPress, HTML, and CSS, achieving 87% responsiveness.<br>" +
                "• Enhanced navigation and integrated databases, boosting user interaction by 64%.</span>"
            );
            break;                                                                       
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("<span class='sk'>Projects:<br><br>" +
                "<span class='bold'>Snippet Application | NodeJS, VueJS, MongoDB, Thunder Client</span><br>" +
                "• Built a full-stack application using Node.js, MongoDB, and Vue.js with a responsive UI. Implemented secure user authentication, including login, registration, and profile management, utilizing MongoDB for data storage and authorization.<br>" +
                "• Tested APIs with Thunder Client to ensure robust communication and application stability.<br><br>" +
        
                "<span class='bold'>Smart Shopping Application | Android Studio, ARway Platform, Unity Platform, Firebase</span><br>" +
                "• Designed a smartphone application using Android Studio and Unity for augmented reality features, achieving 94% responsiveness, while implementing user authentication functionalities with 98% efficiency.<br>" +
                "• Created a back-end database with Firebase to organize and store user history for analysis, achieving 86% efficiency.<br><br>" +
        
                "You want to check more of my projects? Then just jump into my GitHub Account.<br><br>" +
                "<div class='social'><a target='_blank' href='https://github.com/ManjeetKhanna'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div><br>" +
        
                "I am working on some interesting projects. Stay tuned to know more about it! </span>"
            );
            break;
        case "certifications":
            sendTextMessage("<span class='sk'>Certifications:<br><br>" +
                "<span class='bold'>🥇 Amazon Web Services (AWS):</span><br> Cloud Practitioner (CLF-C02)<br><br>" +
                "<span class='bold'>🥇 Google Cloud Platform (GCP):</span><br> Associate Cloud Engineer (ACE)<br><br>" +
                "<span class='bold'>🥇 Microsoft Azure Fundamentals:</span><br> AZ-900<br><br>" +
                "<span class='bold'>🥇 New Relic Certified:</span><br> Full Stack Observability Practitioner</span>");
            break;                     
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            ifElseThinkAndExecute(inputText.toLowerCase().trim());
                break;
    }



}

function ifElseThinkAndExecute(textString) {
    if (textString.includes("hii") || textString.includes("hi") || textString.includes("hello") || textString.includes("hola") || textString.includes("hey")) {
        // reply for hi message
        sendTextMessage(getRandom(repliesForHello));
    } else if (textString.includes("i need break") || textString.includes("leave me") || textString.includes("bye") || textString.includes("see you soon") || textString.includes("bye bye") || textString.includes("goodbye")) {
        // reply for bye message
        sendTextMessage(getRandom(repliesForBye));
    } else if (textString.includes("i love you") || textString.includes("love you") || textString.includes("you are hot") || textString.includes("i like you")) {
        // reply for i love you
        sendTextMessage(getRandom(repliesfForLove));
    } else if (textString.includes("how are you") || (textString.includes("hows going") || textString.includes("how its going" || textString.includes("how it's going") || textString.includes("what are you doing")))) {
        // reply for 'how are you' request
        sendTextMessage(getRandom(repliesfForHowAreYou));
    } else if (textString.includes("you know") && (textString.includes("bixby") || textString.includes("siri" || textString.includes("alexa") || textString.includes("cortana")))) {
        // reply for 'you know other chattingBots' request
        sendTextMessage(getRandom(repliesForVoiceAssistants));
    } else {
        setTimeout(() => {
            sendTextMessage(getRandom(repliesForCommandUnknown));
        }, 2000);
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
