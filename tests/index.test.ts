import { expect, test } from '@playwright/test';

test('index page has expected h2', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h2')).toBe('Contact');
});

for (const { path, link, content } of [
	{ path: '/', link: 'About', content: "Hi there! I'm Gert-Jan" },
	{ path: '/professional', link: 'Professional', content: 'Executive Chairman at Octoco' },
	{ path: '/personal', link: 'Personal', content: 'I live in Somerset West' }
]) {
	test(`${link} navigation is active on ${path}`, async ({ page }) => {
		await page.goto(path);

		await expect(page.getByRole('link', { name: link, exact: true })).toHaveClass('active');
		await expect(page.locator('main')).toContainText(content);
	});
}
