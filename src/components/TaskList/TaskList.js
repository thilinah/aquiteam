import React, {Component} from 'react';
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const taskListTarget = {
    canDrop(props, monitor) {
        // You can disallow drop based on props or item
        const item = monitor.getItem();
        return true;
    },

    hover(props, monitor, component) {
        // This is fired very often and lets you perform side effects
        // in response to the hover. You can't handle enter and leave
        // here—if you need them, put monitor.isOver() into collect() so you
        // can just use componentWillReceiveProps() to handle enter/leave.

        // You can access the coordinates if you need them
        const clientOffset = monitor.getClientOffset();
        const componentRect = findDOMNode(component).getBoundingClientRect();

        // You can check whether we're over a nested drop target
        const isJustOverThisOne = monitor.isOver({ shallow: true });

        // You will receive hover() even for items for which canDrop() is false
        const canDrop = monitor.canDrop();
    },

    drop(props, monitor, component) {
        if (monitor.didDrop()) {
            // If you want, you can check whether some nested
            // target already handled drop
            return;
        }

        // Obtain the dragged item
        const item = monitor.getItem();

        // You can do something with it
        alert('123');

        // You can also do nothing and return a drop result,
        // which will be available as monitor.getDropResult()
        // in the drag source's endDrag() method
        return { moved: true };
    }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}

class TaskList extends Component {
    componentWillReceiveProps(nextProps) {
        if (!this.props.isOver && nextProps.isOver) {
            // You can use this as enter handler
        }

        if (this.props.isOver && !nextProps.isOver) {
            // You can use this as leave handler
        }

        if (this.props.isOverCurrent && !nextProps.isOverCurrent) {
            // You can be more specific and track enter/leave
            // shallowly, not including nested targets
        }
    }

    render() {
        // Your component receives its own props as usual
        const { position } = this.props;

        // These props are injected by React DnD,
        // as defined by your `collect` function above:
        const { isOver, canDrop, connectDropTarget } = this.props;

        return connectDropTarget(
            <div className='TaskList'>
                <Col xs="12" sm="4" md="3">
                    Title
                </Col>
            </div>
        );
    }
}

export default DropTarget('card', taskListTarget, collect)(TaskList);
