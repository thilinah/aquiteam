import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import {Card, CardHeader, CardFooter, CardBlock} from "reactstrap";

const cardSource = {
    beginDrag(props) {
        return {
            text: props.text
        };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

const propTypes = {
    text: PropTypes.string.isRequired,

    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
};

class TaskCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isDragging, connectDragSource, text } = this.props;
        return connectDragSource(
            <div style={{ opacity: isDragging ? 0.5 : 1 }}>
                <Card>
                    <CardBlock className="card-body">
                        {text}
                    </CardBlock>
                </Card>
            </div>
        );
    }
}

TaskCard.propTypes = propTypes;

// Export the wrapped component:
export default DragSource('card', cardSource, collect)(TaskCard);
