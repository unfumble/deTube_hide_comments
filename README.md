# deTube - Hide All Comments

**deTube - Hide All Comments** is a userscript to completely hide the YT comment section.<br>
It's ideal for users who want a cleaner, less distracting interface without installing bloated extensions or blocking other features.

## Why use it?

* **Removes the entire comment section** instantly
* **No YouTube login or extra config required**
* **Minimal and efficient code**, optimized for performance
* **Works automatically on all video pages**
* **Supports YouTube’s single-page navigation (SPA)**

## How the script works

This userscript looks for the `<ytd-comments id="comments">` element, which is the container for all YouTube comments. As soon as it loads, the script sets its display to `none`, effectively removing it from view.

* Repeats the check using `requestAnimationFrame` until the element exists
* Observes dynamic navigation using `MutationObserver`
* Runs on desktop, mobile, and embedded YouTube URLs
* Does **not** alter other YouTube UI elements

## Supported Browsers

* Firefox
* Edge
* Brave
* Safari
* ~~Chrome~~

## Installation

To use this userscript, you’ll need a userscript manager extension installed in your browser:

* [Violentmonkey (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
* [Tampermonkey (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
* [Greasemonkey (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
* [Violentmonkey (Chromium-based)](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
* [Tampermonkey (Chromium-based)](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

### Steps:

1. Install a userscript manager from the list above.
2. Create a new userscript in your manager.
3. Copy and paste the contents of `deTube_hide_comments.js` from this repository.
4. Save the script.
5. Reload any open YouTube tabs.

The comment section will now be hidden on all YouTube videos.

## Technical Notes

```
deTube_hide_comments/
├── deTube_hide_comments.js  # Main userscript file
├── README.md                # This file
└── LICENSE                  # MIT
```

* Runs only on `watch` pages (`youtube.com/watch*`)
* Uses `requestAnimationFrame` for efficient polling until comment container is found
* Uses `MutationObserver` to catch YouTube’s dynamic navigation events
* Does **not** send or receive any data
* Does **not** require or store any user data

## License

MIT.

This script is provided "as is", without warranty of any kind.
**Use at your own risk.** You are responsible for your own usage and adherence to YouTube's Terms of Service.
