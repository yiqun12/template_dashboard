import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const adddatatip = (
    <Tooltip>
        Add a Task to this block
    </Tooltip>
);

class Todolist extends Component {

    componentDidMount() {
        function deletableItem() {
            $('body').on('click', '.ms-delete-trigger', function () {
                $(this).closest('.ms-deletable').slideUp('slow', function () { $(this).closest('.ms-deletable').remove(); });
            });
        }
        function taskComplete() {
            $(".ms-todo-list").on('click', '.ms-todo-complete', function () {
                $(this).parent().toggleClass('task-complete');
            });
        }
        function addTask() {
            $('.ms-todo-list').on('click', '.ms-add-task-to-block', function () {
                var taskBlock = $(this).parent().next().find('.ms-task-block');
                taskBlock.append(
                    '<li class="ms-list-item ms-to-do-task ms-deletable">' +
                    '<label class="ms-checkbox-wrap ms-todo-complete" for="">' +
                    '<input type="checkbox" name="" value="">' +
                    '<i class="ms-checkbox-check"></i>' +
                    '</label>' +
                    '<form class="ms-confirm-task-form"> <input type="text" class="ms-task-input ms-task-edit"/>' +
                    '<button type="submit" class="close"><i class="material-icons fs-16 ms-confirm-trigger">check</i></button></form>' +
                    '</li>'
                );
                taskBlock.find('.ms-task-edit').focus();
            });
        }
        /* Confirm task after adding */
        function confirmTask() {
            $(".ms-todo-list").on('submit', '.ms-confirm-task-form', function (e) {
                e.preventDefault();
                var confirmBtn = $(this).find('i');
                var taskInput = $(this).find('.ms-task-input');
                confirmBtn.removeClass('material-icons fs-14 ms-confirm-trigger');
                confirmBtn.addClass('');
                confirmBtn.text('');
                $(this).replaceWith('<span>' + taskInput.val() + '</span><button class="close"><i class="flaticon-trash ms-delete-trigger"> </i></button>');

            });
        }
        function addTaskBlockApp() {
            $(".ms-add-task-block").on('submit', function (e) {
                e.preventDefault();
                $(".ms-quickbar-container .ms-todo-list").prepend(
                    '<div class="ms-card ms-qa-card ms-deletable"> <div class="ms-card-header clearfix">' +
                    '<h6 class="ms-card-title">' + $("#task-block").val() + '</h6> <button data-toggle="tooltip" data-placement="left" title="Add a Task to this block" class="ms-add-task-to-block ms-btn-icon float-right">' +
                    '<i class="material-icons">add</i> </button> </div> <div class="ms-card-body"> <ul class="ms-list ms-task-block"> </ul></div>' +
                    '<div class="ms-card-footer clearfix"><a href="#" class="text-disabled mr-2"> <i class="flaticon-archive"> </i> Archive </a><a href="#" class="text-disabled ms-delete-trigger float-right">' +
                    '<i class="flaticon-trash"> </i> Delete </a> </div> </div>'
                );
            });
        }
        deletableItem();
        taskComplete();
        addTask();
        confirmTask();
        addTaskBlockApp();
    }
    render() {
        return (

            <Scrollbar className="ms-quickbar-container ms-todo-list-container ms-scrollable">
                <form className="ms-add-task-block">
                    <div className="form-group mx-3 mt-0  fs-14 clearfix">
                        <input type="text" className="form-control fs-14 float-left" id="task-block" name="todo-block" placeholder="Add Task Block" />
                        <button type="submit" className="ms-btn-icon bg-primary float-right"><i className="material-icons text-disabled">add</i>
                        </button>
                    </div>
                </form>
                <ul className="ms-todo-list">
                    <li className="ms-card ms-qa-card ms-deletable">
                        <div className="ms-card-header clearfix">
                            <h6 className="ms-card-title">Task Block Title</h6>
                            <OverlayTrigger placement="left" overlay={adddatatip}>
                                <button className="ms-add-task-to-block ms-btn-icon float-right"> <i className="material-icons text-disabled">add</i>
                                </button>
                            </OverlayTrigger>
                        </div>
                        <div className="ms-card-body">
                            <ul className="ms-list ms-task-block">
                                <li className="ms-list-item ms-to-do-task ms-deletable">
                                    <label className="ms-checkbox-wrap ms-todo-complete">
                                        <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                    </label> <span> Task to do </span>
                                    <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger"> </i>
                                    </button>
                                </li>
                                <li className="ms-list-item ms-to-do-task ms-deletable">
                                    <label className="ms-checkbox-wrap ms-todo-complete">
                                        <input type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                    </label> <span>Task to do</span>
                                    <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger"> </i>
                                    </button>
                                </li>
                                <li id="addcheckbox"></li>
                            </ul>
                        </div>
                        <div className="ms-card-footer clearfix">
                            <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive</Link>
                            <Link to="#" className="text-disabled  ms-delete-trigger float-right"> <i className="flaticon-trash"> </i> Delete</Link>
                        </div>
                    </li>
                </ul>
            </Scrollbar>
        );
    }
}

export default Todolist;