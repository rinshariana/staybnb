---
name: airbnb-icons
description: Explore Airbnb broadly within a requested site area, including menus and popups, and extract original icon assets into Staybnb public/icons with descriptive names. Save assets by default; replace app icons only when requested.
---

# Airbnb icons for Staybnb

Visit Airbnb in a real browser, explore the requested area, and save its original icon assets to `frontend-react/public/icons/`, relative to the Staybnb repository root. Read the project's applicable `AGENTS.md` instructions. For beginner-facing usage instructions, see [the guide](../../../docs/airbnb-icons-guide.md).

## Scope and browser access

- Honor any area, URL, device size, or icon subset the user supplies. An area such as “listing details” means broad exploration within that area, not just its initial screen.
- If no area is specified, start with the public accommodation homepage, search/results, and one representative listing. State this scope and proceed. Do not attempt an unlimited crawl of every listing, location, or Airbnb product.
- Use an available browser tool that supports interaction and inspection. Follow that tool's instructions; load the Playwright skill if using terminal-based Playwright. DOM inspection is acceptable; opening visible DevTools is not required unless requested.
- If browser access is unavailable, explain what is missing and ask for access rather than inventing assets. If login, CAPTCHA, or an access restriction blocks a branch, report it and continue accessible branches. Do not create accounts or bypass access restrictions.

## Explore the area broadly

Keep a small coverage checklist while exploring. Inspect the page visually and scroll through it; a single snapshot or static HTML fetch is insufficient.

- Open relevant menus, dropdowns, popups, dialogs, tooltips, tabs, accordions, “show more” sections, galleries, and overflow controls. Scroll inside overlays and switch their relevant tabs or panels too.
- Explore relevant search, filter, date, guest, amenity, navigation, and informational-message states where present. Inspect hover, selected, expanded, and disabled states when they reveal different icon artwork.
- Do not dismiss a popup or message before inspecting its icons. Include message banners and notification dialogs encountered in scope. Opening a messaging interface does not authorize sending a message.
- Follow branches that reveal new controls or icon families. Sample repeated structures instead of opening every equivalent listing or date. Include mobile-only controls when requested or when a responsive layout exposes a materially different icon set.
- Use reversible UI interactions to reveal states. Do not send messages, submit bookings, enter payment details, or change an account merely to reveal an icon. Record branches that require such actions as unvisited.
- Stop when the relevant reachable branches have been checked and repeated structures yield no new icons. Track blocked or unexplored branches; do not claim complete coverage of inaccessible states.

## Identify and extract original assets

Inspect the actual rendered element and its asset references, including nested SVGs, SVG sprite references, images, picture/srcset sources, and image URLs used by CSS backgrounds. Extract icons, not listing photos, avatars, or other unrelated imagery.

- **Inline SVG:** Save a standalone SVG, preserving its viewBox, geometry, fills, strokes, and required namespace. Include any referenced symbols, gradients, masks, or clip paths so it works without the source page. Resolve inherited styling needed to preserve appearance. Do not blindly save a wrapper with a broken external `<use>` reference.
- **Image-backed icon:** Retrieve the original observed asset, including SVG, PNG, WebP, AVIF, GIF, or JPEG as applicable. Preserve the actual format and use its matching extension; renaming an extension is not conversion. Prefer an appropriate original resolution over a screenshot. Decode a data URL when it is the original asset source. An image referenced by a CSS background is still an image-backed icon.
- **CSS-drawn or icon-font glyph:** Skip by default. Only attempt to save one when the user explicitly requests it. If the user has not specified how to save or convert it, ask how to proceed before extracting that icon; continue independent SVG/image work while waiting. Do not silently rasterize, trace, or substitute it.
- Do not redraw icons, use an icon library as a substitute, or treat a screenshot as the original asset. If an asset cannot be extracted with the available tools, report it.

## Save and name

- Create `frontend-react/public/icons/` if needed. Use descriptive lowercase kebab-case filenames based on meaning in Staybnb, such as `wifi.svg`, `free-parking.webp`, or `chevron-left.svg`, rather than Airbnb class names, hashes, or download IDs.
- Keep visually distinct variants when useful: for example, `heart-outline.svg` and `heart-filled.svg`. Reuse one file for identical artwork found in several places. Inspect existing files first; do not overwrite a different existing asset or remove unrelated files. Choose a meaningful variant name if there is a collision.
- Preserve the source artwork. Make only changes needed for standalone use; do not recolor, resize, optimize away details, or convert formats unless asked. Do not include source-page scripts, event handlers, or unrelated markup.
- Keep a source mapping for the completion report: saved path, meaning, source page/area and state, and any changes needed to make the asset standalone. Do not store private messages, cookies, or signed access tokens in this mapping.

## Verify and deliver

Confirm each saved file has the expected format and opens successfully. Preview the saved assets locally and compare them with the source, checking for missing SVG dependencies, clipped paths, incorrect inherited colors, or accidentally downloaded HTML. Review the coverage checklist and deduplicate repeated artwork.

Save assets only by default. Modify components, CSS, or asset references only when the user asks to use or replace icons. For those application changes, follow the project's patterns, run the relevant available checks, and verify the affected UI. Extracting icons does not authorize adding Airbnb features, authentication, or payments to Staybnb.

Report the saved files and source mapping, areas and interaction states explored, skipped CSS/font icons, and blocked or unvisited branches. Include verification results and whether app references were changed. Distinguish a successful asset check from a live-site branch that could not be explored.
