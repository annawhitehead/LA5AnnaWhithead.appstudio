let quoteString= "\"Failure is simply the opportunity to begin again this time more intelligently.\""
console.log(`Upper Case quote is ${quoteString.toUpperCase()}`)

let authorString= (" -Henry Ford")

let completeString= quoteString.concat(authorString)
console.log(`The concated string is ${completeString}.`)

let found = completeString.includes("Henry")

if (found == true) {
console.log("Henry was in completeString.")

}else{
  console.log("Henry was not in completeString.")
  }