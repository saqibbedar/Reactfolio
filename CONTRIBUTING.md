# Contributing to Reactfolio

Thank you for considering contributing to Reactfolio! We welcome contributions from everyone. By contributing to this project, you help improve it and get your contributions recognized on ORCID. This guide will help you get started with the contribution process.

## Project Overview

Reactfolio is a customizable portfolio template designed for developers looking to showcase their work with style and simplicity. The project has two main branches:

- **main**: Handles deployment with Node.js installation and automatic deployment to GitHub Pages using GitHub Actions.
- **docker-deploy**: Handles deployment using Docker and automates the process with GitHub Actions.

## How to Contribute

### 1. Fork the Repository

Start by forking the repository to create your own copy on GitHub.

1. Click the **Fork** button at the top-right corner of the repository page.
2. This will create a copy of the repository under your GitHub account.

### 2. Clone the Forked Repository

Clone the forked repository to your local machine.

```sh
git clone https://github.com/<your-username>/Reactfolio.git
cd Reactfolio
```

### 3. Create a New Branch

Create a new branch for your changes. Make sure to base your branch on the `main` or `docker-deploy` branch, depending on the nature of your changes.

```sh
git checkout -b <your-branch-name> main
# or
git checkout -b <your-branch-name> docker-deploy
```

### 4. Make Your Changes

Make the necessary changes to the codebase. Ensure that your changes are well-documented and tested.

### 5. Commit Your Changes

Commit your changes with a clear and descriptive commit message following the conventional commit format.

```sh
git add .
git commit -m "feat: add new feature description"
```

### 6. Push Your Changes

Push your changes to your forked repository.

```sh
git push origin <your-branch-name>
```

### 7. Open a Pull Request

Open a pull request (PR) from your branch to the `main` or `docker-deploy` branch of the original repository.

1. Go to the original repository on GitHub.
2. Click on the **Pull requests** tab.
3. Click the **New pull request** button.
4. Select your branch and the target branch (`main` or `docker-deploy`).
5. Provide a clear and descriptive title and description for your PR.
6. Click **Create pull request**.

## Reviewing and Merging Pull Requests

### For Maintainers

When a pull request is submitted, follow these steps to review and merge it:

1. **Review the Changes**: Ensure the changes are well-documented, tested, and follow the project's coding standards.
2. **Test the Changes**: Pull the changes locally and test them to ensure they work as expected.
3. **Merge the PR**: If the changes are satisfactory, merge the PR into the appropriate branch (`main` or `docker-deploy`).

### Keeping Both Branches Updated

Since we have two branches (`main` and `docker-deploy`) that serve the same purpose but with different deployment processes, it's important to keep both branches updated with the latest changes.

1. **Merge Changes into `main`**: First, merge the PR into the `main` branch.
2. **Sync `docker-deploy` with `main`**: After merging into `main`, switch to the `docker-deploy` branch and pull the latest changes from `main`.

```sh
# Switch to docker-deploy branch
git checkout docker-deploy

# Pull changes from main branch
git pull origin main

# Push the updated docker-deploy branch
git push origin docker-deploy
```

By following these steps, you ensure that both branches remain in sync and up-to-date with the latest features and fixes.

## Guidelines for Contributors

- **Follow Coding Standards**: Ensure your code follows the project's coding standards and conventions.
- **Write Clear Commit Messages**: Use the conventional commit format for your commit messages.
- **Document Your Changes**: Update the documentation to reflect any changes you make.
- **Test Your Changes**: Ensure your changes are thoroughly tested before submitting a pull request.

Thank you for contributing to Reactfolio! Your contributions help make this project better for everyone.

### Summary

1. **Fork the Repository**: Create a copy of the repository under your GitHub account.
2. **Clone the Forked Repository**: Clone the repository to your local machine.
3. **Create a New Branch**: Create a new branch for your changes based on `main` or `docker-deploy`.
4. **Make Your Changes**: Implement your changes and ensure they are well-documented and tested.
5. **Commit Your Changes**: Use a clear and descriptive commit message following the conventional commit format.
6. **Push Your Changes**: Push your changes to your forked repository.
7. **Open a Pull Request**: Submit a pull request to the `main` or `docker-deploy` branch of the original repository.

### Reviewing and Merging Pull Requests

1. **Review the Changes**: Ensure the changes are well-documented, tested, and follow the project's coding standards.
2. **Test the Changes**: Pull the changes locally and test them.
3. **Merge the PR**: Merge the PR into the appropriate branch (`main` or `docker-deploy`).

### Keeping Both Branches Updated

1. **Merge Changes into `main`**: Merge the PR into the `main` branch.
2. **Sync `docker-deploy` with `main`**: Switch to the `docker-deploy` branch, pull the latest changes from `main`, and push the updated `docker-deploy` branch.

By following these guidelines, you ensure a smooth contribution process and help maintain the quality and consistency of the Reactfolio project.