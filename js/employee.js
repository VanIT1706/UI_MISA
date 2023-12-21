$(document).ready(function () {
    //loadData();
    var employeeJS = new Employee();
    employeeJS.loadData();
})

class Employee{
    constructor (){

    }
    //Hàm load dữ liệu
    loadData (){
    $.each(employee, function (idex, item) {
        var trHTML = $(`<tr>
                         <td>`+ item.EmployeeCode + `</td>
                         <td>`+ item.EmployeeName + `</td>
                         <td>`+ item.Email + `</td>
                         <td>`+ item.Mobile + `</td>
                         <td>`+ item.CompanyName + `</td>
                            </tr>`);
        $('.grid tbody').append(trHTML);
    })
    }
    add() {

    }
    edit() {

    }
    delete() {

    }
}
var employee = [
    {
        EmployeeCode: "NV0001",
        EmployeeName: "Văn",
        Email: "dasdasd@dhl.com",
        Mobile: "0635332318",
        CompanyName: "DHL"
    },
    {
        EmployeeCode: "NV0002",
        EmployeeName: "Suongfsad",
        Email: "dasdasd@dhl.com",
        Mobile: "0635332318",
        CompanyName: "DHL"
    },
    {
        EmployeeCode: "NV0003",
        EmployeeName: "Tuyerwfs",
        Email: "dasdasd@dhl.com",
        Mobile: "0635332318",
        CompanyName: "DHL"
    }
]