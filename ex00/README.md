
# Chapter IV — Exercise 00: Personal Portfolio

## Project Overview

This project is a responsive personal portfolio website built from scratch
using HTML5, CSS3, and JavaScript ES6+.

The website introduces the student, presents learning skills and projects,
shares hobbies, and provides a contact form.

## Files and Directories

```text
ex00/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── profile.jpg
```

## Required Sections

- Header and navigation bar
- About Me section with a profile photo
- Skills grid
- Project Showcase covering Projects 00–03
- Hobbies section
- Contact form
- Footer

## Technologies Used

- HTML5 for semantic structure and content
- CSS3 for styling, Flexbox, CSS Grid, and responsive media queries
- JavaScript ES6+ for DOM interaction and event handling
- Git for version control

No frameworks, templates, or UI libraries are used.

## Responsive Design

The layout uses Flexbox and CSS Grid to arrange content.
CSS media queries adjust the navigation, cards, contact form,
and other layouts for smaller screens.

## Mandatory JavaScript Feature: Theme Switcher

The Dark Mode button changes the website between light and dark themes.

The JavaScript adds or removes the `dark-mode` class on the `<body>` element.
CSS custom properties define the colors used throughout the page, so changing
the class changes the colors dynamically.

The selected theme is saved in `localStorage` when browser storage is available.

## Complete Event Lifecycle

The event lifecycle for the theme switcher is:

1. **User action:** The user clicks the Dark Mode button.
2. **Event firing:** The browser fires a `click` event on the button.
3. **JavaScript callback:** The callback registered by `addEventListener`
   executes.
4. **DOM mutation:** JavaScript toggles the `dark-mode` class on the `<body>`
   element using `classList.toggle()`.
5. **CSS update:** The browser recalculates the styles. The CSS variables
   declared under `body.dark-mode` override the light-theme variables, and
   the visible colors change.
6. **Button update:** JavaScript changes the button label, icon, and
   `aria-pressed` attribute to reflect the current theme.

Example:

```javascript
themeToggle.addEventListener("click", function () {
    const isDark = !document.body.classList.contains("dark-mode");
    applyTheme(isDark);
});
```

The user action triggers the browser event, the callback runs, the DOM class
changes, and CSS updates the rendered page.

## Contact Form

The form checks that required fields are completed and that the email address
has a valid format. JavaScript prepares a message using a `mailto:` link.

This is a front-end demonstration. It does not send messages to a backend
server or store submitted information.

## Before Submission

- Verify that `assets/profile.jpg` exists.
- Replace the example email address with the intended contact email.
- Personalize the About Me and Hobbies content.
- Update project descriptions to accurately reflect Projects 00–03.
- Test the theme switcher, contact form, navigation, and mobile layout.
- Verify all required files are inside `ex00/`.
