## Getting started with TypeScript

### What is programming?

- Process of designing and creating instructions to make computers perform tasks
- Programmers use coding languages (e.g. TypeScript, Python) to write the instructions
- Programming is about solving problems by decomposing them into smaller steps
- Once programs are written, they are executed by the computer hardware
- Applications (executing programs) power web-sites, mobile apps, AI, etc.
- We’ll use the terms “programmer” and “developer” interchangeably
  - Developer is _sometimes_ used to refer to someone with a wider skillset

### JavaScript

- JavaScript (JS) is a high-level, interpreted, scripting language
- Primarily, but not exclusively, used in web development
- Very popular
- Extended ecosystem of tools and libraries
- Created in 1995 for use in the Netscape browser
- ECMAScript (ES) is a standard for JS
- Standard updated annually
- ES2015 (also know as ES6) considered to be the start of “Modern JS”

### TypeScript

- TypeScript (TS) is a superset of JS that adds static type definitions
- Introduced by Microsoft in 2012
- Designed to appeal to developers familiar with languages such as C\#
- Static types allow developers to define types for variables, which enhances code reliability and supports more advanced tooling
- TS is transpiled to JS
  - It’s not run natively by browsers

### Node

- Node is a runtime that allows JS to be executed server-side, moving it beyond the browser
- Based on Chrome’s V8 JS engine
- Single-threaded and non-blocking nature ensure high concurrency and performance on I/O-heavy workloads
- Popular for developing Web APIs
- Most of the developer tooling in the JS ecosystem is built on Node

### Atwood’s Law

> Any application that can be written in JavaScript, will eventually be written in JavaScript. — Jeff Atwood

### Long-Term Support releases

- Long-term support (LTS) releases of Node guarantee that critical bugs will be fixed for 30 months
- Current (as opposed to LTS) releases are guaranteed support for six months
- Current releases give library developers time to check/update their libraries
- After six months, even-numbered releases move to LTS and odd-number releases fall out of support
- Production applications should only use [Active or Maintenance LTS releases](https://nodejs.dev/en/about/releases/)

### Node Package Manager

- Node Package Manager (npm) is the default package manager for Node
- Used to install and manage software packages
  - Registry provides access to a vast public collection of libraries and tools
- Handles complex package dependencies
- Used to automated development tasks
- Alternative package managers include [yarn](https://yarnpkg.com) and [pnpm](https://pnpm.io)

### Hands-on: Explore the npm registry

Browse to the [npm registry](https://www.npmjs.com) and search for a topic that interests you (e.g. electricity, renewables). Marvel at the sheer number of packages.

Examine

- When they were last published
- Number of weekly downloads
- Quality of documentation
- Who published them?

How can we tell the quality packages from the dross?

### Alternatives to Node

#### [Bun](https://bun.sh)

- JS runtime based on Apple’s JavaScriptCode
- Focused on high performance
- Drop-in Node compatibility
- TS is a first-class citizen

#### [Deno](https://deno.com)

- By the creator of Node
- Designed to address design problems in Node
- Node-compatibility introduced
- TS is a first-class citizen

### Installing Node Version Manager

Node Version Manager (nvm) allows multiple versions of Node to be installed and used (e.g. for compatibility reasons).

[Install nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Each version of Node installed via nvm is isolated, so you will have to reinstall any global packages when you install a new version.

### Installing Node

Node can be [installed directly](https://nodejs.org) or via nvm.

Install the latest LTS release via nvm.

```bash
nvm install --lts
```

Install the latest (current) release via nvm.

```bash
nvm install node
```

Install a specific version of Node.

```bash
nvm install 20.9.0
```

Or…

```bash
nvm install 20
```

### Managing Node installations via nvm

List available Node versions.

```bash
nvm ls-remote
```

List installed Node versions.

```bash
nvm list
```

Uninstall a version of Node.

```bash
nvm uninstall 20.9.0
```

Switch the active version of Node.

```bash
nvm use 20.9.0
```

### Hands-on: Use nvm

Check your installed/active version of Node.

```bash
node --version
```

Do you have a version installed? Is it an LTS release? Is it the latest release?

Do the following.

- List the remote versions of Node available
- What are the latest LTS and current versions?
- Install version 20.0.0
- Check the version of Node that is active
- Switch back to your previous version
- Uninstall version 20.0.0

### Installing TypeScript

Use npm to install TypeScript. The tsx package makes it easier to run TypeScript applications written for Node. The packages are installed globally so we can use them across all our applications.

```bash
npm install -g typescript
npm install -g tsx
```

Only a select group of packages should be installed globally—packages that are truly required across multiple applications. Global packages run the risk of conflicting with the requirements of specific applications and tools.

You can install TypeScript locally to a project, if required.

Check the version of TypeScript installed.

```bash
tsc --version
```

### Integrated Development Environments

- Node applications can be written in Notepad…but don’t do that
- An Integrated Development Environment (IDE) is an application that consolidates tools required for developing software
- Provides advanced editing capabilities, such as autocomplete
- Includes tools to compile, build, package and run applications
- Offers a debugger to examine code during execution
- Supports source control and automated testing
- May support more advanced activities, such as profiling

### Visual Studio Code

Visual Studio Code (VS Code) is a very popular IDE.

- Developed by Microsoft
- Free and (mostly) open source
- Not related to Visual Studio
- Very popular with JS, TS and Python developers
- Enhanced by an extensive set of extensions

### Hands-on: Visual Studio Code shortcuts

A good developer knows their editor inside and out. Effective use of shortcuts can make you _much_ more productive.

- Open VS Code and display the shortcuts reference via (application menu) Code \> Settings (File \> Preferences on Windows/Linux) \> Keyboard Shortcuts
- Use ⌘K ⌘R on macOS to open the shortcut reference
- Toggle Zen mode by using ⌘K Z on macOS
- Use ⌘+Shift+P to open the Command Palette. Search for some obvious commands (e.g. format document)

There are many resources that cover how to get more proficient with VS Code (e.g. [\[25 Most Used VS Code Shortcuts And More + Cheat Sheet]](https://www.crio.do/blog/vs-code-shortcuts/)).

### Alternatives to Visual Studio Code

- [WebStorm](https://www.jetbrains.com/webstorm/)
- [Sublime Text](https://www.sublimetext.com)
- [Eclipse](https://www.eclipse.org/ide/)
- [Komodo IDE](https://www.activestate.com/products/komodo-ide/)

### Hands-on: Preparing the development environment

- Install nvm
- Install the LTS release of Node
- Install TypeScript
- Install tsx
- Install VS Code

### Hands-on: Our first application

All code developed in the course will be in `~/course/handson/`.

Create a subfolder called `helloworld` (i.e. `~/course/handson/helloworld/`).

Within this folder, create a file called `app.ts` and add the following code to it.

```ts
console.log("Hello from LTREE!");
```

Open a terminal and execute the script.

```bash
tsx app.ts
```

### TypeScript configuration file

You can control the TS compiler via settings in a `tsconfig.json` file.

This is placed in the root folder of your application.

The following is a basic example.

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "nodenext",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "types": ["node"]
  }
}
```

It directs the compiler to generate ES2017 JS in a `dist/` subfolder. A source map will be produced to aid with debugging. More robust type checking is also enabled.

### Hands-on: Running applications in Visual Studio Code

- Add the previous `tsconfig.json` file to your application
- Open the `app.ts` tab in the editor
- Press `^F5` to run the application
- Review the output in the Debug Console pane

### Hands-on: Review the compiled JavaScript

- Open `dist/index.js` in VS Code
- Note that the generated JS is identical to the TS
- TS is a subset of JS, and, as we aren’t using types in this code, our TS is JS

### Hands-on: Print your name and e-mail address

Create an application, called `myinfo`, that displays your name and e-mail address.

### Completing future exercises

Note that, for the remainder of the course, you won’t be instructed to create a new folder and index.js file for each exercise you tackle.

You may wish to create new folders for each exercise.

Alternatively, you can create an `exercise` folder, with an index.js file (and tsconfig.json file) in it, and keep replacing the contents of the index.js file with your new code. This will result in less setting up, but you will, obviously, lose your previous work.

The choice is yours.
