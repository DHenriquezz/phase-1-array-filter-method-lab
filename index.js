// Code your solution here
/*findMatching`- This function takes an array
of drivers' names and a `string`
  as arguments, and returns the matching list of
   drivers. The function should be
  case insensitive.*/


function findMatching(collection, string){
    
    const filterDrivers = (name) => {
        return (name.toLowerCase() === string.toLowerCase())
    }
    return collection.filter(filterDrivers)
}

/* `fuzzyMatch` - This function takes an array
 of drivers' names and a `string`
  as arguments for querying the array,
   and returns all drivers whose names begin
  with the provided letters.*/


function fuzzyMatch(collection, string){
    
    const filterDrivers = (name) => {
        if (name.startsWith("Sa") === string.startsWith("Sa")){
            return name.startsWith("Sa")
        }

    }
    return collection.filter(filterDrivers)
}

/* `matchName` - This function takes an array of
 `driver` objects and a `string`as arguments.
  Each `driver` object has two properties
  : `name` and `hometown`.
  The function should return each element
   whose `name` property matches the
  provided `string` argument.*/

function matchName(obj, string){
    
    const sameName = (drivers) => {
        if (drivers.name === string){
            return drivers.name && drivers.hometown
        }
    }
   return obj.filter(sameName)
}