
<div align="center">
<span><h1><a href="https://saqibbedar.github.io/Reactfolio/" target="_blank">Reactfolio.</a> v1.2.0</h1></span>

<span>Designed for developers looking to showcase their work with style and simplicity.</span>

<div align="center">
    <img src="https://img.shields.io/badge/maintenance-actively--developed-brightgreen.svg" alt="Maintained status" />
    <img src="https://img.shields.io/github/v/release/saqibbedar/Reactfolio.svg" alt="Release badge" />
  <img src="https://img.shields.io/github/stars/saqibbedar/Reactfolio.svg" alt="GitHub stars" />
   <img src="https://img.shields.io/github/forks/saqibbedar/Reactfolio.svg" alt="GitHub forks" />
  <img src="https://img.shields.io/github/issues/saqibbedar/Reactfolio.svg" alt="GitHub issues" />
</div>

</div>

</br>

![Reactfolio Header Image](./public/header.jpg)

# Reactfolio

**Reactfolio** is a customizable portfolio template built with React, Vite, and TailwindCSS. This template allows you to easily create your own developer portfolio for free. It is designed to be flexible and easy to modify, with all the data stored in a single [`assets.js`](https://github.com/saqibbedar/Reactfolio/blob/main/src/assets/assets.js) file.

# Quick Demo

Check out the live demo of the portfolio [here](https://saqibbedar.github.io/Reactfolio/).


# Prerequisite

Before starting, ensure you have the following installed on your machine:

1. **Git:** Download and install Git from [here](https://git-scm.com/downloads).
   
   > **Note:** You do not need Node.js installed on your machine as the build and deployment process will be handled by GitHub Actions.

</br>

# Getting started

Follow these steps to create and deploy your portfolio:

## Step 1: Fork and Clone the Repository

To begin, you should fork this repository so you have your own copy of the project.

1. Click the **Fork** button at the top-right corner of this page to create a copy of the repository in your GitHub account.
2. Once the repository is forked, clone it to your local machine by running the following command in your terminal:

```bash
git clone https://github.com/saqibbedar/Reactfolio.git
```

## Step 2: Update [`assets.js`](https://github.com/saqibbedar/Reactfolio/blob/main/src/assets/assets.js) file Data

The main data for the portfolio is located in the `assets.js` file. Open it and replace the dummy data with your actual information:

Here is a basic structure of what you need to update in assets.js`

```js
// Replace dummy values with your actual information.
const AboutPage = {
  authorProfile: "Your Profile Image URL",
  authorDescription: "A short bio about yourself",
  getInTouchUrl: "Your Contact Page URL",
  authorName: "Your Name",
  profileImgTagLine: "Your Job Title or Tagline",
  authorContactMail: "Your Email Address",
  authorContactNumber: "Your Phone Number",
};

// Similarly, update other values as needed...
```

## Step 3:  Push Changes to GitHub

Once you’ve updated the `assets.js` file, you can push your changes to your GitHub repository.

```bash
git add .
git commit -m "Customize portfolio"
git push origin main
```

## Step 4: Automatic Deployment via GitHub Actions

The GitHub Actions workflow will automatically handle the following tasks whenever you push to the main branch:

* **Update `vite.config.js`**: It will automatically set the correct `base` value for your GitHub Pages deployment.
* **Build the project**: Vite will create a production-ready build.
* **Deploy to GitHub Pages**: Your portfolio will be deployed to GitHub Pages.

You can view the live version of your portfolio at [`https://<your-username>.github.io/<repository-name>/`](https://<your-username>.github.io/<repository-name>/) once the action completes successfully.

# Optional: Local Development (If Needed)

If you want to run the project locally, follow these steps:

1. Install [Node.js](https://nodejs.org/en/download/prebuilt-installer) on your machine.
2. Install the dependencies:

    ```bash
    npm install
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

You can view your site locally at [`http://localhost:5173`](http://localhost:5173)


# Community & Feedback

We'd love to hear from you! Whether you have questions, ideas, or feedback, you can engage with the Reactfolio community in our GitHub Discussions. Share your experience, ask questions, or suggest features.

[Join the discussion](https://github.com/saqibbedar/Reactfolio/discussions)

By participating in the discussions, you’ll help shape the future of Reactfolio. Feel free to start a new conversation or respond to existing ones!

# Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. We welcome contributions from everyone!

# Sponsor Project ❤️

This project is completely free under the [`MIT LICENSE`](https://github.com/saqibbedar/Reactfolio?tab=MIT-1-ov-file). If you’ve found this project helpful and would like to support its development, you can consider buying me a coffee. Your support is greatly appreciated!

<div align="center">
<a href="https://www.buymeacoffee.com/saqibbedar"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=saqibbedar&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"></a></div>