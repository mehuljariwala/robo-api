import React, { Component } from "react";

import CardList from "../../Components/Robots-Components/CardList/CardList";
import SearchBox from "../../Components/Robots-Components/SearchBox/SearchBox";
import Scroll from "../../Components/Robots-Components/Scroll/Scroll";
import { withRouter } from "react-router-dom";

import "./RobotsHome.css";
import { setSearchField, requestRobots } from "../../Store/actions/actions";

import { connect } from "react-redux";
import ErrorBoundry from "../../Components/Robots-Components/ErrorBoundry/ErrorBoundry";

class RobotsHome extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  onHomeClick = () => {
    this.props.history.push("/home");
  };

  render() {
    const { searchField, robots, isPending } = this.props;
    let filterRobots = robots;
    filterRobots = filterRobots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return isPending ? (
      <h1 className="heading1">Loading....</h1>
    ) : (
      <div className="robo-home">
        <img
          className="robo-image"
          alt="robo"
          src="https://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43be10.png"
        />
        <div className="tc">
          <h1 className="f1 heading1">Robots Friend</h1>
          <SearchBox
            onSearchChange={this.props.onSearchChange}
            searchField={searchField}
          />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => {
      dispatch(setSearchField(event.target.value));
    },
    onRequestRobots: () => {
      dispatch(requestRobots());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RobotsHome));
