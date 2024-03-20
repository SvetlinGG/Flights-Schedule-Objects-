function flight(arr){
    let initFlights = arr[0];
    let changes = arr[1];
    let flights = {};
    for ( let i=0; i < initFlights.length; i++){
        let flightData = initFlights[i].split(' ');
        flights[flightData[0]] = {
            destination: flightData[1],
            status: 'Cancelled',
        }
    }
    for ( let i=0; i < changes.length; i++){
        let changeData = changes[i].split(' ');
        changeData[0].status = changeData[1];
        
    }
    for ( let key of Object.keys(flights)){
        console.log(`Destination: ${flights[key].destination}, Status: ${flights[key].status}`);
        
    }

}
flight([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]);