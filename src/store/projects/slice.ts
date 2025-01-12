import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Project } from './types'
import { fetchRepositoriesThunk } from './actions.ts'

interface ProjectsState {
	projects: Project[];
	loading: boolean;
	error: string | null;
}

const initialState: ProjectsState = {
	projects: [],
	loading: false,
	error: null,
}

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {},
	selectors: {
		selectProjects: (sliceState: ProjectsState) => sliceState.projects,
		selectLoading: (sliceState: ProjectsState) => sliceState.loading,
		selectError: (sliceState: ProjectsState) => sliceState.error,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRepositoriesThunk.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchRepositoriesThunk.fulfilled, (state, action: PayloadAction<Project[]>) => {
				state.loading = false
				state.projects = action.payload
				console.log()
			})
			.addCase(fetchRepositoriesThunk.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	},
})

export const { selectProjects, selectLoading, selectError } = projectsSlice.selectors
export default projectsSlice.reducer

