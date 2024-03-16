# Datacom AI Toolkit
```
Lean-Canvas-AI-App
|- .next
|- components
   |- core
      |- Header.js
      |- Footer.js
   |- ai 
      |- GenerateIdea.js
      |- RefineIdea.js
      |- IdeaCard.js
|- hooks
   |- useBedrock.js
|- models
   |- BedrockModels
      |- titan-tgl-large
         |- params.json
         |- consolidated.00.pth  
|- pages
|- public 
|- styles
|- utils
   |- bedrock.js
|- .gitignore
|- next.config.js
|- package.json
|- README.md

```
Here is a description of the files and folders in the diagram:

.next:              Contains Next.js configuration and build files.
components:         Contains reusable UI components.
core:               Core site-wide components like Header and Footer.
ai:                 AI-specific components like for idea generation.
hooks:              Contains React hooks like custom hooks.
models:             Contains model definition and weights files.
BedrockModels:      Folder for Bedrock models.
titan-tgl-large:    Folder for specific Titan TGL Large model.
params.json:        Model configuration.
consolidated.00.pth:Trained model weights.
pages:              Contains Next.js page components.
public:             Static assets like images.
styles:             Global and page-specific stylesheets.
utils:              Utility and helper functions.
bedrock.js:         Functions for calling Bedrock API.
.gitignore:         Tells Git which files to ignore.
next.config.js:     Next.js build configuration.
package.json:       Package metadata and dependencies.
README.md:          Project documentation.

```
Lean-Canvas-AI-App
|- .next
|- components
   |- core
      |- Header.js
      |- Footer.js
   |- ai 
      |- GenerateIdea.js
      |- RefineIdea.js
      |- IdeaCard.js
|- hooks
   |- useBedrock.js
|- models
   |- BedrockModels
      |- titan-tgl-large
         |- params.json
         |- consolidated.00.pth  
|- pages
|- public 
|- styles
|- utils
   |- bedrock.js
|- .gitignore
|- next.config.js
|- package.json
|- README.md
```

Here is a description of the files and folders in the diagram:
•	.next: Contains Next.js configuration and build files.
•	components: Contains reusable UI components.
o	core: Core site-wide components like Header and Footer.
o	ai: AI-specific components like for idea generation.
•	hooks: Contains React hooks like custom hooks.
•	models: Contains model definition and weights files.
o	BedrockModels: Folder for Bedrock models.
	titan-tgl-large: Folder for specific Titan TGL Large model.
	params.json: Model configuration.
	consolidated.00.pth: Trained model weights.
•	pages: Contains Next.js page components.
•	public: Static assets like images.
•	styles: Global and page-specific stylesheets.
•	utils: Utility and helper functions.
o	bedrock.js: Functions for calling Bedrock API.
•	.gitignore: Tells Git which files to ignore.
•	next.config.js: Next.js build configuration.
•	package.json: Package metadata and dependencies.
•	README.md: Project documentation.
Here are a few things to consider when setting up the file/folder structure for a Next.js lean canvas app that utilizes AI generation from Amazon Bedrock Titan TGL Large:
•	The default Next.js file structure of pages/, components/, etc works well and I'd recommend starting with that as a base.
•	Components, hooks, and utilities specific to the AI integration can be grouped together in a subfolder like /ai within the components/ or utils/ directories.
•	Data models, types, and constants related to AI generation could go in a models/ folder.
•	API calling logic would typically live in a utils/ folder.
•	Styles specific to AI components could be in a styles/ai.module.css file.
•	Pages consuming AI generation results can import components from the ai/ subfolder as needed.
So in summary, the core Next.js folders like pages/ and components/ are recommended. For AI-specific code, subfolders within those standard locations work well to logically group the code. There's also flexibility - for a small app, everything AI-related could potentially live in one ai/ folder without subfolders. The main things are keeping the structure logical and import paths clean. Let me know if any part needs more explanation!

Lean Canvas AI App Acceptance Criteria:

* Must contain the following fields
    1. Customer Segments (with subset "Early Adopters")
        * List your target customers and users
        * List the characteristics of your ideal customers
    1. Problem (with subset "Existing alternatives")
        * List your customer's top 3 problems
        * List how these problems are solved today
    1. Revenue Streams
        * List your sources of revenue
    1. Solution
    1. Unique Value Proposition (with subset "High-Level Concept")
        * Single, clear, compelling message that turns an unaware visitor into an interested prospect
        * List your X for Y analogy (e.g. Youtube = FLickr for Videos)
    1. Channels
        * List your path to customers
    1. Key Metrics
        * List the key numbers that tell you how your business is doing
    1. Cost Structure
        * List your fixed and variable costs
    1. Unfair Advantage
        * Something that can not be easily copied or bought

Strech goals:

* The form can be exported to PDF
* Add link to YouTube videos explaining each

## How To - Steps to Getting Started

First, run the development server:

``` bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js` . The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Typescript & Jest Support

``` bash
#Typescript
yarn add --dev typescript @types/react @types/node

#Jest
yarn add --dev jest @types/jest @testing-library/react @testing-library/jest-dom ts-jest jest-transform-css
```

tsconfig.jest.json

``` json
{
    "compilerOptions": {
        "jsx": "react",
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "noImplicitAny": true,
        "sourceMap": true,
        "target": "es5"
    }
}
```

jest.config.js

``` javascript
module.exports = {
    preset: 'ts-jest',
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node",
        "module.css"
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "jest-transform-css"
    },
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.jest.json',
        },
    },
};
```

## TailwindCSS

Installation guide - [here](https://tailwindcss.com/docs/guides/nextjs)