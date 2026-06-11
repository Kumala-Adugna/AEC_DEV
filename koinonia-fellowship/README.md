# Koinonia Fellowship

Koinonia Fellowship is a static fellowship landing page built with HTML and CSS. The page introduces a faith-centered community platform where visitors can learn about Bible study groups, discipleship pathways, prayer support, and active study tracks.

## Overview

The project is designed as a polished front-facing page for a Christian fellowship community. It uses a warm visual style, scripture-focused content, image-based study cards, a call-to-action section, an embedded video area, and a registration form for visitors who want to connect with the community.

## Features

- Hero section with a faith-centered welcome message
- Fellowship feature section for scripture study, connection, and discipleship
- Call-to-action section for new visitors
- Introduction video area with styled controls
- Active study cards for Ephesians and spiritual growth topics
- Registration form for name, email, study track, and prayer requests
- Local image assets for Bible study and fellowship visuals
- Responsive-ready HTML structure using semantic sections and reusable CSS classes

## Project Structure

```text
koinonia-fellowship/
├── Images/
│   ├── ArmorofGod.png
│   ├── Biblestudy.png
│   ├── Ephesusimg.png
│   ├── JohnPatmos.png
│   ├── Readbible.png
│   ├── bestimg.png
│   ├── bgimage.png
│   └── bibleimg.png
├── koinonia.css
├── koinonia.html
└── README.md
```

## How to Run

Open `koinonia.html` directly in a browser.

No installation is required because this project uses plain HTML and CSS. The page also loads Font Awesome icons from a CDN, so an internet connection is needed for those icons to appear.

## Technologies Used

- HTML5
- CSS3
- Font Awesome CDN

## Main Sections

- `Hero`: introduces the fellowship platform and its mission.
- `Features`: highlights scripture exploration, community connection, and discipleship.
- `CTA`: encourages visitors to contact the fellowship team.
- `Video`: reserves space for an introduction video.
- `Programs`: displays active Bible study topics with image cards.
- `Registration`: collects visitor information, study interests, and prayer requests.

## Notes

This is currently a static front-end project. The registration form uses the action path `/api/fellowship/register`, but no backend handler is included in this folder yet. The video player references `video.mp4`, so that file should be added if the video section will be used.

## Future Improvements

- Add responsive media queries for smaller screens
- Connect the registration form to a real backend or form service
- Add the missing `video.mp4` introduction video
- Improve button actions for the contact and learn-more sections
- Add form validation and success/error messages
- Deploy the page with GitHub Pages
