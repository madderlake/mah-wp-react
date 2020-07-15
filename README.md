## Server Side Rendered / Code Split React + Wordpress REST API

This repo is my WIP project for pairing the WP Rest API with a server-side rendered and React client. Integrating GraphQL is my next step. I used Keen's boilerplate to get started in early 2019.

Wordpress, MySQL, PHP and PHPMyAdmin are all provided by Docker which makes it easy to spin up WP sites both for local development and for production on hosts like DigitalOcean.

### ACF Flexible Content Layouts

I wanted to make sure that I could duplicate, and expand on, my extensive work using ACF to create layouts and avoid the CRUFT of page builders in WP. That is the current focus of this iteration of the project.

### Styling

This project uses Webpack to compile SASS to css. To save time, I've used Bootstrap as a foundation, with component level overrides.

### Next Steps and TODO's

- Integrate GraphQL
- ITCSS, BEM
- Deploy the site to serverless ENV
- Add design and content
- Additional components
  - forms
  - sliders (carousel)
  - hero component
