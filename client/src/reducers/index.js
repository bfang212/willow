import { combineReducers } from 'redux';
import  { reducer as reduxForm } from 'redux-form';
import { userStatus, userHasErrored, userIsLoading } from './authReducer';
import { isModalOpen } from './modalReducer';
import { bookmarkStatus, bookmarkHasErrored, bookmarkIsLoading, bookmarkShowAdd, bookmarkShowPreview, bookmarkShowEdit, bookmarkFields, loadBookmarkScrape, bookmarkListAdd } from './bookmarkReducer';
import { createProjectModalToShow, createProjectMilestones, createProjectTitle, createProjectHasErrored, createProjectDataIsLoading, shouldRedirect, shouldRedirectTo } from './createProjectReducer';

import { projectsList, projectsListHasErrored, projectsListIsLoading } from './projectsReducer';
import { projectData, projectHasErrored, projectIsLoading, clearProjectData } from './projectReducer';
import { newExplorativeNodeCreated } from './explorativeNodeReducer';

import { milestones, visibilityFilter, milestoneLoader } from './milestoneReducer';

export default combineReducers({
	userStatus,
	userHasErrored,
	userIsLoading,
	isModalOpen,
	bookmarkStatus,
	bookmarkHasErrored,
	bookmarkIsLoading,
	bookmarkShowAdd,
	bookmarkShowPreview,
	bookmarkShowEdit,
	bookmarkFields,
	form: reduxForm,
	loadBookmarkScrape,
	bookmarkListAdd,
	createProjectModalToShow,
	createProjectTitle,
	createProjectMilestones,
	createProjectHasErrored, // consider deleting later
	createProjectDataIsLoading, // consider deleting later
	shouldRedirect,
	shouldRedirectTo,
	projectsList,
	projectsListHasErrored,
	projectsListIsLoading,
	projectData,
	projectHasErrored,
	projectIsLoading,
	clearProjectData,
	newExplorativeNodeCreated,
	milestones,
	visibilityFilter,
	milestoneLoader,
});