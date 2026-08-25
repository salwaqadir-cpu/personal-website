import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("serves the approved editorial pages and route redirects", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const fetchPage = (pathname) => worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  const response = await fetchPage("/");

  assert.equal(response.status, 307);
  assert.equal(new URL(response.headers.get("location")).pathname, "/index.html");

  const homepage = await readFile(new URL("../public/index.html", import.meta.url), "utf8");
  assert.match(homepage, /<title>Salwa Qadir \| Women’s Strength Coach in Milton &amp; Mississauga<\/title>/);
  assert.match(homepage, /rel="canonical" href="https:\/\/salwaqadir\.com\/"/);
  assert.match(homepage, /class="hero-media"/);
  assert.match(homepage, /class="menu-panel"/);
  assert.match(homepage, /Train With Efficiency/);
  assert.match(homepage, /While the world is asking women to do more/);
  assert.match(homepage, /You can do a bodyweight squat or barbell squat/);
  assert.doesNotMatch(homepage, /\.program-link \{[^}]*border-bottom/);
  assert.match(homepage, /class="button button-solid" href="work\.html">Work With Me<\/a>/);
  assert.match(homepage, /class="button button-outline" href="about\.html">About Me<\/a>/);
  assert.match(homepage, /The Women’s Barbell Club/);
  assert.equal(homepage.match(/https:\/\/www\.thewomensbarbell\.club\/wbc-waitlist/g)?.length, 1);
  assert.equal(homepage.match(/https:\/\/www\.thewomensbarbell\.club\/\"/g)?.length, 2);
  assert.match(homepage, /About Me/);
  assert.match(homepage, /mailto:salwa@salwaqadir\.com/);
  assert.match(homepage, /property="og:image"/);

  const contactResponse = await fetchPage("/contact");
  assert.equal(contactResponse.status, 307);
  assert.equal(new URL(contactResponse.headers.get("location")).pathname, "/contact.html");

  const workResponse = await fetchPage("/work");
  assert.equal(workResponse.status, 307);
  assert.equal(new URL(workResponse.headers.get("location")).pathname, "/work.html");

  const storiesResponse = await fetchPage("/stories");
  assert.equal(storiesResponse.status, 307);
  assert.equal(new URL(storiesResponse.headers.get("location")).pathname, "/stories.html");

  const contactPage = await readFile(new URL("../public/contact.html", import.meta.url), "utf8");
  assert.match(contactPage, /ONE-TO-ONE COACHING/);
  assert.match(contactPage, /SMALL-GROUP TRAINING/);
  assert.match(contactPage, /Brand \+ Media Partnerships/);
  assert.match(contactPage, /salwa@salwaqadir\.com/);

  const workPage = await readFile(new URL("../public/work.html", import.meta.url), "utf8");
  assert.match(workPage, /One-to-One Strength Coaching/);
  assert.match(workPage, /\$280 per month/);

  const storiesPage = await readFile(new URL("../public/stories.html", import.meta.url), "utf8");
  assert.match(storiesPage, /Client Stories/);
  assert.match(storiesPage, /From bodyweight squat to a 125 lb barbell/);
});

test("uses an opaque full-viewport mobile navigation panel", async () => {
  const homepage = await readFile(new URL("../public/index.html", import.meta.url), "utf8");
  const stylesheet = await readFile(new URL("../public/assets/interior.css", import.meta.url), "utf8");

  assert.match(homepage, /\.menu-panel \{[^}]*position: fixed;[^}]*inset: 0;[^}]*background: var\(--white\);/);
  assert.match(stylesheet, /\.menu-panel \{[^}]*position: fixed;[^}]*inset: 0;[^}]*background: var\(--white\);/);
});
