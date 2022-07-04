import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProjectList from "../../Components/ProjectList/ProjectList";
import { ListOfProjectsData } from "../../API/Data/ListOfProjectsData";
import "./ProjectsListHome.css";

class ProjectsListHome extends Component {
  state = {
    searchField: ""
  };
  onRouteChange = setRoute => {
    this.props.history.push(setRoute);
  };
  onSeachChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { searchField } = this.state;
    const filterList = ListOfProjectsData.filter(list =>
      list.title_name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="container">
        <section className="pa4">
          <div className="content">
            <h1>Select Project</h1>
          </div>
        </section>
        <div className="pa2 ma3">
          <input
            type="text"
            className="w-100 pa3"
            placeholder="Search project here"
            onChange={this.onSeachChange}
            value={searchField}
            name="searchField"
          />
        </div>
        <ProjectList
          filterList={filterList}
          onRouteChange={this.onRouteChange}
        />
      </div>
    );
  }
}
export default withRouter(ProjectsListHome);
