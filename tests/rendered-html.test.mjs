import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("serves the two-page narrative and services experience", async () => {
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
  assert.match(homepage, /Strength to <em class="accent">Lighten Your Life\.<\/em>/);
  assert.doesNotMatch(homepage, /Train With Efficiency|Train with efficiency|Train with Efficiency/);
  assert.match(homepage, /While the world is asking women to do more/);
  assert.match(homepage, /Not every chapter of life can hold the same amount/);
  assert.match(homepage, /choose your health and wellness goals/);
  assert.match(homepage, /class="program-link" href="https:\/\/www\.thewomensbarbell\.club\/strength-to-lighten-your-life">Strength to Lighten Your Life<\/a>/);
  assert.match(homepage, /recognize what typically holds women back from achieving them and <em class="body-emphasis">how to achieve them\.<\/em>/);
  assert.match(homepage, /The solution to “having it all” isn’t doing more/);
  assert.match(homepage, /what to <em class="body-emphasis">push forward,<\/em> what to <em class="body-emphasis">pull back,<\/em> and what to <em class="body-emphasis">maintain\.<\/em>/);
  assert.doesNotMatch(homepage, /bodyweight squat or a barbell squat/);
  assert.equal(homepage.match(/https:\/\/www\.thewomensbarbell\.club\/strength-to-lighten-your-life/g)?.length, 6);
  assert.equal(homepage.match(/>Join the free course waitlist<\/a>/g)?.length, 4);
  assert.equal(homepage.match(/>Join the Women’s Barbell Club waitlist<\/a>/g)?.length, 4);
  assert.match(homepage, /class="hero-actions course-actions">[\s\S]*Join the free course waitlist[\s\S]*Join the Women’s Barbell Club waitlist/);
  assert.doesNotMatch(homepage, /<p class="eyebrow">(?:Experience \+ Credentials|About Me|Client Stories|Services)<\/p>/);
  assert.match(homepage, /<strong>13,000\+<\/strong><span>Hours coaching women<\/span>/);
  assert.match(homepage, /<strong>100s<\/strong><span>Of women coached<\/span>/);
  assert.match(homepage, /<strong>12<\/strong><span>Years of full-time coaching<\/span>/);
  assert.match(homepage, /<strong>5<\/strong><span>Principles learnt<\/span>/);
  assert.match(homepage, /<strong>1<\/strong><span>Goal<\/span>/);
  assert.equal(homepage.match(/class="home-credential-item"><span aria-hidden="true"><\/span>/g)?.length, 6);
  assert.doesNotMatch(homepage, /class="home-credential-item"><span>0[1-6]<\/span>/);
  assert.equal(homepage.match(/https:\/\/www\.thewomensbarbell\.club\/wbc-waitlist/g)?.length, 5);
  assert.match(homepage, /JOIN THE WOMEN’S BARBELL CLUB WAITLIST/);
  assert.doesNotMatch(homepage, /<span>JOIN THE<\/span>[\s\S]*<strong>WAITLIST<\/strong>/);
  assert.match(homepage, /From Bodyweight to Barbells<\/a> is a signature program of The Women’s Barbell Club/);
  assert.match(homepage, /id="about"/);
  assert.match(homepage, /id="approach"/);
  assert.match(homepage, /Strength to Lighten Your Life<\/a> teaches you how to pick your health and wellness goals/);
  assert.match(homepage, /how you can achieve your goals working with your values, culture and priorities/);
  assert.match(homepage, /why I believe that <em class="about-thread">strength training is a powerful anchor of life,<\/em>/);
  assert.doesNotMatch(homepage, /“strength training is a powerful anchor of life,”/);
  assert.match(homepage, /why I created <a class="program-link" href="https:\/\/www\.thewomensbarbell\.club\/">The Women’s Barbell Club<\/a> and how its presence can benefit you\./);
  assert.doesNotMatch(homepage, /class="pillars-grid"|class="pillar-card"|Intentional Movement \+ Training Literacy|Recovery Intelligence \+ Visible Progress|Human Accountability \+ Supported Independence/);
  assert.match(homepage, /Minimum Effective Dose/);
  assert.match(homepage, /Strength to Lighten Your Life<\/a> teaches you how to pick your health and wellness goals[\s\S]*how its presence can benefit you[\s\S]*class="execution-photo"/);
  assert.match(homepage, /assets\/foundations\.jpg/);
  assert.match(homepage, /Your values, culture and priorities matter\./);
  assert.match(homepage, /there was always someone out there to remind me that’s what I should be chasing\./);
  assert.doesNotMatch(homepage, /remind me that it was what I should be chasing/);
  assert.match(homepage, /<em class="about-thread">life was incredibly full\.<\/em> But it was also <em class="about-thread">exhausting\.<\/em>/);
  assert.doesNotMatch(homepage, /<em class="about-thread">life was incredibly full\. But it was also exhausting\.<\/em>/);
  assert.match(homepage, /“Your uterus will fall out\.”<\/span>[\s\S]*class="home-story-copy about-noise-reflection">[\s\S]*People always have a lot to say\.[\s\S]*full but easier lives/);
  assert.equal(homepage.match(/People always have a lot to say\./g)?.length, 1);
  assert.match(homepage, /Growing up across cultures and working with women from different backgrounds, taught me/);
  assert.match(homepage, /get stronger, live more fulfilled lives and filter out the noise, I need to work with their values, norms and priorities\./);
  assert.doesNotMatch(homepage, /get stronger and live more fulfilled lives, I need to work with their values/);
  assert.match(homepage, /I spent my own career navigating how to balance this and helped others do the same/);
  assert.match(homepage, /assets\/culture-wedding-white-blurred\.jpg/);
  assert.match(homepage, /assets\/culture-wedding-green\.jpg/);
  assert.match(homepage, /assets\/culture-wedding-red\.jpg/);
  assert.match(homepage, /Navigating different cultures: 1 wedding, 3 celebrations\./);
  assert.match(homepage, /family=Caveat:wght@500;600/);
  assert.equal(homepage.match(/class="culture-photo"/g)?.length, 3);
  assert.ok(homepage.indexOf("Your values, culture and priorities matter.") < homepage.indexOf('id="approach"'));
  assert.doesNotMatch(homepage, /Coaching the Woman in Front of Me/);
  assert.doesNotMatch(homepage, /<p class="eyebrow">My Approach<\/p>/);
  assert.match(homepage, /Building strength <em class="accent">while life is happening\.<\/em>/);
  assert.match(homepage, /For us to have more fulfilled lives, we need support and the strength to do it\./);
  assert.doesNotMatch(homepage, /For us to do everything we need in life/);
  assert.match(homepage, /I love lifting because it taught me <em>the secret sauce to balancing life\.<\/em>/);
  assert.doesNotMatch(homepage, /I love lifting because it taught me this technique\./);
  assert.match(homepage, /I’ve learnt that <em class="about-thread">there is a way for women to “do it all\.”<\/em>/);
  assert.doesNotMatch(homepage, /there is a way for women to do all of this\./);
  assert.match(homepage, /class="approach-powerlifting-photo"><img src="assets\/powerlifter\.jpg" alt="Salwa Qadir preparing to lift at a powerlifting competition"/);
  assert.ok(homepage.indexOf('assets/powerlifter.jpg') < homepage.indexOf('class="approach-lift"'));
  assert.doesNotMatch(homepage, /assets\/values\.jpg/);
  assert.match(homepage, /class="home-archive-photo home-sailing-photo"/);
  assert.match(homepage, /id="stories"/);
  assert.match(homepage, /What became possible <em class="accent">through strength\.<\/em>/);
  assert.match(homepage, /Their goals, values, and priorities were different\./);
  assert.match(homepage, /they built strength while working with the lives they were already living/);
  assert.match(homepage, /lives they were already living\. That progress showed up/);
  assert.doesNotMatch(homepage, /lives they were already living—and/);
  assert.doesNotMatch(homepage, /What changed <em class="accent">through training\.<\/em>/);
  assert.equal(homepage.match(/class="story"/g)?.length, 4);
  assert.equal(homepage.match(/Current client, [567]\+ years/g)?.length, 4);
  assert.doesNotMatch(homepage, />Client, [567] years</);
  assert.match(homepage, /property="og:image"/);

  const sectionOrder = [
    'id="hero"', 'id="credibility"', 'id="wbc"', 'id="about"',
    'id="approach"', 'id="stories"', 'id="services"',
  ].map(marker => homepage.indexOf(marker));
  assert.ok(sectionOrder.every((position, index) => position >= 0 && (index === 0 || position > sectionOrder[index - 1])));

  const servicesResponse = await fetchPage("/services");
  assert.equal(servicesResponse.status, 307);
  assert.equal(new URL(servicesResponse.headers.get("location")).pathname, "/services.html");

  const workResponse = await fetchPage("/work");
  assert.equal(workResponse.status, 307);
  assert.equal(new URL(workResponse.headers.get("location")).pathname, "/services.html");

  const contactResponse = await fetchPage("/contact");
  assert.equal(contactResponse.status, 307);
  assert.equal(new URL(contactResponse.headers.get("location")).pathname, "/services.html");
  assert.equal(new URL(contactResponse.headers.get("location")).hash, "#contact");

  const aboutResponse = await fetchPage("/about");
  assert.equal(aboutResponse.status, 307);
  assert.equal(new URL(aboutResponse.headers.get("location")).hash, "#about");

  const storiesResponse = await fetchPage("/stories");
  assert.equal(storiesResponse.status, 307);
  assert.equal(new URL(storiesResponse.headers.get("location")).hash, "#stories");

  const programResponse = await fetchPage("/program");
  assert.equal(programResponse.status, 307);
  assert.equal(new URL(programResponse.headers.get("location")).pathname, "/program.html");

  const servicesPage = await readFile(new URL("../public/services.html", import.meta.url), "utf8");
  assert.doesNotMatch(servicesPage, /One-to-One Strength Coaching/);
  assert.doesNotMatch(servicesPage, /Small-Group Strength Training/);
  assert.match(servicesPage, /Fitness Business Mentorship/);
  assert.match(servicesPage, /Workshops \+ Speaking/);
  assert.match(servicesPage, /Brand \+ Media Partnerships/);
  assert.doesNotMatch(servicesPage, /<p class="eyebrow">(?:Services|Contact)<\/p>/);
  assert.match(servicesPage, /Strength to Lighten Your Life/);
  assert.doesNotMatch(servicesPage, /Train With Efficiency|Train with efficiency|Train with Efficiency/);
  assert.match(servicesPage, /The Women’s<br><span class="wbc-title-accent">Barbell Club<\/span>/);
  assert.match(servicesPage, /Build strength\.<\/em><em>Fuel your body\.<\/em><em>Navigate life together\./);
  assert.match(servicesPage, /Lighten<\/em> Your Life\./);
  assert.match(servicesPage, /more than women lifting\./);
  assert.match(servicesPage, /so that you can <em class="body-emphasis-on-dark">do less\.<\/em>/);
  assert.doesNotMatch(servicesPage, /\$120 per session/);
  assert.doesNotMatch(servicesPage, /\$280 per month/);
  assert.match(servicesPage, /JOIN THE WOMEN’S BARBELL CLUB WAITLIST/);
  assert.match(servicesPage, /id="contact-form"/);
  assert.match(servicesPage, /salwa@salwaqadir\.com/);

  const programPage = await readFile(new URL("../public/program.html", import.meta.url), "utf8");
  assert.doesNotMatch(programPage, /window\.location\.replace/);
  assert.match(programPage, /From Bodyweight to Barbells is a signature program of The Women’s Barbell Club/);
  assert.match(programPage, /Intention · Strength · Sisterhood/);
  assert.match(programPage, /href="https:\/\/www\.thewomensbarbell\.club\/wbc-waitlist">Join the WBC waitlist<\/a>/);
  assert.doesNotMatch(programPage, /One-to-One Coaching \+ Small-Group Training/);

  const legacyRedirects = [
    ["about.html", "/index.html#about"],
    ["approach.html", "/index.html#approach"],
    ["stories.html", "/index.html#stories"],
    ["contact.html", "/services.html#contact"],
    ["work.html", "/services.html"],
  ];
  for (const [file, destination] of legacyRedirects) {
    const redirectPage = await readFile(new URL(`../public/${file}`, import.meta.url), "utf8");
    assert.match(redirectPage, new RegExp(`window\\.location\\.replace\\("${destination.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\"\\)`));
  }
});

test("uses an opaque full-viewport mobile navigation panel", async () => {
  const homepage = await readFile(new URL("../public/index.html", import.meta.url), "utf8");
  const stylesheet = await readFile(new URL("../public/assets/interior.css", import.meta.url), "utf8");

  assert.match(homepage, /\.menu-panel \{[^}]*position: fixed;[^}]*inset: 0;[^}]*background: var\(--white\);/);
  assert.match(stylesheet, /\.menu-panel \{[^}]*position: fixed;[^}]*inset: 0;[^}]*background: var\(--white\);/);
});
