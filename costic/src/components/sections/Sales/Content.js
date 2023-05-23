import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import $ from 'jquery';

// Table data
var dataSet2 = [
    ["40521", "  <img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>pizza", "5421", "In Stock", "$32", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["98521", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>shake", "8422", "In Stock", "$17", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["45454", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>Burger", "1562", "In Stock", "$86", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["12121", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>Noodels", "6224", "In Stock", "$43", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["56454", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>cake", "5407", "Out Of Stock", "$16", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["25252", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'> Sandwich", "4804", "In Stock", "$37", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["45454", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>Spicy Sandwich", "9608", "Out Of Stock", "$13", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["64541", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>Peri Peri Fries", "6200", "In Stock", "$32", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["56562", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>Pasta", "2360", "In Stock", "$20", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["51558", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>Nachos", "1667", "In Stock", "$10", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["55841", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>Mexican Pizza", "3814", "Out Of Stock", "$9", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["55811", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'> Pastries", "9497", "In Stock", "$34", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["01475", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>French Fries", "6741", "In Stock", "$47", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["55454", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'> Munchurian", "3597", "In Stock", "$31", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["12145", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>Garlic Bread", "1965", "Out Of Stock", "$3", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["52351", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'> Spaghetti", "1581", "In Stock", "$19", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["45823", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>Mix Sause Pasta", "3059", "In Stock", "$7", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["98541", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>Fried Egg Sandwich ", "1721", "In Stock", "$23", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["22366", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>Multigrain Hot Cereal", "2558", "Out Of Stock", "$13", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["56465", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>Spicy Sandwich", "2290", "In Stock", "$21", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["34256", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>shake", "1937", "In Stock", "$34", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["45484", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>Dim sum", "6154", "In Stock", "$6", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["41028", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>spicy chicken soupe ", "8330", "In Stock", "$10", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["15485", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>Baked Nachos", "3023", "In Stock", "$10", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["48568", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>Spaghetti", "5797", "In Stock", "$1,2", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["45815", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>Munchurian", "8822", "In Stock", "$9", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["46542", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>Noodels", "9239", "In Stock", "$35", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["65412", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>Fried Egg Sandwich", "1314", "In Stock", "$20", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["89658", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>Hot Cereal", "2947", "In Stock", "$8", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["02351", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>French Crostini", "8899", "In Stock", "$16", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["56212", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>Spicy Noodels", "2769", "Out Of Stock", "$9", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["78065", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>Lemon Yogurt Parfait", "6832", "In Stock", "$11", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["56121", "<img src='../assets/img/costic/cereals.jpg' style='width:50px; height:30px;'>Potato Fries", "3606", "In Stock", "$14", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["14526", "<img src='../assets/img/costic/egg-sandwich.jpg' style='width:50px; height:30px;'>Lemon Rice", "2860", "In Stock", "$21", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["15451", "<img src='../assets/img/costic/pizza.jpg' style='width:50px; height:30px;'>Fried Rice", "8240", "In Stock", "$32", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"],
    ["14451", "<img src='../assets/img/costic/french-fries.jpg' style='width:50px; height:30px;'>pizza", "5384", "Out Of Stock", "$85", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"]
];
class Content extends Component {
    componentDidMount() {
        //initialize datatable
        $('#data-table-1').DataTable({
            data: dataSet2,
            columns: [
                { title: "Product ID" },
                { title: "Product Name" },
                { title: "Quantity" },
                { title: "Status" },
                { title: "Price" }
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
                                <h6>Product Sale</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="table-responsive">
                                    <table id="data-table-1" className="table table-hover w-100" />
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