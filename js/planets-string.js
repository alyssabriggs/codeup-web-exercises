(function() {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    planetsString = planetsArray.join('<br>');
    console.log(planetsString);
    document.write(planetsString);

    //BONUS
    var planetsArray2 = planetsArray.join('<li></li>');
    var planetsArray3 = planetsArray2.unshift('<ul>');
    var planetsArray4 =  planetsArray3.push('</ul>');
    console.log(planetsArray4);
    document.write(planetsArray4);
})();

