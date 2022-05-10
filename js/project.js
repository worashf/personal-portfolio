class Project {
  constructor(title, description, featuredImage, technologies, linkToLiveVersion , linkToSource) {
    this.title = title;
    this.description = description;
    this.featuredImage = featuredImage;
    this.technologies = technologies;
    this.linkToLiveVersion = linkToLiveVersion;
    this.linkToSource = linkToSource;
  }
}

const project1 = new Project(
  'Title',
  /* Add data */
  
  );

const projectArray = [];
projectArray.push(project1);

let currentProject = document.getElementById('project1');
let h2 = document.createElement('h2');
h2.textContent = projectArray[0].title;

currentProject.appendChild(h2);
