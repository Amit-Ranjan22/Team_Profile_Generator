function renderImage(role) {
    let image = "";

    switch (role) {
        case "Manager":
            image = './images/manager5.png';
            break;
        case "Engineer":
            image = './images/engineer1.png';
            break;
        case "Intern":
            image = './images/intern1.jpg';
            break;
    }
    return image;
}



function renderContent(person) {
  let output = "";
  role = person.getRole();

  switch (role) {
    case "Manager":
      output = `
         <div class="card d-inline-flex border border-5 border-dark bg-warning" style="width: 18rem;">
        <img src="${renderImage(person.getRole())}" class="card-img-top" alt="manager-image">
        <div class="card-body">
            <h5 class="card-title">${person.getName()}</h5>
            <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="fw-bold">Role: </span> ${person.getRole()}</li>
            <li class="list-group-item"><span class="fw-bold">Employee-Id: </span>${person.getId()}</li>
            <li class="list-group-item"><span class="fw-bold">Email: </span><a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">${person.getEmail()}</a></li>
            <li class="list-group-item"><span class="fw-bold">Office Number: </span>${person.getPhoneNumber()}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
            `;
      break;
    case "Engineer":
      output = `
        <div class="card d-inline-flex border border-5 border-dark bg-success" style="width: 18rem;">
        <img src="${renderImage(person.getRole())}"  class="card-img-top" alt="engineer-image">
        <div class="card-body">
            <h5 class="card-title">${person.getName()}</h5>
            <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="fw-bold">Role: </span>${person.getRole()}</li>
            <li class="list-group-item"><span class="fw-bold">Employee-Id: </span>${person.getId()}</li>
            <li class="list-group-item"><span class="fw-bold">Email: </span><a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">${person.getEmail()}</a></li>
            <li class="list-group-item"><span class="fw-bold">GitHub: </span><a
                href="https://github.com/login">${person.getGithub()}</a></li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
            `;
      break;
    case "Intern":
      output = `
        <div class="card d-inline-flex border border-5 border-dark bg-danger" style="width: 18rem;">
        <img src="${renderImage(person.getRole())}" class="card-img-top" alt="intern-image">
        <div class="card-body">
            <h5 class="card-title">${person.getName()}</h5>
            <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="fw-bold">Role: </span>${person.getRole()}</li>
            <li class="list-group-item"><span class="fw-bold">Employee-Id: </span>${person.getId()}</li>
            <li class="list-group-item"><span class="fw-bold">Email: </span><a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">${person.getEmail()}</a></li>
            <li class="list-group-item"><span class="fw-bold">School: </span> ${person.getSchool()}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
            `;
      break;
  }
  return output;
}

function renderEmployee(employees) {
  let output = "";
  employees.forEach((person) => {
    output = output + renderContent(person);
  });
  return output;
}

function indexGenerator(employees) {
  const output = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team-List-Generator</title>
</head>
<body>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid p-3 mb-2 bg-primary">
            <span class="navbar-text text-white fs-1">
                Amit And Team
            </span>
        </div>
    </nav>
    ${renderEmployee(employees)}
</body>
</html>
    `;
  return output;
}

module.exports = indexGenerator;
