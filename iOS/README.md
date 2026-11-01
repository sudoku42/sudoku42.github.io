# iOS pages

Static pages at `https://sudoku42.com/iOS/` for sudoku42 on iPhone and iPad. The app is live on the App Store (app ID `1529294991`, bundle ID `com.mriezebosch.sudoku`).

- `index.html`: download page with the App Store badge and a share button.
- `preview.html`: screenshots of the app with the App Store badge and a share button.
- `app.js`: share and copy-link behaviour, shared by both pages.
- `style.css`: layout for both pages.

No build step, cookies, analytics SDK, or mailing platform. The App Store link is `https://apps.apple.com/app/id1529294991`; update it there and in `../index.html` if the app ID changes.

The iOS waitlist has closed. The Firebase `waitlist` function and `/ios-waitlist` data are no longer used by these pages. Before removing them, send the launch notification if you still intend to, then delete the list as stated in `../privacy/index.html`.

## Local preview

From the web repository, run `python3 -m http.server 8000` and open `http://localhost:8000/iOS/`.
