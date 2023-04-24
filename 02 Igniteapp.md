## what is `NPM` ?

- `NPM` is a package executor. It's not the Node Package Manager, although it's commonly referred to as such. NPM manages dependencies of other packages.

## what is parcel/Webpack ? why do we need it ?

- Parcel and Webpack are both open-source module bundlers that allow us to manage files such as JavaScript, HTML, and CSS. They are pre-configured tools that help build projects, and we can use them directly in our project or framework. Although they are the same thing, it depends on the user which one to use for a specific purpose.

## what is `.parcel-cache` ?

- `.parcel-cache` is a file that is automatically generated inside the root folder. It helps to regenerate builds faster than before by caching files in a folder. When we need to build again, Parcel does not have to start from scratch but instead uses the cached file.

## what is `NPX` ?

- `NPX` stands for Node Package Executor. It is used to install any package not globally. It installs the particular package and does not install dependencies again in the system. First, it checks the dependency in the system. If it's already present, then it installs the particular package only.

## what is difference between `dependencies` and `dev-dependencies` ?

- `Dependencies` are files that are required in the production environment. They are typically installed with the `--save` or `--save-prod` flag, which installs the package in the dependencies folder. Packages like `mongoose` and `express` are required in production to run the application.
- On the other hand, `dev-dependencies` are packages that are required for development and testing purposes. They are typically installed with `--save-dev` and added to the `dev-dependencies` section. Jest, for example, is required only in the development environment. Understanding the difference helps avoid unnecessary package installs in the system, keeping the application from bloating up.

## what is Tree-shaking ?

- Tree shaking is a term used in JavaScript to remove unused dead code from an application and improve its performance. This technique reduces the overall file size. Popular frameworks such as React and Vue use tree shaking to achieve better performance.

## what is Hot Module Replacement ?

- Hot module Replacement(HRM), is a feature in web development where, `vue`, `React`, `Angular` is using this feature. It will not refresh the whole page but it will just refresh the particular components. It will improve the speed of the development and efficiency. This is very helpful for large scale application.

## what is `.gitignore` ? what should we add and not to add in it ?

- files that can be regenerate, are require the add in `.gitignore`. Files that are added inside the gitignore will not be tracked, it is used to keep the i formation safe.

- Some common files and directories to add to .gitignore include:

- - .DS_Store (macOS specific file)
- - node_modules/ (directory where Node.js packages are installed)
- - \*.log (log files)
- - \*.env (environment variables)
- - \*.swp (temporary files created by Vim editor)
- - \*.pyc (compiled Python files)
- Some files and directories that should not be added to .gitignore include:

- - Source code files that are essential for the project
- - Configuration files that are necessary for the project to run
- - Images, videos or other assets that are essential for the project
- - Documentation files that are essential for the project


