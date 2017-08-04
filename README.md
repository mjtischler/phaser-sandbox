# Phaser Sandbox
## A skeleton for creating games in the Phaser-ES6-Webpack-LESS stack

### Todo
* Add a front-end testing framework (JS)

### Installation
*If you're having cloning issues related to SSH, see "Cloning Issues" below.*

From BASH:

`git clone git@github.com:mjtischler/phaser-sandbox.git`

`cd collabogram`

`npm install`

`npm run dev`

Webpack will automatically open your default browser at http://localhost:3000. Live updating is enabled, so changes to JS and LESS will be applied immediately. Warning and errors will appear both in your terminal and in your browser console.

### Git workflow

To update your develop branch, from BASH:

`git pull origin develop`

#### Branch naming:

`git checkout -b {{TYPE}}/{{USERNAME}}/{{BRANCH_NAME}}_{{DATE}}`

Where `{{TYPE}} = 'feature' || 'bugfix'`

e.g.

`git checkout -b feature/mjtischler/adding_attack_reducer_function_080217`

If you haven't pushed to the branch:

`git push origin {{BRANCH_NAME}}`

### Rebasing
To keep our commit history clean and assist with code reviews via pull requests, we rebase multiple commits. You can use this workflow for multiple commits, including those that are made post-code review.

When making additional commits on a branch, add your changes with `git add .` and `git commit -m "{{COMMIT_MESSAGE}}"`. Then, from BASH:

`git rebase -i HEAD~{{x}}`

Where `{{x}} = total number of commits on branch`

Your default editor will open up and show:

```
pick bf5b87e Adding project dependencies
pick fbe5a31 More dependencies
pick xbr4a2l Final commit
```

Change each `pick` outside of the original commit to `s` (i.e. in this case, `pick bf5b87e Adding project dependencies`):

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

If you haven't pushed to the branch:

`git push origin {{BRANCH_NAME}}`

If you're updating a branch and you've gone through the rebase workflow:

`git push --force origin {{BRANCH_NAME}}`

### Pull requests
After your branch is ready for review, go to Bitbucket and select "Pull requests" from the left-side menu.

Click "Create pull request" in the upper right hand corner.

If necessary, add a "Description". Be sure to check the "Close branch" box below the "Reviewers" input field, and click "Create pull request."

### Cloning Issues
If you're having SSH issues when cloning, execute from BASH:

`cat ~/.ssh/id_rsa.pub`

Copy that block from the **end of your email address** to the **first character**, ("s" in ssh-rsa) and head in your browser to:

https://github.com/settings/keys

Click "New SSH key", enter any title, and paste that key block into the "Key" section. Select "Add SSH key" from that modal to save the key.
