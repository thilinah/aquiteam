import React, { Component } from 'react';
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import TaskCard from '../../components/TaskCard';
import TaskList from '../../components/TaskList';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  onDrop(data) {
      console.log(data)
      // => banana
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="4" md="3">
            <TaskCard text="tttt 111" id="1"/>
            <TaskCard text="tttt 2" id="1"/>
            <TaskCard text="tttt 3" id="1"/>
            <TaskCard text="tttt 4" id="1"/>
          </Col>
          <TaskList>
          </TaskList>
          <TaskList>
          </TaskList>
          <TaskList>
          </TaskList>
        </Row>
      </div>
    )
  }
}

//export default Dashboard;
export default DragDropContext(HTML5Backend)(Dashboard);
