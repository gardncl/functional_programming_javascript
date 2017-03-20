var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	];

var three = function() {
	var videoAndTitlePairs = [];
  newReleases.forEach(function(newRelease) {
  videoAndTitlePairs.push({"id" : newRelease.id, "title" : newRelease.title})
  })
	return videoAndTitlePairs;
}

Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
        results.push(projectionFunction(itemInArray));
	});

	return results;
};

var four = function() {
	var result = JSON.stringify([1,2,3].map(function(x) { return x + 1; }));
    console.log(result);
}

var five = function() {
    var result = newReleases.map(function(newRelease) { return {"id" : newRelease.id, "title" : newRelease.title}});
    console.log(result);
}

