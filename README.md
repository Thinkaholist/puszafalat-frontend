# Puszafalat - DEVELOPMENT branch

## Frontend

### DEV deploys:

[![Netlify Status](https://api.netlify.com/api/v1/badges/acc5798e-23f0-42e3-b773-6d2a8f886fd2/deploy-status)](https://app.netlify.com/sites/puszafalat/deploys)

https://app.netlify.com/sites/puszafalat-dev/deploys

https://puszafalat-dev.netlify.app

### PRODUCTION deploys:

[![Netlify Status](https://api.netlify.com/api/v1/badges/d3fc8059-09eb-4a5f-9359-5ec2a24a8935/deploy-status)](https://app.netlify.com/sites/puszafalat/deploys)

https://app.netlify.com/sites/puszafalat/deploys

https://puszafalat-dev.netlify.app

## Backend

Project:
https://www.sanity.io/manage/personal/project/6h8tota2
Repo:
https://github.com/Thinkaholist/puszafalat-sanity
Studio:
https://puszafalat.sanity.studio/

---

### Developer instructions:

- Clone the repo and checkout to the `development` branch
- When working on a task **always** create a new branch from the `development` branch
- Include the task number in your branch name. Eg. `ricsi-PUS-001-initalize-project`
- Firt install the dependecies with `npm install`
- Start the development server with `npm run start`
  The dev server will be available at: `http://localhost:8000/`
  The `GraphiQL` server will be available at: `http://localhost:8000/___graphql`
- When creating a PR (Pull Request) also include the task number (`PUS-001`) into the title
- Use the description field to tell what did you do and insert screenshots
- Any questions to the task should be in Jira comment thread any questions about the code itself in the PR comment thread on GitHub
- When the PR is accepted you can merge that into the `development` branch. It should trigger a new build onto the development site. See at the top of this page. After successful build you can see the changes on the developer website
