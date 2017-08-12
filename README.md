# Phaser Sandbox
## A skeleton for creating games in the Phaser-ES6-Webpack-LESS stack with Karma/Jasmine for testing

### Todo

- Prevent multiple Webpack servers from starting with Karma

### Installation
*If you're having cloning issues related to SSH, see "Cloning Issues" below.*

**NOTE:** It is recommended that you install [eslint](http://eslint.org/) in your editor. An `.eslintrc` config file is included that will lint your ES6 code using the [StandardJS](https://standardjs.com/) guidelines, even though StandardJS is not a dependency of this project.

From BASH:

First, install the `karma-cli` globally to make sure you have access to the Karma test runner:

Then, clone the repo and install all dependencies:

`git clone git@github.com:mjtischler/phaser-sandbox.git`

`cd phaser-sandbox`

`npm install`

You can spin up the Webpack development server with:

`npm run dev`

Webpack will automatically open your default browser at http://localhost:3000. Live updating is enabled, so changes to JS and LESS will be applied immediately. Warnings and errors will appear both in your terminal and in your browser console.

To start up the Karma server and automatically run your tests:

`karma start`

**NOTE:** To ensure the proper compilation of code, run this in a separate console a few seconds *after* running `npm run dev`.

#### To prepare a package for deployment:

`npm run deploy`

### Git workflow

To update your master branch, from BASH:

`git pull origin master`

#### Branch naming:

`git checkout -b {{TYPE}}/{{USERNAME}}/{{BRANCH_NAME}}_{{DATE}}`

Where `{{TYPE}} = 'feature' || 'bugfix'`

e.g.

`git checkout -b feature/mjtischler/adding_attack_reducer_function_080217`

If you haven't pushed to the branch (i.e. *on your first push*):

`git push origin {{BRANCH_NAME}}`

### Squashing commits
To keep our commit history clean and assist with code reviews via pull requests, we squash multiple commits. You can use this workflow for any combination of commits, including those that are made post-code review.

#### Why squash and rebase?
If we're working on a particular feature, we may want to save our progress with various commits. Or, post-code review, we may need to make changes to our branch. Ultimately, we only want the repo history to reflect our end result: a single commit that accomplishes the task at hand. This makes it much easier to traverse a repo's history when analyzing code progression, or if we need to perform a rollback.

#### Squash/rebase workflow
When making additional commits on a branch, add your changes with `git add .` and `git commit -m "{{COMMIT_MESSAGE}}"`. Then, from BASH:

`git rebase -i HEAD~{{x}}`

Where `{{x}} = total number of commits on branch`

Your default editor will open up and show:

```
pick bf5b87e Adding project dependencies
pick fbe5a31 More dependencies
pick xbr4a2l Final commit
```

To squash your commits into one, change each `pick` outside of the original commit to `s` (i.e. in this case, `pick bf5b87e Adding project dependencies`):

```
pick bf5b87e Adding project dependencies
s fbe5a31 More dependencies
s xbr4a2l Final commit
```

Save the file. Your editor will open another file:

```
# This is a combination of 3 commits.
# The first commit's message is:

Adding project dependencies

# This is the 2nd commit message:

More dependencies

# This is the 3rd commit message:

Final commit
```

Comment out all commit messages *except the original*:

```
# This is a combination of 3 commits.
# The first commit's message is:

Adding project dependencies

# This is the 2nd commit message:

# More dependencies

# This is the 3rd commit message:

# Final commit
```

If you haven't pushed your branch upstream:

`git push origin {{BRANCH_NAME}}`

If you're updating a branch and you've gone through the rebase workflow, it's ok to force push to your branch *as long as a teammate isn't working directly out of it*:

`git push --force origin {{BRANCH_NAME}}`

**NOTE:** The number of commits is relative to any previously squashed commits. If you've already squashed 3 commits with `git rebase -i HEAD~3` and add one other commit post-squash, then you run `git rebase -i HEAD~2`. In this scenario, `~2` represents both the original commit (including squashes) and the new commit.

### Pull requests
After your branch is ready for review, go to the root of the GitHub project and you'll see a green button: "Compare & pull request." Select it.

If necessary, add a "Description" under "Write" and select "Create pull request." Add reviewers if necessary (which should almost always be the case).

### Cloning Issues
If you're having SSH issues when cloning, execute from BASH:

`cat ~/.ssh/id_rsa.pub`

Copy that block from the **end of your email address** to the **first character**, ("s" in ssh-rsa) and head in your browser to:

https://github.com/settings/keys

Click "New SSH key", enter any title, and paste that key block into the "Key" section. Select "Add SSH key" from that modal to save the key.

### Credits
For the Phaser-ES6-Webpack project:

leandro cabrera <leandcabrera@gmail.com>

https://github.com/lean/phaser-es6-webpack
