import assert from "node:assert/strict";
import test from "node:test";

test("renders the finished homepage and contact page", async () => {
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

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const homepage = await response.text();
  assert.match(homepage, /<title>Salwa Qadir \| Women’s Strength Coach<\/title>/);
  assert.match(homepage, /Women don’t need to be told to do more\./);
  assert.match(homepage, /From Bodyweight to Barbells/);
  assert.match(homepage, /Canada’s largest fitness company/);
  assert.match(homepage, /small-group training/);
  assert.match(homepage, /resource developer for personal trainers/);
  assert.match(homepage, /coaching and refereeing in the sport/);
  assert.match(homepage, /Limited availability · Inquire about current openings/);
  assert.match(homepage, /CLIENT STORIES/);
  assert.match(homepage, /Strength that shows up/);
  assert.match(homepage, /Dr\. Linda Deppisch/);
  assert.match(homepage, /src="\/assets\/hero\.jpg"/);
  assert.match(homepage, /property="og:image"/);

  const contactResponse = await fetchPage("/contact");
  assert.equal(contactResponse.status, 200);
  const contactPage = await contactResponse.text();
  assert.match(contactPage, /<title>Contact \| Salwa Qadir<\/title>/);
  assert.match(contactPage, /Let’s start with what you’re looking for\./);
  assert.match(contactPage, /Brand \+ Media Partnerships/);
});
