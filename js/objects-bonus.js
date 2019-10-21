"use strict";

//Exercise 1
function makeCar(x, y){
    var vehicle = {};
    return vehicle = {
        make: x,
        model: y
    }
}

console.log(makeCar("VW", "beetle"));

//Exercise 2
var salesReport = {
    title: "Monthly Sales Report",
    date: "03-17-2015",
    office: "Codeup",
    employees: [
        {
            employeeNumber: 1,
            firstName: "Jane",
            lastName: "Janeway",
            salesUnits: 3
        },
        {
            employeeNumber: 3,
            firstName: "Tricia",
            lastName: "Triciason",
            salesUnits: 5
        },
        {
            employeeNumber: 4,
            firstName: "Jeannette",
            lastName: "Jeanson",
            salesUnits: 4
        },
        {
            employeeNumber: 5,
            firstName: "Charles Emmerson III",
            lastName: "Winchester",
            salesUnits: 2
        },
        {
            employeeNumber: 6,
            firstName: "Chet",
            lastName: "Chedderson",
            salesUnits: 8
        },
        {
            employeeNumber: 7,
            firstName: "Chaiam",
            lastName: "Chaiamson",
            salesUnits: 12
        },
        {
            employeeNumber: 8,
            firstName: "Dale",
            lastName: "Dalesinger",
            salesUnits: 1
        },
        {
            employeeNumber: 9,
            firstName: "Zig",
            lastName: "Ziglar",
            salesUnits: 50
        },
        {
            employeeNumber: 10,
            firstName: "Henry",
            lastName: "Kissinger",
            salesUnits: 1
        },
        {
            employeeNumber: 11,
            firstName: "Arthur",
            lastName: "Herbert",
            salesUnits: 23
        },
        {
            employeeNumber: 12,
            firstName: "Betty",
            lastName: "Boop",
            salesUnits: 67
        }
    ],
};

console.log(salesReport);

//Exercise 3
salesReport.getEmployeeCount = function () {
    console.log("Employee count is: " + this.employees.length + ".");
};

console.log(salesReport.getEmployeeCount());

salesReport.getTotalNumberOfSales = function () {
    salesReport.salesUnits.forEach(function (unit) {
         += unit;
    });

    console.log("Employee count is: " +  + ".");
};
console.log(salesReport.getTotalNumberOfSales());