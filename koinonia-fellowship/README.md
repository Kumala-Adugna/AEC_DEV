# Koinonia Fellowship

Koinonia Fellowship is a static HTML and CSS website for a Christian fellowship community. It presents Bible study opportunities, discipleship pathways, small group connection, prayer support, and a simple registration form for visitors who want to get involved.

## Project Summary

This project is built as a polished front-facing fellowship page. The design uses warm earth tones, scripture-focused imagery, clear section structure, and study cards that connect visitors to helpful Bible study resources. It is currently a front-end only project, so it can be opened directly in a browser without installing dependencies.

## Features

- Sticky navigation bar with fellowship links and a call-to-action button
- Hero section with a faith-centered mission message
- Feature section for scripture study, fellowship connection, and discipleship
- Call-to-action section for new visitors
- Introduction video area with styled action buttons
- Active study cards focused on Ephesians and spiritual growth
- External resource links for BibleProject, Deeper Christian, and Enduring Word
- Registration form for full name, email, study track, and prayer requests
- Footer with brand message, social links, study resources, and fellowship links
- Local image assets for Bible study, discipleship, and fellowship visuals

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

Open `koinonia.html` in a web browser.

No build step or package installation is required. The project uses plain HTML and CSS. Font Awesome icons load from a CDN, so an internet connection is needed for the icons to display.

## Technologies Used

- HTML5
- CSS3
- Font Awesome CDN

## Page Sections

| Section | Purpose |
| --- | --- |
| Navigation | Provides quick access to main fellowship areas. |
| Hero | Introduces the platform and its discipleship mission. |
| Features | Highlights scripture exploration, fellowship, and guided discipleship. |
| CTA | Encourages visitors to connect with the fellowship team. |
| Video | Provides space for an introduction video. |
| Programs | Shows active Bible study tracks with linked resources. |
| Registration | Collects visitor details, study interest, and prayer requests. |
| Footer | Shares brand information, social links, and study resources. |

## Form Details

The registration form includes:

- Full name
- Email address
- Study track selection
- Prayer request or message

The form currently submits with `method="POST"` to:

```text
/api/fellowship/register
```

A backend endpoint is not included in this folder yet, so the form action is prepared for future integration.

## External Resources

The page links to several study resources:

- BibleProject
- Deeper Christian
- Enduring Word
- Bible Gateway
- Navigators Bible study guide

## Current Limitations

- The page is static and does not include JavaScript behavior.
- The form does not save submissions without a backend.
- The video section references `video.mp4`, but that file is not included yet.
- Some navigation and footer links are placeholders.
- Mobile responsiveness can be improved with media queries.

## Future Improvements

- Add responsive styles for tablets and phones
- Connect the form to a backend or form service
- Add client-side form validation
- Include the missing introduction video file
- Replace placeholder navigation links with real section anchors
- Add smooth scrolling for internal page navigation
- Deploy with GitHub Pages

## Author

Created as part of the AE Dev Summer Camp web projects.
