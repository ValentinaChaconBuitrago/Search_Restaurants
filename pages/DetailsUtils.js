function DetailsUtils() {
  const mu = {};

  mu.buildFile = restaurant => {
    const template = `<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- required meta tags -->
		<meta charset="UTF-8" />
		<!-- code optimization for mobile devices -->
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, shrink-to-fit=no"
		/>
		<!-- meta tag for page description in browser -->
		<meta
			name="author"
			content="Valentina Chacon Buitrago, Juan Diego Arango"
		/>
		<meta name="description" content="Restaurant search application" />

		<!-- tab tittle -->
		<title>Restaurants</title>

		<!-- bootstrap CSS -->
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
			integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
			crossorigin="anonymous"
		/>

		<!-- custom links -->
		<!--<link rel="stylesheet" href="stylesheets/style.css" />-->
		<link rel="stylesheet" href="../stylesheets/style.css" />
		<link
			rel="shortcut icon"
			href="../images/favicon.ico"
			type="image/x-icon"
		/>
		<link rel="icon" href="../images/favicon.ico" type="image/x-icon" />
		<link
			rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
		/>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="single-property">
						<div class="sp-image">
							<img
								src="${restaurant.image}"
								alt="restaurant image"
							/>
						</div>
						<div class="row">
							<div class="col-lg-8">
								<div class="property-header">
									<h3>${restaurant.name}</h3>
									<h5>${restaurant.address}</h5>
								</div>
							</div>
							<div class="col-lg-4 text-left text-lg-right">
								<div class="property-header">
									<h3>${restaurant.type}</h3>
									<h5>${restaurant.area}</h5>
									<div id="pricing">
									</div>
								</div>
							</div>
						</div>
						<div class="property-info-bar">
							<div class="row">
								<div class="col-lg-7">
									<div class="pi-metas">
										<div id="rating">
										</div>
									</div>
								</div>
								<div class="col-lg-5 text-left text-lg-right">
									
								</div>
							</div>
						</div>
						<div class="property-text">
							<h4>Description</h4>
							<p>
								${restaurant.description}
							</p>
							
						</div>

					<!--
					<div class="map-widget">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522"
							style="border:0"
							allowfullscreen
						></iframe>
					</div> -->
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
		<script src="../javascripts/details.js"></script>
		<!-- function that modifies the number of stars displayed in the details section -->
		<script>
			renderStars(${restaurant.rating});
			renderPrice(${restaurant.price});
		</script>
	</body>
</html>`;
    return template;
  };
  return mu;
}

module.exports = DetailsUtils;
