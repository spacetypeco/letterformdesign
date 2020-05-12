# Quickstart

1. Follow the instructions to [install Jekyll](https://jekyllrb.com/docs/installation/).
2. Run `bundle install` to install this repository's dependencies.
3. Install [node](https://nodejs.org/en/).
3. Run `npm install pug -g`.

(students: feel free to reach out if something doesn't work)

## Running

After you have everything installed, in your terminal cd into the folder where the site is stored and run the following:

```
bundle exec jekyll serve --baseurl ''
```

This should give you the URL where the computer is running your site locally. View the site edits every time you refresh!

Note: For context, all the gallery pages are made via markdown files in the `_projects` folder, and the images link to `assets/img`. If you're using this template as is, those are the only two directories you'd need to update/change.

## Pushing changes

When you're done making changes, exit out of the active state in Terminal. Then (assuming your terminal is still pointing to the website directory), push the changes with this command:

```
jekyll build -d docs
```

# More Information 

## Directory Structure

```
└── _layouts       # page layouts
└── _includes      # page components
└── _projects      # project definitions in markdown
└── assets         # public assets (css, js, imgs)
└── index.md       # homepage
└── about.md       # about page
└── project.md     # page for an individual project
```

## Working structure

```
*.md
=> uses a layout in _layouts
   => uses components in _includes
```

Reusuable page components, such as the header, are defined in `_includes`. These page components are used as part of page layouts in `_layouts`.

When someone visits a page, the URL identifies which `*.md` file to use, such as index.md (for the homepage) or `about.md` for the about page. The markdown file refers to a layout, which tells us how to render the page.

`project.md` is a special layout that generates multiple pages based on the `_projects` collection. For each markdown file in `_projects`, a page is generated with this template and the associated metadata from the `_projects/*.md` file. In this way, the homepage can iterate over all `site.projects` and link to the generated `project.url` for each project.
