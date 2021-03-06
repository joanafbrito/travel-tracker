class Traveler {
  constructor(currentUserData, tripRepo) {
    this.id = currentUserData.id
    this.name = currentUserData.name
    this.travelerType = currentUserData.travelerType
    this.trips = tripRepo.getTripsByUserId(this.id);
    this.amountSpent = 0;
  }

  getTotalAmoutSpent(currentYear, destinationRepo) {
    let currentYearTrips = this.trips.filter(trip => trip.date.includes(currentYear));
    let totalCost = currentYearTrips.reduce((acc, trip) => {
      let destination = destinationRepo.destinations.find(item => item.id === trip.destinationID)
      acc += destination.getTripCost(trip.travelers, trip.duration) 
      return acc
    }, 0)
    return totalCost;
  }
}
  
export default Traveler;
  