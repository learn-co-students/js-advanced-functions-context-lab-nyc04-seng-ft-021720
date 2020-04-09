/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


let createEmployeeRecord = function(array){

    let object = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return object
}

let createEmployeeRecords = function(array){
    return array.map(employee => createEmployeeRecord(employee))
}


let createTimeInEvent = function(dateStamp){
    let date = dateStamp.split(' ')
    let time = parseInt(date[1])

    this.timeInEvents.push({type: "TimeIn", hour: time, date: date[0]})

    return this
}


let createTimeOutEvent = function(dateStamp){
    let date = dateStamp.split(' ')
    let time = parseInt(date[1])

    this.timeOutEvents.push({type: "TimeOut", hour: time, date: date[0]})

    return this
}


let hoursWorkedOnDate = function(dateStamp){

    let timeIn = this.timeInEvents.find(employee => employee.date === dateStamp)
    let timeOut = this.timeOutEvents.find(employee => employee.date === dateStamp)


    let hoursWorked = (timeOut.hour - timeIn.hour)/100

    return hoursWorked
}


let wagesEarnedOnDate = function(dateStamp){

    let hoursWorked = hoursWorkedOnDate.call(this, dateStamp)
    let wage = this.payPerHour * hoursWorked
    return wage

}


let calculatePayroll = function(employeeRecords){
    let wage = employeeRecords.reduce((accumulator, employee) => {
        return accumulator + allWagesFor.call(employee)
    },0)
    return wage
}


let findEmployeeByFirstName = function(collection, firstNameString){

    let employee = collection.find(employee => employee.firstName === firstNameString)

    return employee
}




let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}