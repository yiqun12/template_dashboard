import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import $ from 'jquery';

// Table data
var dataSet1 = [
    ["40521", "<img src='../../assets/img/costic/customer-1.jpg' style='width:50px; height:30px;'> Merry", "Hall Street", "kbc@gfail.com", " Garlic Bread", "$43"],
    ["98521", "<img src='../../assets/img/costic/customer-2.jpg' style='width:50px; height:30px;'> Joe", "Hall Street", "lbc@gfail.com", " Pizza", "$48"],
    ["45454", "<img src='../../assets/img/costic/customer-3.jpg' style='width:50px; height:30px;'> Bella", "Huston Loan", "abc@gfail.com", " Burger", "$43"],
    ["12121", "<img src='../../assets/img/costic/customer-4.jpg' style='width:50px; height:30px;'> Herry", "Jk Road", "ghj@gfail.com", " Burger", "$56"],
    ["56454", "<img src='../../assets/img/costic/customer-5.jpg' style='width:50px; height:30px;'> Joe", "Hall Street", "abc@gfail.com", "Garlic Bread", "$43"],
    ["25252", "<img src='../../assets/img/costic/customer-6.jpg' style='width:50px; height:30px;'> Dum sum", "Hall Street", "bbc@gfail.com", " Pizza", "$43"],
    ["45454", "<img src='../../assets/img/costic/customer-7.jpg' style='width:50px; height:30px;'> Herry", "New York", "ghj@gfail.com", " Garlic Bread", "$56"],
    ["64541", "<img src='../../assets/img/costic/customer-8.jpg' style='width:50px; height:30px;'> Herry", "Jk Road", "khj@gfail.com", " Garlic Bread", "$56"],
    ["56562", "<img src='../../assets/img/costic/customer-9.jpg' style='width:50px; height:30px;'> Bella", "Hall Street", "lhj@gfail.com", " Garlic Bread", "$36"],
    ["51558", "<img src='../../assets/img/costic/customer-10.jpg' style='width:50px; height:30px;'> Merry", "Hall Street", "ihj@gfail.com", " Pizza", "$56"],
    ["55841", "<img src='../../assets/img/costic/customer-1.jpg' style='width:50px; height:30px;'> Herry", "JK Road", "mhj@gfail.com", " Garlic Bread", "$56"],
    ["55811", "<img src='../../assets/img/costic/customer-2.jpg' style='width:50px; height:30px;'> Max", "Hall Street", "ghj@gfail.com", " Noodles", "$56"],
    ["01475", "<img src='../../assets/img/costic/customer-3.jpg' style='width:50px; height:30px;'>  Joe", "Street 21", "dhj@gfail.com", " Sandwich", "$46"],
    ["55454", "<img src='../../assets/img/costic/customer-4.jpg' style='width:50px; height:30px;'> Max", "Street 21", "bhj@gfail.com", " Sandwich", "$46"],
    ["12145", "<img src='../../assets/img/costic/customer-5.jpg' style='width:50px; height:30px;'> Bella", "Huston Loan", "abc@gfail.com", " Burger", "$43"],
    ["52351", "<img src='../../assets/img/costic/customer-6.jpg' style='width:50px; height:30px;'> Herry", "Jk Road", "ghj@gfail.com", " Burger", "$56"],
    ["45823", "<img src='../../assets/img/costic/customer-7.jpg' style='width:50px; height:30px;'> Joe", "Jk Road", "abc@gfail.com", " Burger", "$43"],
    ["98541", "<img src='../../assets/img/costic/customer-8.jpg' style='width:50px; height:30px;'> Merry", "Hall Street", "kbc@gfail.com", " Garlic Bread", "$43"],
    ["22366", "<img src='../../assets/img/costic/customer-9.jpg' style='width:50px; height:30px;'> Bella", "Huston Loan", "abc@gfail.com", " Burger", "$43"],
    ["56465", "<img src='../../assets/img/costic/customer-10.jpg' style='width:50px; height:30px;'> Jake", "Huston Loan", "abc@gfail.com", " Burger", "$43"],
    ["34256", "<img src='../../assets/img/costic/customer-1.jpg' style='width:50px; height:30px;'> Joe", "Jk Road", "abc@gfail.com", " Sandwich", "$43"],
    ["45484", "<img src='../../assets/img/costic/customer-2.jpg' style='width:50px; height:30px;'> Dum sum", "Hall Street", "bbc@gfail.com", "  Pizza", "$43"],
    ["41028", "<img src='../../assets/img/costic/customer-3.jpg' style='width:50px; height:30px;'> Dum sum", "Hall Street", "bbc@gfail.com", " Pizza", "$43"],
    ["15485", "<img src='../../assets/img/costic/customer-4.jpg' style='width:50px; height:30px;'> Herry", "Jk Road", "ghj@gfail.com", " Burger", "$56"],
    ["48568", "<img src='../../assets/img/costic/customer-5.jpg' style='width:50px; height:30px;'> Bella", "Hall Street", "lhj@gfail.com", " Garlic Bread", "$36"],
    ["45815", "<img src='../../assets/img/costic/customer-6.jpg' style='width:50px; height:30px;'> Joe", "Jk Road", "abc@gfail.com", "Sandwich", "$43"],
    ["46542", "<img src='../../assets/img/costic/customer-7.jpg' style='width:50px; height:30px;'> Joe", "Jk Road", "abc@gfail.com", "Egg Sandwich", "$43"],
    ["65412", "<img src='../../assets/img/costic/customer-8.jpg' style='width:50px; height:30px;'> Joe", "Hall Street", "lbc@gfail.com", "  Pizza", "$54"],
    ["89658", "<img src='../../assets/img/costic/customer-9.jpg' style='width:50px; height:30px;'> Herry", "Jk Road", "ghj@gfail.com", " Burger", "$56"],
    ["02351", "<img src='../../assets/img/costic/customer-10.jpg' style='width:50px; height:30px;'> Max", "Hall Street", "ghj@gfail.com", " Noodles", "$56"],
    ["56212", "<img src='../../assets/img/costic/customer-1.jpg' style='width:50px; height:30px;'> Herry", "New York", "ghj@gfail.com", " Garlic Bread", "$56"],
    ["78065", "<img src='../../assets/img/costic/customer-2.jpg' style='width:50px; height:30px;'> Herry", "New York", "ahj@gfail.com", " French Fries", "$56"],
    ["56121", "<img src='../../assets/img/costic/customer-3.jpg' style='width:50px; height:30px;'> Herry", "New York", "ghj@gfail.com", " French Fries", "$56"],
    ["14526", "<img src='../../assets/img/costic/customer-4.jpg' style='width:50px; height:30px;'> Lulia", "Street 21", "ehj@gfail.com", " Pizza", "$56"],
    ["15451", "<img src='../../assets/img/costic/customer-5.jpg' style='width:50px; height:30px;'> Max", "Hall Street", "ghj@gfail.com", "  Noodles", "$56"],
    ["14451", "<img src='../../assets/img/costic/customer-6.jpg' style='width:50px; height:30px;'> Dum sum", "Hall Street", "bbc@gfail.com", " Pizza", "$43"]
];
class Content extends Component {
    componentDidMount() {
        //initialize datatable
        $('#data-table-4').DataTable({
            data: dataSet1,
            columns: [
                { title: "Customer ID" },
                { title: "Customer Name" },
                { title: "Location" },
                { title: "Email ID" },
                { title: "Ordered Item" },
                { title: "Bill" }
            ],
        });
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Customer List</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="table-responsive">
                                    <table id="data-table-4" className="table w-100 thead-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;