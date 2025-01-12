import { Project } from './types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRepositoriesThunk = createAsyncThunk(
	'projects/fetchRepositories',
	async (_, { rejectWithValue }) => {
		const username = 'zyusufov1'
		const reposUrl = `https://api.github.com/users/${username}/repos`

		try {
			const reposResponse = await fetch(reposUrl)
			const repos = await reposResponse.json()

			const projects: Project[] = []

			for (const repo of repos) {
				if (repo.name === 'business-card') {
					console.log(`Skipping repository: ${repo.name}`)
					continue
				}
				
				const mainBranchUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/public/project.json`
				const masterBranchUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/master/public/project.json`

				let projectData: Omit<Project, 'repoName' | 'projectUrl' | 'repoUrl'> | null = null

				try {
					let projectResponse = await fetch(masterBranchUrl)
					if (projectResponse.ok) {
						projectData = await projectResponse.json()
					} else {
						projectResponse = await fetch(mainBranchUrl)
						if (projectResponse.ok) {
							projectData = await projectResponse.json()
						}
					}

					if (projectData) {
						const previewUrl = `https://${username}.github.io/${repo.name}/${projectData.preview}`
						const projectUrl = `https://${username}.github.io/${repo.name}`
						projects.push({
							repoName: repo.name,
							projectUrl: projectUrl,
							repoUrl: repo.html_url,
							description: projectData.description,
							label: projectData.label,
							type: projectData.type,
							preview: previewUrl,
						})
					}
				} catch (error) {
					console.error(`Failed to receive project.json from ${repo.name}:`, error)
				}
			}

			return projects
		} catch (error) {
			return rejectWithValue('Failed to fetch repositories.')
		}
	}
)
