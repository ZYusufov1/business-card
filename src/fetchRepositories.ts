async function fetchRepositories() {
    const username = 'zyusufov1'
    const reposUrl = `https://api.github.com/users/${username}/repos`

    try {
        const reposResponse = await fetch(reposUrl)
        const repos = await reposResponse.json()

        const projects = []

        for (const repo of repos) {
            const mainBranchUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/main/public/project.json`

            const masterBranchUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/master/public/project.json`

            let projectData
            try {
                let projectResponse = await fetch(mainBranchUrl)
                if (projectResponse.ok) {
                    projectData = await projectResponse.json()
                } else {

                    projectResponse = await fetch(masterBranchUrl)
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
                        label: projectData.label,
                        preview: previewUrl,
                    })
                }
            } catch (error) {
                console.error(`Failed to receive project.json from ${repo.name}:`, error)
            }
        }

        console.log('Projects:', projects)
        return projects
    } catch (error) {
        console.error('Error getting list of repositories:', error)
    }
}

export default fetchRepositories
