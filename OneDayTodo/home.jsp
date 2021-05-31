<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <script>
    var heading = document.querySelector("#heading");
    heading.onclick = function () {
      heading.style.color = "red";
    };
  </script>
  <body>
    <h1 id="heading">TO DO list</h1>
  </body>
</html>
