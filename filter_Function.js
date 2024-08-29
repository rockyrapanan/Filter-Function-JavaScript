//Filter function example:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

numbers.filter(n =>{
    return n < 4
})

const movies = [
    {
        title: 'Alien',
        score: 99,
        year: 1983
    },
    {
        title: 'Deadpool & Wolverine',
        score: 99,
        year: 2024
    },
    {
        title: 'The Thing',
        score: 95,
        year: 2015
    },
    {
        title: 'Dawn of the Dead',
        score: 90,
        year: 2008
    }
]

const goodMovies = movies.filter(movie => {
    return movie.score > 92
})

const recentMovies = movies.filter( m => m.year > 1980)
// This is how to combine filter and map:
const greatMovies = movies.filter(m => m.score > 95).map(m => m.title.toUpperCase())
//Exercise:
/*
 Filter Exercise

Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

    validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
    // => ["mark", "carrie98", "MoanaFan"]


Note: The syntax for this solution might be a little strange to you at this point in the
 course because it requires you to write the code, that you just learned in the previous lecture, 
 inside of a function. e.g.,

    function validUserNames(usernames) {
      // your code here
    }


or if you want to get fancy with an arrow function:

const validUserNames = usernames => // your code here;


There is no need to define an actual array of usernames, that part is done for you behind the 
scenes.



*/
//Answer:
//Soution 1:
function validUserNames(arr) {
    const filteredArr = arr.filter(function (name) {
      return name.length < 10;
    });
    return filteredArr;
}
//Solution 2:
function validUserNames(arr) {
    return arr.filter(name => name.length < 10);
  }
//Solution 3:
const validUserNames = usernames => usernames.filter(usr => usr.length < 10);