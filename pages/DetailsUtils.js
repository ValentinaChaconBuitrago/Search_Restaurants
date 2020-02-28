function DetailsUtils() {
  const mu = {};

  mu.buildFile = (restaurant) => {
  	const file = `<h1>${restaurant.name}</h1>
  	<h2>${restaurant.area}</h2>`;
  	return file;
  };
  return mu;
}

module.exports = DetailsUtils;