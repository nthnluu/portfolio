# My Portfolio

## Getting Started
Install dependencies:
```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Site data

Information on this site is statically rendered from the JSON files inside the `data` folder:

- `experiences.json` - list job exepriences in reverse chronological order (items at the front of the array are displayed first)
    * **title** - the title of the position held
    * **company** - the name of the company
    * **location** - the location of the job
    * **start** - the start date
    * **end** - the end date
    * **description** - a description of roles and responsibilities
    * **image** - a URL to an image of the companies logo

- `projects.json` - list of projects
    * **title** - the title of the project
    * **description** - a short summary of the project
    * **image** - a URL to a cover image for the project
    * **href** - a URL to the project's website or repo
    * **stack** - an array of strings listing the technologies used

- `skills.json` - an array of skill sections
    * **title** - the title of the skill section
    * **items** - an array of strings listing the skills under the current section

## Deployment

The easiest way to deploy this site is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
