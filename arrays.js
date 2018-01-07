var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  add =array.unshift(element)
  return add
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}