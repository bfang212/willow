import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal';
import { Redirect } from 'react-router-dom';

import styles from '../assets/sass/Dashboard.module.scss';

import {projectSave, projectGetData} from '../actions/project';

import WillowCore from '../components/WillowCore';
import Modals from './Modal/Modals';

class ProjectView extends Component {

	render() {
		if (this.props.projectData.project) {
			// if the projectName has been retrieved from the server
			var projectName = this.props.projectData.project.project_name;
		} else {
			var projectName = '';
		}

		return (
			<div className={styles.col_12_of_12}>
				<h4>{projectName}</h4>
				<WillowCore />
				<Modals />
				<button onClick={() => { console.log(this.props.projectData); }}> See projectData </button>
				<button onClick={() => this.props.saveProject(this.props.projectData)}> Save </button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		projectData: state.projectData,
		userStatus: state.userStatus,
	};
};

const mapDispatchToProps = (dispatch) => {
	return { 
		saveProject: (projectData) => dispatch(projectSave(projectData)),
		projectGetData: (projectID) => dispatch(projectGetData(projectID))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);
