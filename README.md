# Cristal Underwood — Author Website (v2)

A responsive, static website for author and audiobook narrator Cristal Underwood. **No Kickstarter fundraising or donation links appear anywhere in the published site.** Bailey Boo is featured as a book in development, rather than a fundraising campaign.

## Contents

- `index.html` — homepage: books, about Cristal, audiobook narration and contact placeholder.
- `ordinary-smordinary.html` — book page with retailer-search links (replace with verified direct book links).
- `bailey-boo.html` — Bailey Boo story information without fundraising solicitations.
- `assets/` — styles, navigation JavaScript and optimized illustration assets.
- `.nojekyll` — static-site setting for GitHub Pages.

The Bailey artwork is a cropped *concept illustration* from an earlier campaign graphic; all campaign text and calls to fund have been removed. The character shown near the author biography is an illustrated character from Ordinary Smordinary, **not a photo of Cristal**. Replace it with Cristal's approved author photograph if possible.

## Create Cristal's own FREE GitHub account (one-time action by Cristal)

1. Go to https://github.com/signup and create an account in Cristal's name using an email address she controls. Select **GitHub Free**. Complete email confirmation and any identity verification; enable two-factor authentication. **Do not send passwords or recovery codes through ChatGPT.**
2. Choose a memorable username such as `cristalunderwoodbooks`, **if available**. The exact username can be different.
3. While logged into Cristal's own account, go to https://github.com/new and create a **PUBLIC** repository whose name is exactly `<username>.github.io` (replace `<username>` with the real username, all lowercase). For example, if the username is `cristalunderwoodbooks`, use `cristalunderwoodbooks.github.io` as the repository name. Choose **Add README** if GitHub offers it; this does not interfere with the site.
4. Extract this ZIP on your computer. In the new repository, open **Add file → Upload files**, and upload the **contents inside** this folder (`index.html`, the other HTML pages, and the entire `assets` directory). Place `index.html` at the repository root, not in a nested folder. Confirm **Commit changes**. You can overwrite the initial README if GitHub asks, or omit README.md from the upload if you prefer.
5. Under the repo **Settings → Pages**, choose **Deploy from a branch**, select `main`, directory `/(root)`, then **Save**.
6. GitHub will provide the website address, usually `https://<username>.github.io/`. Pages can take up to about 10 minutes to publish after file changes.

**Publishing cannot be completed before the new GitHub account exists.** The connected GitHub account currently has access only to the unrelated VEIL repository. Do not use or change it for Cristal's site. If you want ChatGPT to help publish to Cristal's new repository through the connected GitHub app, Cristal must authorize the new GitHub account/repository connection first. Manual uploading is also free.

## Review before putting the site in front of readers

- Obtain Cristal's approval of her author biography, book descriptions, and mention of audiobook narration credits.
- Supply verified **direct** Amazon and Barnes & Noble book page URLs to replace generic retailer searches.
- Choose a public contact email or approved social-media account; the page currently says "Contact information coming soon".
- Consider a real, approved author headshot to replace the storybook character artwork.
- Only add a narration sample if you have permission to host that recording.
- Confirm whether the selected external audiobook retailer listings show Cristal as the narrator.

## Cost and control

GitHub Free and GitHub Pages hosting of a public static repository are free under GitHub's current terms and limits; no per-visitor credits, hosting subscription, or API key. The default `github.io` address is free. An optional custom domain must be purchased separately and renewed; **it is not required**. The files are plain HTML, CSS, JavaScript, and WebP images, so the site is portable and can be hosted elsewhere later. No form submissions, cookies, analytics, or paid services are configured.

The font uses Google Fonts for convenience; system font fallbacks are built in. The site's assets and HTML work from a local folder (double-click `index.html` to preview). To run a local server: `python -m http.server 8000` from the extracted folder.
