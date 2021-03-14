# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2021-03-12
### Added
- Start event date
- An endpoint to get points in csv file
- The end date of the event
- Date to timeout points
- View for adding new points
- Snackbars for forms messages
- Point delete endpoint
- Time start and time end for timeout points
- Start page for admin
- Scoreboard view for admin
- User list endpoint
- Actual map position to cookies
- Point details above map
- Success message in set map position view
- Admin panel
- New error view appearance
- Date and datetime input field
- Map refresh time to event edit view page
- Map refresh time in db
- Map refresh timer
- Clear sessions on startup
- Translation to the app
- Set map position view
- New start view appearance
- Edit event view
- Show collected point on map
### Fixed
- Correct error messages on sign in
- Point id should be easy to read
- Make point id unique
- Collecting point with wrong point id makes pending
- Border is above main button in footer
- Collect point what is collected
- Fix set default map position
- Sign out button is not visible on small devices
- Fix registration form while event id is wrong
- Admin should see all points on map
- Fix select field
- Page title is not changing
- Fix collected points appearance
- Show message on empty collected points table
- Change points colors on map
- User controller improvements
- Long request on production
- Remove forms from organisms
- Check and fix security of endpoints
- Correct the styles according to Figma
- Correct button appearance according to Figma
- React on errors correctly
- Fix message appearance after collecting point
- Use better way to change map theme
- Generate bundles with hash only for production
- Use app version from package json in webpack common js
  

## [1.1.0] - 2020-10-23
### Added
- Functionality to set default zoom and last position for map
- Login automatically in development mode
- Chosen theme to cookies
- Documentation for own map styles
- Functionality to download icon fonts not by SVN
- Functionality for checking user permissions
- AccountType field in user response
- Swagger UI
### Fixed
- Fix collect-point functionality
- Fix appearance bugs
- Update frontend api mock
- Change icons collection
- Change palettes of colors

## [1.0.0] - 2020-06-08
### Added
- Database in MongoDB.
- REST API for events, points, points categories, users.
- User management (E-mail and session service).
- Example data for first production event.
- SSL.

- Display OpenLayers map with points to collect by users.
- Possibility to collect points.
- Temporary points.
- Dark mode.
- Auto update.
- About view.
- Fancy text fields.
- EsLint.
- Vue routing.
