function scuberGreetingForFeet(distanceFeet){
  if(distanceFeet <= 400){
      return 'This one is on me!'
    } else if(distanceFeet >= 2500){
        return 'No can do.'
        } else if(distanceFeet > 2000){
            return 'I will gladly take your thirty bucks.'
  } 
}

function ternaryCheckCity(city){
  if(city === "NYC")
    return "Ok, sounds good."
    else 
      return "No go."
      
}

function switchOnCharmFromTip(generosity){
  if(generosity === "generous")
    return "Thank you so much."
    else if(generosity === "not as generous")
      return "Thank you."
      else
        return "Bye."
}