# IceFlow · Brand & Product Website

A responsive, multi-page frontend for IceFlow, with a brand homepage, catalog, collection page, and dedicated Flow, Recovery, and Zen pages.

## Highlights

- Shared visual styling across brand and product pages.
- Mobile navigation controlled with JavaScript.
- Swiper-based carousels, including an autoplay results slider.
- A viewport-aware carousel that initializes below 1000px and is destroyed on larger screens.
- Responsive image switching for desktop and mobile layouts.
- Locally stored fonts and image assets.

## Stack

HTML5 · CSS3 · JavaScript · Swiper 11

This is a static website. No package installation or build step is required.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Brand introduction and overview |
| `catalog.html` | Catalog |
| `collection.html` | Collection page |
| `flow.html` | Flow page |
| `recovery.html` | Recovery page |
| `zen.html` | Zen page |

## Preview locally

With Python 3 installed:

```bash
git clone https://github.com/AlexElaryan/iceflow-new.git
cd iceflow-new
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). On Windows, use `py -m http.server 8000` if `python3` is unavailable.

Swiper is loaded from a CDN and needs an internet connection.

## Code map

| Path | Responsibility |
| --- | --- |
| `style/style.css` | Shared styling and responsive layouts |
| `script/script.js` | Mobile-menu toggle |
| `images/` | Page imagery, including responsive variants |
| `fonts/` | Local font files |
| Root HTML files | Page content and page-specific interactions |

Carousel initialization and viewport-dependent behavior are implemented in inline scripts within the HTML pages.

## Scope

The repository contains the presentation layer and browser-side interactions. It does not include a server application or database.

## Developer

[Alex Elaryan](https://github.com/AlexElaryan) · [Portfolio](https://alexelaryan.github.io/portfolio/) · [LinkedIn](https://www.linkedin.com/in/alex-elaryan-2398642b3/)
