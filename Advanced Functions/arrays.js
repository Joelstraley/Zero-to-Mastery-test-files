// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
let array1 = []
array.forEach(name => array1.push(name.username + "!"));
console.log(array1);

  //Create an array using map that has all the usernames with a "? to each of the usernames
let array2 = []
array.forEach(name => array2.push(name.username + "?"));
console.log(array2);
  
  //Filter the array to only include users who are on team: red

const result = array.filter(users => {
    return users.team === "red"
});
console.log(result)

  
  //Find out the total score of all users using reduce
 
const totalScore = array.reduce((accumulator, array) =>{
      return accumulator + array.score;
  }, 0)
  console.log(totalScore)
  
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map(num => num * 2)

  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  let newList = array.map(info => {
      info.items = info.items.map(item => {
          return item + "!"
      });
      return info;
  }); 
  console.log(newList)