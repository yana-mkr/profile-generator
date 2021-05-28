const generate = require('../index');
const Manager = require('../lib/Manager');

function generateHTML(data) {
  const cards = [];
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element.office) {
      cards.push(`
            <div class="col">
           <div class="card" style="width: 20rem;">
 <div class="card-body">
   <h5 class="card-title">${element.name}</h5>
   <h6 class="card-subtitle mb-2 text-muted"><i class="material-icons">traffic</i>  Manager</h6>
   <div class="card2" style="width: 18rem;">
 <ul class="list-group list-group-flush">
   <li class="list-group-item">${element.id}</li>
   <li class="list-group-item"><a href="mailto:${element.email}">${element.email}</a> </li>
   <li class="list-group-item">${element.office}</li>
 </ul>
</div>
 </div>
</div>
</div>
`)

    } else if (element.github) {
      cards.push(`
            <div class="col">
            <div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"><i class="material-icons">cloud</i>  Engineer</h6>
    <div class="card2" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.id}</li>
    <li class="list-group-item"><a href="mailto:${element.email}">${element.email}</a> </li>
    <li class="list-group-item"><a href="https://github.com/${element.github}"> ${element.github}</a></li>
  </ul>
 </div>
  </div>
 </div>
 </div>
 `)
    } else {
      cards.push(`
            <div class="col">
            <div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted"><i class="material-icons">attachment</i>  Intern</h6>
    <div class="card2" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.id}</li>
    <li class="list-group-item"><a href="mailto:${element.email}">${element.email}</a> </li>
    <li class="list-group-item">${element.school}</li>
  </ul>
 </div>
  </div>
 </div>
 </div>
 `)
    }
  }
  cards.join('')

  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <link rel="stylesheet" href="../src/style.css">



            
    <header>
    <h1>My Team</h1>
    </header>
    </head>
    <body><div class="container">
    <div class="row">
    ${(cards.join(''))}
    </div>
    </div>
    </body>
    </html>`;
}


module.exports = generateHTML;
