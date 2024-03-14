export const formatedDate = (inputDate)=>{

    var[month,date,year] = inputDate.split('-');
     var monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    month = monthNames[month-1] 
    const finalDate = date+" "+month+" "+year
    return finalDate


}