function DetailsUtils() {
  const mu = {};

  mu.buildFile = restaurant => {
    const template = `<!DOCTYPE html>
<html lang="en">
	<head>

		<!-- required meta tags -->
		<meta charset="UTF-8" />
		<!-- code optimization for mobile devices -->
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!-- TODO: meta tag for page description in browser -->
		<meta name="author" content="Valentina Chacon Buitrago">
		<meta name="description" content="Valentina's interactive resume.">

		<!-- bootstrap CSS -->
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
			integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
			crossorigin="anonymous"
		/>

		<!-- tab tittle -->
		<title>restaurant</title>

		<!-- TODO:favicon -->


		<!-- TODO:custom links -->
		<link rel="stylesheet" href="../stylesheets/style.css" />



	</head>
	<body>
		<div class="container-fluid">
			<div class="row">
				<div class="navi">
					<h1 id="trial">${restaurant.name}</h1>
					<h2>${restaurant.area}</h2>
				</div>
			</div>
		</div>


		<!-- JQuery -->
		<script
			src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
			integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
			crossorigin="anonymous"
		></script>
		<!-- Popper.jst-->
		<script
			src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
			integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
			crossorigin="anonymous"
		></script>
		<!-- Boostrap.js -->
		<script
			src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
			integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
			crossorigin="anonymous"
		></script>

		<!-- custom JS scripts -->
	</body>
</html>`;
    return template;
  };
  return mu;
}

module.exports = DetailsUtils;
