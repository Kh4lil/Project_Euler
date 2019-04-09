var number_Routes = [];

function getNumOfRoutes(X, Y){
    number_Routes[X] = number_Routes[X] || [];

    if (number_Routes[X][Y]){
        return number_Routes[X][Y];
    }
    if (X == 0 || Y == 0){
        return 1;
    }

    //Here we are shifting to the right.
    var routes = getNumOfRoutes(X-1, Y);
    routes = routes + getNumOfRoutes(X, Y - 1);

    number_Routes[X][Y] = routes;

    return routes;
}

console.log(getNumOfRoutes(20, 20));
