var roster = []


function addNew() {
  var newName = prompt("What name would you like to add?")
  roster.push(newName)
}

function remove() {
  var remName = prompt("What name would you like to remove?")
  var index = roster.indexof(reName);
  roster.splice(index,1)
}

function display() {
  console.log(roster);

}

var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty"

if (start==='y') {
  while (request !== "quit") {
    request = prompt("please select an action: add, remove, display, or quit.")
    if (request === 'add') {
      addNew()
    }
    else if (request === 'display') {
      display()
    }
    else if (request === 'remove') {
      remove()
    }
    else if (request === 'quit') {
      break
    }
    else {
      alert("Not recognized, will quit!")
      //request = "quit"
    }
  }

}
alert("Thanks for using the Web App!, Please refresh to start over")
