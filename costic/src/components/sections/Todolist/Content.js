import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import $ from 'jquery';

const adddatatip = (
    <Tooltip>
        Add a Task to this block
    </Tooltip>
);

class Content extends Component {
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
            $(".ms-add-task-block-2").on('submit', function (e) {
                e.preventDefault();
                $(".ms-todo-list").prepend(
                    '<div class="col-xl-4 col-md-6 col-sm-12 ms-deletable"> <div class="ms-card"> <div class="ms-card-header clearfix">' +
                    '<h6 class="ms-card-title">' + $("#task-block-2").val() + '</h6> <button data-toggle="tooltip" data-placement="left" title="Add a Task to this block" class="ms-add-task-to-block ms-btn-icon float-right">' +
                    '<i class="material-icons">add</i> </button> </div> <div class="ms-card-body"> <ul class="ms-list ms-task-block"> </ul></div>' +
                    '<div class="ms-card-footer clearfix"><a href="#" class="text-disabled mr-2"> <i class="flaticon-archive"> </i> Archive </a><a href="#" class="text-disabled ms-delete-trigger float-right">' +
                    '<i class="flaticon-trash"> </i> Delete </a> </div> </div> </div>'
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
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                        <form className="ms-add-task-block-2">
                                            <div className="form-group d-flex m-0 fs-14 clearfix">
                                                <input type="text" className="form-control mr-2 fs-14 float-left" id="task-block-2" name="todo-block" placeholder="Add Task Block" />
                                                <button type="submit" className="ms-btn-icon bg-primary float-right"><i className="material-icons text-disabled">add</i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <ul className="ms-todo-options">
                                            <li><Link to="#" className="ms-text-primary"> All Tasks </Link>
                                            </li>
                                            <li><Link to="#" className="text-disabled"> Completed </Link>
                                            </li>
                                            <li><Link to="#" className="text-disabled"> Archived </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <ul className="ms-todo-options ms-todo-nav">
                                            <li>
                                                <Link to="#" className="ms-text-warning"> <i className="material-icons">playlist_add_check</i> Remove Completed</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="ms-text-danger"> <i className="material-icons">delete</i> Clear All</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ms-todo-list">
                    <div className="col-xl-4 col-md-6 col-sm-12 ms-deletable">
                        <div className="ms-card">
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
                                </ul>
                            </div>
                            <div className="ms-card-footer clearfix">
                                <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive</Link>
                                <Link to="#" className="text-disabled ms-delete-trigger float-right"> <i className="flaticon-trash"> </i> Delete</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 ms-deletable">
                        <div className="ms-card">
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
                                </ul>
                            </div>
                            <div className="ms-card-footer clearfix">
                                <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive</Link>
                                <Link to="#" className="text-disabled  ms-delete-trigger float-right"> <i className="flaticon-trash"> </i> Delete</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 ms-deletable">
                        <div className="ms-card">
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
                                </ul>
                            </div>
                            <div className="ms-card-footer clearfix">
                                <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive</Link>
                                <Link to="#" className="text-disabled  ms-delete-trigger float-right"> <i className="flaticon-trash"> </i> Delete</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 ms-deletable">
                        <div className="ms-card">
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
                                </ul>
                            </div>
                            <div className="ms-card-footer clearfix">
                                <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive</Link>
                                <Link to="#" className="text-disabled  ms-delete-trigger float-right"> <i className="flaticon-trash"> </i> Delete</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 ms-deletable">
                        <div className="ms-card">
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
                                </ul>
                            </div>
                            <div className="ms-card-footer clearfix">
                                <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive</Link>
                                <Link to="#" className="text-disabled  ms-delete-trigger float-right"> <i className="flaticon-trash"> </i> Delete</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 ms-deletable">
                        <div className="ms-card">
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
                                </ul>
                            </div>
                            <div className="ms-card-footer clearfix">
                                <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive</Link>
                                <Link to="#" className="text-disabled  ms-delete-trigger float-right"> <i className="flaticon-trash"> </i> Delete</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;