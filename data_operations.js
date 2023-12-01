const users = [
    {
      name: 'Aryan Sharma',
      age: 28,
      gender: 'Male',
      location: 'Delhi',
    },
    {
      name: 'Priya Patel',
      age: 25,
      gender: 'Female',
      location: 'Mumbai',
    },
    {
      name: 'Rajat Singh',
      age: 30,
      gender: 'Male',
      location: 'Kolkata',
    },
    {
      name: 'Neha Gupta',
      age: 26,
      gender: 'Female',
      location: 'Bangalore',
    },
    {
      name: 'Aditya Verma',
      age: 32,
      gender: 'Male',
      location: 'Chennai',
    },
    {
      name: 'Kavita Yadav',
      age: 27,
      gender: 'Female',
      location: 'Hyderabad',
    },
    {
      name: 'Amit Kumar',
      age: 29,
      gender: 'Male',
      location: 'Ahmedabad',
    },
    {
      name: 'Sneha Mishra',
      age: 24,
      gender: 'Female',
      location: 'Pune',
    },
    {
      name: 'Rahul Joshi',
      age: 31,
      gender: 'Male',
      location: 'Jaipur',
    },
    {
      name: 'Anjali Singh',
      age: 28,
      gender: 'Female',
      location: 'Lucknow',
    },
    {
      name: 'Vikas Yadav',
      age: 33,
      gender: 'Male',
      location: 'Chandigarh',
    },
    {
      name: 'Pooja Sharma',
      age: 26,
      gender: 'Female',
      location: 'Bhopal',
    },
    {
      name: 'Saurabh Verma',
      age: 9,
      gender: 'Male',
      location: 'Indore',
    },
    {
      name: 'Divya Singh',
      age: 7,
      gender: 'Female',
      location: 'Surat',
    },
    {
      name: 'Arjun Patel',
      age: 3,
      gender: 'Male',
      location: 'Vadodara',
    },
  ];
  
//   console.log(users);
  // PART-1
let isAdult = users.map((user)=>{
    if(user.age>=18){
        return true
    }
    else{
        return false
    }
})

console.log(isAdult)

let adultUser = users.filter((user)=>{
    
       return user.age>=18
    }).map((user)=>{
        return user.name
    })

console.log(adultUser)

let getFullName = users.map((user)=>{
    return user.name + " "+ user.location
})

console.log(getFullName)


let userName = users.map((user)=>{
    return user.name
})

console.log(userName)


// Chaining the user data

// PART-2

let filterByGender = users.map((user)=>{
        if(user.gender == 'Male'){
            return true
        }
        else{
            return false
        }
})

console.log(filterByGender)

let femaleUsers = users.filter((user)=>{
    return user.gender == 'Female'
}).map((user)=>{
    return user.name
})

console.log(femaleUsers)

// PART-3

let movies = [
    { title: 'Dangal', genre: 'Biography/Drama', year: 2016, rating: 8.4 },
    { title: 'Baahubali: The Beginning', genre: 'Action/Drama', year: 2015, rating: 8.1 },
    { title: 'PK', genre: 'Comedy/Drama', year: 2014, rating: 8.2 },
    { title: '3 Idiots', genre: 'Comedy/Drama', year: 2009, rating: 8.4 },
    { title: 'Lagaan', genre: 'Adventure/Drama', year: 2001, rating: 8.1 },
    { title: 'Kabhi Khushi Kabhie Gham', genre: 'Drama/Musical', year: 2001, rating: 7.4 },
    { title: 'Sholay', genre: 'Action/Adventure', year: 1975, rating: 8.2 },
    { title: 'Mughal-e-Azam', genre: 'Drama/Family', year: 1960, rating: 8.4 },
    { title: 'Mother India', genre: 'Drama/Musical', year: 1957, rating: 8.1 },
    { title: 'Pyaasa', genre: 'Drama/Musical', year: 1957, rating: 8.4 }
  ];
//   console.log(movies);

// PART-4
let filterByGenre = movies.map((movie)=>{
    if(movie.genre == 'Comedy/Drama'){
        return true;
    }
    else{
        return false;
    }
})

console.log(filterByGenre)
  
let actionMovies = movies.filter((movie)=>{
    return movie.genre ='Action/Adventure'
}).map((movie)=>{
    return movie.title
})

console.log(actionMovies)

// PART-5

let combinedResult = [{adultUser, userName},{femaleUsers,getFullName},{actionMovies}];

console.log("Combined Result = ", combinedResult)