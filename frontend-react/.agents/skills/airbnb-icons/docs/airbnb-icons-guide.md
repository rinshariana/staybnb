# Using the Airbnb icons skill for the first time

This project skill tells Codex how to browse Airbnb, find icons, and save their original files for Staybnb. You do not need to use DevTools or copy code yourself. It runs when you ask Codex to use it; it is not a background downloader.

## Start your first collection

1. Open the Staybnb project in Codex.
2. Send the example below. You can replace “listing details area” with the area you want to explore, or provide an Airbnb link.
3. Let Codex use its available browser tools. If browser access is missing or a page is blocked, Codex will explain what it needs or what it could not explore.
4. Read the completion report for the saved files, explored menus and popups, skipped icons, and any gaps.

```text
Use $airbnb-icons to explore Airbnb's listing details area broadly.
Include menus, popups, expandable sections, and informational messages.
Save the icons for Staybnb.
```

The skill is stored at `.agents/skills/airbnb-icons/SKILL.md`. Codex discovers repository skills from `.agents/skills`. If it does not appear, restart Codex and reopen the project. See the [official skill documentation](https://learn.chatgpt.com/docs/build-skills) for discovery and invocation details.

## Choose what to explore

An area is a part of the site, such as search results, listing details, or the homepage. Codex explores broadly inside that area, including controls and overlays that are initially hidden. It samples repeated layouts rather than opening every listing. It reports branches it could not access.

Try these prompts:

```text
Use $airbnb-icons to explore Airbnb's search results area,
including filters, date and guest pickers, and map controls.
Save assets only.
```

```text
Use $airbnb-icons on this listing: [paste an Airbnb listing URL here].
Explore the amenities dialog, photo gallery controls, and other popups.
```

```text
Use $airbnb-icons to explore Airbnb's homepage on a mobile-sized screen.
Include its navigation menus and search overlays.
```

If you do not specify an area, Codex starts with the public accommodation homepage, search results, and one representative listing. A login requirement or access restriction can limit what it finds. Browsing does not send messages, make bookings, or change an account.

## Find the saved files

Icons are saved in `frontend-react/public/icons/`. Codex gives them names that describe their use in Staybnb, such as `wifi.svg` or `free-parking.webp`. These are naming examples; the actual extension follows the original asset format.

SVG is a vector image format; PNG, WebP, and other image formats are also supported. Codex inspects how each icon is rendered and extracts the original asset. It does not assume every icon is SVG. An existing file with different artwork is preserved rather than overwritten.

The completion report explains where each icon came from and whether any adjustments were necessary to make it work as a standalone file.

## Save versus replace

By default, the skill only saves assets. Your app will start using them when you explicitly ask Codex to update it. You can request this during collection or afterward:

```text
Use $airbnb-icons to collect icons from Airbnb's listing amenities.
Then replace matching amenity icons in our existing listing page.
```

Or, after collection:

```text
Use the saved wifi icon from public/icons in our existing amenities section.
```

Replacing icons updates existing UI; collecting assets does not request new product features.

## CSS and font icons

Some icons are drawn by styling rules (CSS) or displayed as characters from a special font. The skill skips these by default. An ordinary image file loaded through a CSS background can still be collected.

If you explicitly ask to save a CSS or font icon without saying how, Codex will ask how you want to proceed. For example, you could ask for a PNG capture with a transparent background. That is a conversion rather than an original standalone image file.

```text
Use $airbnb-icons to collect icons from Airbnb's homepage.
Also include the CSS-drawn icon I marked; ask me how to save it.
```

## If something is missing

Use the coverage report to name a missed area or state:

```text
Use $airbnb-icons to revisit the amenities popup.
Scroll through all its sections and collect any icons we missed.
Preserve the assets already saved.
```

If the skill is unavailable in the current chat, ask Codex to read `.agents/skills/airbnb-icons/SKILL.md` and follow it. If the browser itself is unavailable, the skill needs browser access before it can inspect Airbnb.
