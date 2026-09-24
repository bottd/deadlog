# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: design-regressions.spec.ts >> the global changelog filter navigates from a directory
- Location: e2e/design-regressions.spec.ts:6:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('combobox', { name: 'Hero, item, or keyword' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
    - link "Skip to content" [ref=e3] [cursor=pointer]:
        - /url: '#main-content'
    - banner [ref=e4]:
        - generic [ref=e5]:
            - navigation "Primary navigation" [ref=e6]:
                - generic [ref=e7]:
                    - link "deadlog.io - Home" [ref=e8] [cursor=pointer]:
                        - /url: /
                        - generic [ref=e15]: deadlog
                    - generic [ref=e18]:
                        - link "Heroes" [ref=e19] [cursor=pointer]:
                            - /url: /heroes
                        - link "Items" [ref=e20] [cursor=pointer]:
                            - /url: /items
            - button "Search & filter" [active] [ref=e23]
    - main [ref=e29]:
        - generic [ref=e30]:
            - generic [ref=e31]:
                - heading "Heroes" [level=1] [ref=e32]
                - status [ref=e33]: 38 heroes
            - paragraph [ref=e34]: Find a hero to read every recorded buff, nerf, and balance change.
            - generic [ref=e36]:
                - generic [ref=e37]: Filter heroes by name
                - searchbox "Filter heroes by name" [ref=e38]
        - region "Heroes directory" [ref=e39]:
            - list [ref=e40]:
                - listitem [ref=e41]:
                    - link [ref=e42] [cursor=pointer]:
                        - /url: /hero/abrams
                        - generic [ref=e43]:
                            - heading "Abrams" [level=2] [ref=e44]
                            - paragraph [ref=e45]: brawler
                - listitem [ref=e46]:
                    - link [ref=e47] [cursor=pointer]:
                        - /url: /hero/apollo
                        - generic [ref=e48]:
                            - heading "Apollo" [level=2] [ref=e49]
                            - paragraph [ref=e50]: assassin
                - listitem [ref=e51]:
                    - link [ref=e52] [cursor=pointer]:
                        - /url: /hero/bebop
                        - generic [ref=e53]:
                            - heading "Bebop" [level=2] [ref=e54]
                            - paragraph [ref=e55]: brawler
                - listitem [ref=e56]:
                    - link [ref=e57] [cursor=pointer]:
                        - /url: /hero/billy
                        - generic [ref=e58]:
                            - heading "Billy" [level=2] [ref=e59]
                            - paragraph [ref=e60]: brawler
                - listitem [ref=e61]:
                    - link [ref=e62] [cursor=pointer]:
                        - /url: /hero/calico
                        - generic [ref=e63]:
                            - heading "Calico" [level=2] [ref=e64]
                            - paragraph [ref=e65]: assassin
                - listitem [ref=e66]:
                    - link [ref=e67] [cursor=pointer]:
                        - /url: /hero/celeste
                        - generic [ref=e68]:
                            - heading "Celeste" [level=2] [ref=e69]
                            - paragraph [ref=e70]: marksman
                - listitem [ref=e71]:
                    - link [ref=e72] [cursor=pointer]:
                        - /url: /hero/drifter
                        - generic [ref=e73]:
                            - heading "Drifter" [level=2] [ref=e74]
                            - paragraph [ref=e75]: assassin
                - listitem [ref=e76]:
                    - link [ref=e77] [cursor=pointer]:
                        - /url: /hero/dynamo
                        - generic [ref=e78]:
                            - heading "Dynamo" [level=2] [ref=e79]
                            - paragraph [ref=e80]: mystic
                - listitem [ref=e81]:
                    - link [ref=e82] [cursor=pointer]:
                        - /url: /hero/graves
                        - generic [ref=e83]:
                            - heading "Graves" [level=2] [ref=e84]
                            - paragraph [ref=e85]: marksman
                - listitem [ref=e86]:
                    - link [ref=e87] [cursor=pointer]:
                        - /url: /hero/grey-talon
                        - generic [ref=e88]:
                            - heading "Grey Talon" [level=2] [ref=e89]
                            - paragraph [ref=e90]: marksman
                - listitem [ref=e91]:
                    - link [ref=e92] [cursor=pointer]:
                        - /url: /hero/haze
                        - generic [ref=e93]:
                            - heading "Haze" [level=2] [ref=e94]
                            - paragraph [ref=e95]: assassin
                - listitem [ref=e96]:
                    - link [ref=e97] [cursor=pointer]:
                        - /url: /hero/holliday
                        - generic [ref=e98]:
                            - heading "Holliday" [level=2] [ref=e99]
                            - paragraph [ref=e100]: marksman
                - listitem [ref=e101]:
                    - link [ref=e102] [cursor=pointer]:
                        - /url: /hero/infernus
                        - generic [ref=e103]:
                            - heading "Infernus" [level=2] [ref=e104]
                            - paragraph [ref=e105]: marksman
                - listitem [ref=e106]:
                    - link [ref=e107] [cursor=pointer]:
                        - /url: /hero/ivy
                        - generic [ref=e108]:
                            - heading "Ivy" [level=2] [ref=e109]
                            - paragraph [ref=e110]: marksman
                - listitem [ref=e111]:
                    - link [ref=e112] [cursor=pointer]:
                        - /url: /hero/kelvin
                        - generic [ref=e113]:
                            - heading "Kelvin" [level=2] [ref=e114]
                            - paragraph [ref=e115]: brawler
                - listitem [ref=e116]:
                    - link [ref=e117] [cursor=pointer]:
                        - /url: /hero/lady-geist
                        - generic [ref=e118]:
                            - heading "Lady Geist" [level=2] [ref=e119]
                            - paragraph [ref=e120]: mystic
                - listitem [ref=e121]:
                    - link [ref=e122] [cursor=pointer]:
                        - /url: /hero/lash
                        - generic [ref=e123]:
                            - heading "Lash" [level=2] [ref=e124]
                            - paragraph [ref=e125]: assassin
                - listitem [ref=e126]:
                    - link [ref=e127] [cursor=pointer]:
                        - /url: /hero/mcginnis
                        - generic [ref=e128]:
                            - heading "McGinnis" [level=2] [ref=e129]
                            - paragraph [ref=e130]: mystic
                - listitem [ref=e131]:
                    - link [ref=e132] [cursor=pointer]:
                        - /url: /hero/mina
                        - generic [ref=e133]:
                            - heading "Mina" [level=2] [ref=e134]
                            - paragraph [ref=e135]: marksman
                - listitem [ref=e136]:
                    - link [ref=e137] [cursor=pointer]:
                        - /url: /hero/mirage
                        - generic [ref=e138]:
                            - heading "Mirage" [level=2] [ref=e139]
                            - paragraph [ref=e140]: assassin
                - listitem [ref=e141]:
                    - link [ref=e142] [cursor=pointer]:
                        - /url: /hero/mo-krill
                        - generic [ref=e143]:
                            - heading "Mo & Krill" [level=2] [ref=e144]
                            - paragraph [ref=e145]: brawler
                - listitem [ref=e146]:
                    - link [ref=e147] [cursor=pointer]:
                        - /url: /hero/paige
                        - generic [ref=e148]:
                            - heading "Paige" [level=2] [ref=e149]
                            - paragraph [ref=e150]: mystic
                - listitem [ref=e151]:
                    - link [ref=e152] [cursor=pointer]:
                        - /url: /hero/paradox
                        - generic [ref=e153]:
                            - heading "Paradox" [level=2] [ref=e154]
                            - paragraph [ref=e155]: marksman
                - listitem [ref=e156]:
                    - link [ref=e157] [cursor=pointer]:
                        - /url: /hero/pocket
                        - generic [ref=e158]:
                            - heading "Pocket" [level=2] [ref=e159]
                            - paragraph [ref=e160]: assassin
                - listitem [ref=e161]:
                    - link [ref=e162] [cursor=pointer]:
                        - /url: /hero/rem
                        - heading "Rem" [level=2] [ref=e164]
                - listitem [ref=e165]:
                    - link [ref=e166] [cursor=pointer]:
                        - /url: /hero/seven
                        - generic [ref=e167]:
                            - heading "Seven" [level=2] [ref=e168]
                            - paragraph [ref=e169]: mystic
                - listitem [ref=e170]:
                    - link [ref=e171] [cursor=pointer]:
                        - /url: /hero/shiv
                        - generic [ref=e172]:
                            - heading "Shiv" [level=2] [ref=e173]
                            - paragraph [ref=e174]: brawler
                - listitem [ref=e175]:
                    - link [ref=e176] [cursor=pointer]:
                        - /url: /hero/silver
                        - generic [ref=e177]:
                            - heading "Silver" [level=2] [ref=e178]
                            - paragraph [ref=e179]: marksman
                - listitem [ref=e180]:
                    - link [ref=e181] [cursor=pointer]:
                        - /url: /hero/sinclair
                        - generic [ref=e182]:
                            - heading "Sinclair" [level=2] [ref=e183]
                            - paragraph [ref=e184]: mystic
                - listitem [ref=e185]:
                    - link [ref=e186] [cursor=pointer]:
                        - /url: /hero/the-doorman
                        - generic [ref=e187]:
                            - heading "The Doorman" [level=2] [ref=e188]
                            - paragraph [ref=e189]: mystic
                - listitem [ref=e190]:
                    - link [ref=e191] [cursor=pointer]:
                        - /url: /hero/venator
                        - generic [ref=e192]:
                            - heading "Venator" [level=2] [ref=e193]
                            - paragraph [ref=e194]: marksman
                - listitem [ref=e195]:
                    - link [ref=e196] [cursor=pointer]:
                        - /url: /hero/victor
                        - generic [ref=e197]:
                            - heading "Victor" [level=2] [ref=e198]
                            - paragraph [ref=e199]: brawler
                - listitem [ref=e200]:
                    - link [ref=e201] [cursor=pointer]:
                        - /url: /hero/vindicta
                        - generic [ref=e202]:
                            - heading "Vindicta" [level=2] [ref=e203]
                            - paragraph [ref=e204]: marksman
                - listitem [ref=e205]:
                    - link [ref=e206] [cursor=pointer]:
                        - /url: /hero/viscous
                        - generic [ref=e207]:
                            - heading "Viscous" [level=2] [ref=e208]
                            - paragraph [ref=e209]: mystic
                - listitem [ref=e210]:
                    - link [ref=e211] [cursor=pointer]:
                        - /url: /hero/vyper
                        - generic [ref=e212]:
                            - heading "Vyper" [level=2] [ref=e213]
                            - paragraph [ref=e214]: assassin
                - listitem [ref=e215]:
                    - link [ref=e216] [cursor=pointer]:
                        - /url: /hero/warden
                        - generic [ref=e217]:
                            - heading "Warden" [level=2] [ref=e218]
                            - paragraph [ref=e219]: brawler
                - listitem [ref=e220]:
                    - link [ref=e221] [cursor=pointer]:
                        - /url: /hero/wraith
                        - generic [ref=e222]:
                            - heading "Wraith" [level=2] [ref=e223]
                            - paragraph [ref=e224]: marksman
                - listitem [ref=e225]:
                    - link [ref=e226] [cursor=pointer]:
                        - /url: /hero/yamato
                        - generic [ref=e227]:
                            - heading "Yamato" [level=2] [ref=e228]
                            - paragraph [ref=e229]: assassin
    - contentinfo [ref=e230]:
        - generic [ref=e232]:
            - link "deadlog.io" [ref=e233] [cursor=pointer]:
                - /url: /
            - generic [ref=e238]:
                - link "Browse all patches" [ref=e239] [cursor=pointer]:
                    - /url: /archive
                - paragraph [ref=e240]:
                    - text: Data provided by
                    - link "Deadlock API" [ref=e241] [cursor=pointer]:
                        - /url: https://deadlock-api.com
                - paragraph [ref=e242]: Deadlock is a trademark of Valve Corporation
            - generic [ref=e243]: // end transmission
    - region "Notifications"
```

# Test source

```ts
  1   | import { expect, test } from 'playwright/test';
  2   | import { expectNoHorizontalOverflow, gotoApp, openEntityFilter } from './helpers';
  3   |
  4   | const LATEST_CHANGE = '/change/2026/minor-06-11';
  5   |
  6   | test('the global changelog filter navigates from a directory', async ({
  7   | 	page
  8   | }, testInfo) => {
  9   | 	await gotoApp(page, '/heroes');
  10  | 	const input = await openEntityFilter(page, testInfo.project.name === 'mobile-chromium');
> 11  | 	await input.fill('Bebop');
      |              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  12  | 	await page.getByRole('option', { name: /Bebop, Hero, not selected/ }).click();
  13  |
  14  | 	// Anchored to the root path on purpose: "/?hero=Bebop" and "/heroes?hero=Bebop"
  15  | 	// both satisfied a "/?" optional-slash pattern, hiding the fact that filtering
  16  | 	// from a directory stayed on a page that ignores the param.
  17  | 	await expect(page).toHaveURL(/\/\?hero=Bebop$/);
  18  | 	await expect(
  19  | 		page.getByRole('button', { name: 'Remove Hero filter: Bebop' })
  20  | 	).toBeVisible();
  21  | 	await expect(page.locator('[data-matched-changes]').first()).toContainText('Bebop');
  22  | });
  23  |
  24  | test('selected filter chips are keyboard removable', async ({ page }) => {
  25  | 	await gotoApp(page, '/?hero=Bebop');
  26  | 	const chip = page.getByRole('button', { name: 'Remove Hero filter: Bebop' });
  27  | 	await chip.focus();
  28  | 	await page.keyboard.press('Enter');
  29  | 	await expect(page).toHaveURL(/\/$/);
  30  | });
  31  |
  32  | test('directory search narrows items without horizontal overflow', async ({ page }) => {
  33  | 	await gotoApp(page, '/items');
  34  | 	await page
  35  | 		.getByRole('searchbox', { name: 'Filter items by name' })
  36  | 		.fill('Active Reload');
  37  | 	await expect(page.getByRole('link', { name: /Active Reload/ })).toBeVisible();
  38  | 	await expect(page.getByRole('link', { name: /Berserker/ })).toHaveCount(0);
  39  | 	await expectNoHorizontalOverflow(page);
  40  | });
  41  |
  42  | test('an ability deep link keeps its entity scope and profile history', async ({
  43  | 	page
  44  | }) => {
  45  | 	await gotoApp(page, '/hero/the-doorman?ability=call-bell');
  46  | 	await expect(page).toHaveURL(/\/hero\/the-doorman\?ability=call-bell$/);
  47  | 	await expect(
  48  | 		page.getByRole('heading', { level: 1, name: 'The Doorman' })
  49  | 	).toBeVisible();
  50  | 	await expect(
  51  | 		page
  52  | 			.getByRole('region', { name: 'Abilities' })
  53  | 			.getByRole('button', { name: /^Call Bell/ })
  54  | 	).toHaveAttribute('aria-pressed', 'true');
  55  | 	const patchLink = page
  56  | 		.getByRole('region', { name: 'Change History' })
  57  | 		.getByRole('link')
  58  | 		.first();
  59  | 	await expect(patchLink).toHaveAttribute('href', /\/change\/[^?]+#doorman$/);
  60  | });
  61  |
  62  | test('a changelog alias redirect keeps the query string', async ({ page }) => {
  63  | 	await gotoApp(page, '/change/2026/gameplay-03-06?ref=test');
  64  | 	await expect(page).toHaveURL(/\/change\/2026\/03-06\?ref=test$/);
  65  | });
  66  |
  67  | test('keyword search from a patch navigates to the changelog list', async ({
  68  | 	page
  69  | }, testInfo) => {
  70  | 	await gotoApp(page, '/change/2026/minor-07-28');
  71  | 	const input = await openEntityFilter(page, testInfo.project.name === 'mobile-chromium');
  72  | 	await expect(input).toHaveAttribute('maxlength', '200');
  73  | 	await input.fill('stamina bucket');
  74  | 	await input.press('Enter');
  75  |
  76  | 	await expect(page).toHaveURL(/\/\?q=stamina\+bucket$/);
  77  | 	await expect(page.locator('[data-patch-card]').first()).toBeVisible();
  78  | });
  79  |
  80  | test('historical item filters still resolve and remain removable', async ({ page }) => {
  81  | 	await gotoApp(page, '/?item=Ammo+Scavenger');
  82  |
  83  | 	await expect(page.locator('[data-patch-card]').first()).toBeVisible();
  84  | 	await expect(
  85  | 		page.getByRole('button', { name: 'Remove Item filter: Ammo Scavenger' })
  86  | 	).toBeVisible();
  87  | 	await page.getByRole('link', { name: 'Ammo Scavenger full history' }).first().click();
  88  | 	await expect(
  89  | 		page.getByRole('heading', { level: 1, name: 'Ammo Scavenger' })
  90  | 	).toBeVisible();
  91  | 	await expect(page.locator('main header')).toContainText('Historical');
  92  | });
  93  |
  94  | test('mobile fallback offers a complete archive without JavaScript', async ({
  95  | 	browser
  96  | }, testInfo) => {
  97  | 	test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile no-JavaScript fallback');
  98  | 	const context = await browser.newContext({
  99  | 		javaScriptEnabled: false,
  100 | 		reducedMotion: 'reduce',
  101 | 		viewport: { width: 390, height: 844 }
  102 | 	});
  103 | 	const page = await context.newPage();
  104 | 	await page.goto('http://127.0.0.1:4173/?hero=Bebop&item=Ammo+Scavenger&major=true');
  105 | 	await page.evaluate(() => document.fonts.ready);
  106 |
  107 | 	// Playwright's text/role query engines skip noscript descendants even when the
  108 | 	// browser renders them with JavaScript disabled, so locate this native fallback.
  109 | 	const fallback = page.locator('header noscript p');
  110 | 	await expect(fallback).toBeVisible();
  111 | 	await expect(fallback).toContainText('Search needs JavaScript.');
```
