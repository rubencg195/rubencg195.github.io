// SideNav Button Initialization
$(".button-collapse").sideNav({
  breakpoint: 1200,
  closeOnClick: true, // Closes side-nav on &lt;a&gt; clicks, useful for Angular/Meteor
});
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector('.custom-scrollbar');
Ps.initialize(sideNavScrollbar);
var THEMES = {
  ROBOTICS: "ROBOTICS",
  WEB_DESIGN: "WEB DESIGN",
  BIO: "BIOINFORMATICS",
  ML: "MACHINE LEARNING",
  GAMES: "GAMES",

}
var awards = [
  {
    title: "Memorial University of Newfoundland and Labrador Scholarship",
    date:  "2018",
    image: "./images/awards/grant.png",
    description: "",
    url: "https://twitter.com/humans_MUNBIOL/status/1070670920048672768"
  },
  {
    title: "Yo Emprendo Award",
    date:  "2017",
    image: "./images/awards/yoemprendo.jpg",
    description: "",
    url: "https://www.facebook.com/yoemprendohn/photos/a.523490914452484/1164781213656781/?type=3&theater"
  },
  {
    title: "EmprendeTN",
    date:  "2017",
    image: "./images/awards/emprendetn.jpg",
    description: "The Northern Triangle Youth Entrepreneurship Conference “#EmprendeTN” (StartUp Norther Triangle) launched on Friday, September 22, 2017. The two-day workshop hosted 93 young entrepreneurs of El Salvador, Honduras and Guatemala. Participants had the opportunity to share experiences, learn the best practices of successful entrepreneurs, and get information on digital marketing, leadership, networking and finance.",
    url: "https://sv.usembassy.gov/el-salvador-welcomes-entrepreneurs-northern-triangle-countries-conference-emprendetn/"
  },
  {
    title: "Technological Innovation Award",
    date:  "2016",
    image: "./images/awards/pit.jpg",
    description: "",
    url: "https://hondurasisgreat.org/premio-innovadores-tecnologicos/"
  },
  {
    title: "Drone Challenge",
    date:  "2016",
    image: "./images/awards/drone.jpeg",
    description: "Nine students from the Unitec San Pedro Sula campus will be looking for the first places in the first edition of the Drone Challenge that will take place in Tegucigalpa.",
    url: "https://www.laprensa.hn/honduras/1004811-410/sampedranos-buscan-imponerse-en-el-primer-drone-challenge"
  },
  
]
var experience = [
  {
    title: "Study and Stay NL Coordinator",
    institution: "IENL | CNA | Memorial University",
    start: "Oct. 2018",
    end: "Now",
    description: "",
    image: "./images/companies/mun.gif",
  },
  {
    title: "Research Assistant",
    institution: "Memorial University",
    start: "Sept. 2018",
    end: "Now",
    description: "",
    image: "./images/companies/mun.gif",
  },
  {
    title: "Software Engineer",
    institution: "Grupo Monge",
    start: "Mar. 2018",
    end: "Aug. 2018",
    description: "",
    image: "./images/companies/monge.jpeg",
  },
  {
    title: "Software Engineer",
    institution: "Partner Hero",
    start: "Apr. 2018",
    end: "Mar. 2018",
    description: "",
    image: "./images/companies/partnerhero.png",
  },
  {
    title: "Mechatronics Engineer",
    institution: "Enercom",
    start: "Jan. 2018",
    end: "Mar. 2018",
    description: "",
    image: "./images/companies/enercom.png",
  },
  {
    title: "Co-Founder",
    institution: "Internet of Trees",
    start: "Oct. 2017",
    end: "Aug 2018",
    image: "./images/companies/internetoftrees.png",
  },
  {
    title: "Founder",
    institution: "LetMeListen",
    start: "Jan. 2016",
    end: "Jan 2018",
    image: "./images/companies/lml.jpg",
  },
];
var education = [
  {
    title: "MSc. Computer Science",
    institution: "Memorial University",
    start: "2018",
    end: "2020",
    image: "./images/companies/mun.gif",
  },
  {
    title: "BSc. Mechatronics",
    institution: "Central American Technological University (UNITEC)",
    start: "2012",
    end: "2017",
    image: "./images/companies/unitec.jpg",
  },
  {
    title: "BSc. Computer Science",
    institution: "Central American Technological University (UNITEC)",
    start: "2014",
    end: "2017",
    image: "./images/companies/unitec.jpg",
  },
  {
    title: "Machine Learning and Big Data Exchange Program",
    institution: "Tsing Hua University",
    start: "2017",
    end: "2017",
    image: "./images/companies/tsing.png",
  },
];

lml = "LetMeListen is a mobile application designed to improve the quality of life of deaf people worldwide. By means of a speech recognition algorithm, the application allows the deaf person to understand what they are saying since the phone translates the spoken language and shows it to the user on the screen so that he can read it, to answer it is as simple as write a message on the screen and the phone will generate a synthetic voice through a voice synthesizer to allow you to have a bilateral conversation";
var blogs = [
  {
    title: "Reinforcement Learning Techniques to GameEnvironments",
    description: " In the following blog post, we will discuss the state-of-the-art algorithms that were able to master many ATARI and other platform games during their development.",
    image: "https://raw.githubusercontent.com/rubencg195/rubencg195.github.io/master/blog/Reinforcement_Learning_Techniques/Reinforcement_learning_diagram.png",
    theme: THEMES.ML,
    url: "https://rubencg195.github.io/blog/Reinforcement_Learning_Techniques/"
  }
]
var projects = [
  {
    title: "Realtime Style Transfer Using TensorflowJS and ML5.js",
    description: "Check out the implementation of a real-time style transfer client-side (In the Browser) using Tensorflow.js and ML5.js. ",
    image: "https://raw.githubusercontent.com/rubencg195/style_transfer_tensorflowjs_ml5/master/udnie.jpg",
    theme: THEMES.ML,
    url: "https://github.com/rubencg195/style_transfer_tensorflowjs_ml5"
  },
  {
    title: "Realtime Pose Detection Using TensorflowJS",
    description: "Check out the implementation of a real-time Pose-detector client-side (In the Browser) using Tensorflow.js. ",
    image: "https://raw.githubusercontent.com/rubencg195/pose_detection_tensorflowjs_posenet/master/demo1.png",
    theme: THEMES.ML,
    url: "https://github.com/rubencg195/pose_detection_tensorflowjs_posenet"
  },
  {
    title: "Realtime Face Detection Using TensorflowJS",
    description: "Check out the implementation of a real-time Face-detector client-side (In the Browser) using Tensorflow.js. ",
    image: "https://github.com/rubencg195/face_detection_tensorflowjs_face_api/raw/master/face.png",
    theme: THEMES.ML,
    url: "https://github.com/rubencg195/face_detection_tensorflowjs_face_api"
  },
  {
    title: "Learning How to Walk From Scratch",
    description: "Check out the implementation of a custom OpenAI Environment with a spider agent which learns how to walk from scratch using the PPO algorithm.",
    image: "https://github.com/rubencg195/WalkingSpider_OpenAI_PyBullet/raw/master/images/PyBullet.png",
    theme: THEMES.ML,
    url: "https://github.com/rubencg195/WalkingSpider_OpenAI_PyBullet"
  },
  {
    title: "Unity + Photon Multiplayer",
    description: "Check out the implementation of a complete Cloud-based multiplayer with player synchronization, and Arena Creation.",
    image: "https://raw.githubusercontent.com/rubencg195/rubencg195.github.io/master/images/multiplayer.png",
    theme: THEMES.GAMES,
    url: "https://github.com/rubencg195/UnityPhotonMultiplayer"
  },
  {
    title: "Robotic Spider Design",
    description: "An assembly of a walking spider mechanism utilizing only two motors to move 4 legs and turn 360 degrees.",
    image: "https://github.com/rubencg195/RoboticSpiderDesign/raw/master/Demo/v2anim.png?raw=true",
    theme: THEMES.ROBOTICS,
    url: "https://github.com/rubencg195/RoboticSpiderDesign"
  },
  {
    title: "Promotech: A universal tool for promoter detection in bacterial DNA sequences",
    description: "Detecting promoter sequences is a must for bioinformatic researchers since they play a central role in gene expression. Many attempts have been made, but the problem has not been addressed satisfactorily. Must of the tools available focus in a single bacterium; or a set of sigma (σ) factors. It is important to highlight as well, there is no general bioinformatics method for promoter detection yet. Promotech was made to address this problem, offering a machine-learning-based classifier trained to generate a model that generalize and detect promoters in a wide range of bacteria.         ",
    image: "./images/background/3D-DNA-Wallpaper-HD.jpg",
    theme: THEMES.BIO,
    url: "https://github.com/rubencg195/DNAPromoterRecognition",
  },
  {
    title: "Self-balancing Robot Using Baselines, OpenAI Gym, and Deep-Q Learning",
    description: "A 3D robot capable of learning how to self-balance using reinforcement learning. Inspired in the inverted pendulum problem.",
    image: "https://github.com/rubencg195/PyBullet-Gym-Baseline-ROS-CustomEnv/raw/master/demo.png?raw=true",
    theme: THEMES.ML,
    url: "https://github.com/rubencg195/PyBullet-Gym-Baseline-ROS-CustomEnv"
  },
  {
    title: "Python implementation of common Machine Learning Algorithms.",
    description: "A source of well documented machine learning algorithms and techniques such as CNN, FFN, KNN, Random Forest, Cross Validation, and more.",
    image: "https://cdn-images-1.medium.com/max/1600/1*cG6U1qstYDijh9bPL42e-Q.jpeg",
    theme: THEMES.ML,
    url: "https://github.com/rubencg195/ML_Course_6915"
  },
  {
    title: "Automatic garbage collection and compaction machine",
    description: "An automatic machine design capable of recolecting, compacting, and storage trash for later disposal using computer vision and hydraulic pistons.",
    image: "https://github.com/rubencg195/RoboticChallenge2016/raw/master/Images/1.PNG?raw=true",
    theme: THEMES.ROBOTICS,
    url: "https://github.com/rubencg195/RoboticChallenge2016"
  },
  {
    title: "Pong AI",
    description: "Automatic agent learns how to play Ping Pong from scratch by sel-replay using Deep-Q Learning.",
    image: "https://cdn-images-1.medium.com/max/966/1*05ExQKJ0nOoWV80SNVEyJg.png",
    theme: THEMES.ML,
    url: "https://github.com/rubencg195/PongAI"
  },
  {
    title: "Drone Challenge",
    description: "Drone Challenge, the biggest National Drone Competition in Honduras.",
    image: "https://github.com/rubencg195/DroneChallenge2016/raw/master/Images/20160929_173659.jpg?raw=true",
    theme: THEMES.ROBOTICS,
    url: "https://github.com/rubencg195/DroneChallenge2016"
  },
  {
    title: "GRADREC",
    description: "GRADREC (Graduate Recruitment) is a web-based system that enables faculty members to advertise Master/PhD positions, provide information about their research projects and the availability of financial aid.  Our goal is to become a world leader at connecting high skilled researchers with available working positions.",
    image: "https://github.com/rubencg195/GRADREC/raw/master/SoftwareEngineering/studentHomePage.JPG",
    theme: THEMES.WEB_DESIGN,
    url: "https://github.com/rubencg195/GRADREC"
  },

  {
    title: "Castlevania Chess",
    description: "A fun and old implementation of chess with a taste of Castlevania.",
    image: "https://github.com/rubencg195/Castelvania2014/raw/master/Images/chess(6).png?raw=true",
    theme: THEMES.GAMES,
    url: "https://github.com/rubencg195/Castelvania2014"
  },

];
function renderExperience(experience, container) {
  $(document).ready(function () {
    Object.entries(experience).forEach(([key, exp]) => {
      $(container).append(`<!-- Image overlay card -->
        <div class="media">
          <img class="d-flex mr-3" width="100px" height="100px" src="${exp["image"]}"
            alt="Generic placeholder image">
          <div class="media-body">
            <h5 class="mt-0 font-weight-bold">${exp["title"]}</h5>
            <p class="mt-0 font-weight-bold blue-text">${exp["institution"]}</p>
            <p class="mt-0 ">${exp["start"]} - ${exp["end"]}</p>
          </div>
        </div>
        <br/>
      <!-- Image overlay card -->`);
    });
  });
}
function renderProjects() {
  $(document).ready(function () {
    Object.entries(projects).forEach(([key, proj]) => {
      $("#portfolioContainer").append(`<!-- Image overlay card -->
          <div class="col-xs-12 col-sm-6 mb-4">
            <div class="card card-image mb-6"
              onClick="openLink('${proj["url"]}')" 
              style="background-image: url('${proj["image"]}');">
              <!-- Content -->
              <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 class="blue-text "><i class="fas fa-chart-pie"></i> ${proj["theme"]}</h5>
                  <h3 class="card-title pt-2"><strong>${proj["title"]}</strong></h3>
                  <p>${proj["description"]}</p>
                  <a class="btn blue-gradient" ><i class="fas fa-clone left"></i> View project</a>
                </div>
              </div>
            </div>
          </div>
            <!-- Image overlay card -->`);
    });
  });
}
function renderBlogPosts() {
  $(document).ready(function () {
    console.log(blogs);
    Object.entries(blogs).forEach(([key, proj]) => {
      $("#blogContainer").append(`
          <div class="col-xs-12 col-sm-6 mb-4">
            <div class="card card-image mb-6"
              onClick="openLink('${proj["url"]}')" 
              style="background-image: url('${proj["image"]}');">
              <!-- Content -->
              <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 class="blue-text "><i class="fas fa-chart-pie"></i> ${proj["theme"]}</h5>
                  <h3 class="card-title pt-2"><strong>${proj["title"]}</strong></h3>
                  <p>${proj["description"]}</p>
                  <a class="btn blue-gradient" ><i class="fas fa-clone left"></i> View project</a>
                </div>
              </div>
            </div>
          </div>`);
    });
  });
}
function renderAwards() {
  $(document).ready(function () {
    Object.entries(awards).forEach(([key, award]) => {
      $("#awardsContainer").append(`<!-- Card Wider -->
      <div class="col-xs-12 col-sm-6 mb-4">
        <div class="card card-cascade wider" onclick='openLink("${award['url']}")'>
          <!-- Card image -->
          <div class="view view-cascade overlay">
            <img  class="card-img-top" src="${award['image']}" alt="Card image cap">
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <!-- Card content -->
          <div class="card-body card-body-cascade text-center">
            <!-- Title -->
            <h4 class="card-title"><strong>${award['title']}</strong></h4>
            <!-- Subtitle -->
            <h5 class="blue-text pb-2"><strong>${award['date']}</strong></h5>
            <!-- Text -->
            <p class="card-text">${award['description']}</p>
            <a class="blue-text d-flex flex-row-reverse p-2">
              <h5 class="waves-effect waves-light">Read more<i class="fas fa-angle-double-right ml-2"></i></h5>
            </a>
          </div>
        </div>
      </div>
      <!-- Card Wider -->`);
    });
  });
}

function openLink(url) {
  window.open(url);
}
function downloadResume() {
  openLink("./RubenChevezCV.pdf", '_blank');
}
function hideNav(){
  $('.button-collapse').sideNav('hide');
}
renderProjects();
renderBlogPosts();
renderAwards() ;
renderExperience(experience, "#experienceContainer");
renderExperience(education, "#educationContainer");
