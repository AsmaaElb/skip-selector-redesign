# Getting Started with Create React App
<img width="960" alt="skip-selector" src="https://github.com/user-attachments/assets/19b77b63-b120-4bbd-87da-08ea3e23d8cb" />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Skip Selector Redesign

This project is a redesigned version of the "Choose Your Skip Size" page for the company `We Want Waste`.

## 🔧 Tech Stack

- React + TypeScript
- TailwindCSS
- API: https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

## ✅ Features

- Clean dark mode design
- Full responsiveness (desktop & mobile)
- Functional card selection with animations
- API-connected dynamic skip data
- Highlights of price, features, and permit rules
- Improved UX with floating effects and transitions

## 📦 Folder Structure

- `src/components`: SkipCard, StepHeader, ContinueFooter
- `src/pages`: SkipSelection, PermitCheck
- `public/images/skips`: Skip images by size

## 🚀 How to Run Locally

```bash
git clone https://github.com/AsmaaElb/skip-selector-redesign.git
cd skip-selector-redesign
npm install
npm run dev


