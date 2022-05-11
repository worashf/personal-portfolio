 const projects =[
     { projectId:"project-1",
       projectName:"Multi Post Stories",
       projectImage:"/images/post-img.svg",
       languages:[
        'CSS',
        'HTML',
        'Bootsrap',
        'Ruby',
        
       ],
       liveLink:"",
       sourceLink:"",
       description:" A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text."
     },{
        projectId:"project-2",
        projectName:"Profesional Art Printing Data",
        projectImage:"/images/story-img.svg",
        languages:[
         
         'HTML',
         'Bootsrap',
         'Ruby',
         
        ],
        liveLink:"",
        sourceLink:"",
        description:" A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard "
    },
    {
        projectId:"project-3",
        projectName:"Profesional Art Printing Data",
        projectImage:"/images/story-img.svg",
        languages:[
         
         'HTML',
         'Bootsrap',
         'Ruby',
         
        ],
        liveLink:"",
        sourceLink:"",
        description:" A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard "
      },
      {
        projectId:"project-4",
        projectName:"Profesional Art Printing Data",
        projectImage:"/images/story-img.svg",
        languages:[
         
         'HTML',
         'Bootsrap',
         'Ruby',
         
        ],
        liveLink:"",
        sourceLink:"",
        description:" A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard "
      },
      {
        projectId:"project-5",
        projectName:"Profesional Art Printing Data",
        projectImage:"/images/story-img.svg",
        languages:[
         
         'HTML',
         'Bootsrap',
         'Ruby',
         
        ],
        liveLink:"",
        sourceLink:"",
        description:" A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard "
      },
      {
        projectId:"project-6",
        projectName:"Profesional Art Printing Data",
        projectImage:"/images/story-img.svg",
        languages:[
         
         'HTML',
         'Bootsrap',
         'Ruby',
         
        ],
        liveLink:"",
        sourceLink:"",
        description:" A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard "
      },
      {
        projectId:"project-7",
        projectName:"Profesional Art Printing Data",
        projectImage:"/images/story-img.svg",
        languages:[
         
         'HTML',
         'Bootsrap',
         'Ruby',
         
        ],
        liveLink:"",
        sourceLink:"",
        description:" A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard "
      }     
 ]



 let projectModal = document.getElementById("modal-container");
 let buttons=document.querySelectorAll("button");


  let projectButtons =[];

  buttons.forEach((btn)=>{
       const [button] = btn.id.split('-');
       if(button==="project"){
           projectButtons.push(btn);
       }
  })


  function openProjectModal(projectId){

  let project = projects.find((pro) =>pro.projectId === projectId);
  let language =""
  project.languages.forEach((lang) =>{
      language+= `<li> ${lang} </li>`
  });
   document.getElementById("project-name").innerHTML= project.projectName;
   document.getElementById("languages-list").innerHTML=language;
   document.getElementById("project-image").src=project.projectImage;
   document.getElementById("modal-description").textContent=project.description;
   document.getElementById("live-link").href=project.liveLink;
   document.getElementById("source-link").href =project.sourceLink;
   projectModal.style.display="block";

 
  }


  projectButtons.forEach((projectButton) => {
    const { id} = projectButton;
    projectButton.addEventListener('click', () => openProjectModal(id));
  });