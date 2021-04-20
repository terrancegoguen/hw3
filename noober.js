// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Set the level of service the passenger purchased. Luxury Purple ride if requested, XL if over 3 passengers, X if below 4 and no Purple.
  let passengerCount = ride.numberOfPassengers 
  let passengerServiceLevel
  if (ride.purpleRequested == true){
    passengerServiceLevel = `Noober Purple`
  } else if (passengerCount > 3){
    passengerServiceLevel = `Noober XL`
  } else {
    passengerServiceLevel = "Noober X"
  }

  // Set all passenger profile details 
  let passengerFirstName = ride.passengerDetails.first 
  let passengerLastName = ride.passengerDetails.last 
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  
  // Set all passenger drop-off location details 
  let passengerDestinationAddress = ride.dropoffLocation.address
  let passengerDestinationCity = ride.dropoffLocation.city
  let passengerDestinationState = ride.dropoffLocation.state
  let passengerDestinationZip = ride.dropoffLocation.zip

  //Set all passenger pick-up location details 
  let passengerPickupAddress = ride.pickupLocation.address
  let passengerPickupCity = ride.pickupLocation.city
  let passengerPickupState = ride.pickupLocation.state
  let passengerPickupZip = ride.pickupLocation.zip

// Display service level, passenger profile, and location detail in human readable text for both rider and driver
console.log(`${passengerServiceLevel}: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pick up at ${passengerPickupAddress}, ${passengerPickupCity}, ${passengerPickupState}, ${passengerPickupZip}. Drop-off at ${passengerDestinationAddress}, ${passengerDestinationCity}, ${passengerDestinationState}, ${passengerDestinationZip}.`)


  // 🔥 YOUR CODE ENDS HERE 🔥
})
