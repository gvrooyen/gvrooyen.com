import { expect, test } from '@playwright/test';

test('index page has expected h2', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h2')).toBe('Contact');
});

for (const { path, link, content } of [
	{ path: '/', link: 'About', content: 'Director: Engineering & Innovation at the Octoco Group' },
	{ path: '/professional', link: 'Professional', content: 'Director: Engineering & Innovation at the Octoco Group' },
	{ path: '/personal', link: 'Personal', content: 'I live in Somerset West' },
	{ path: '/writing', link: 'Writing', content: 'I occasionally jot down some thoughts on my substack.' }
]) {
	test(`${link} navigation is active on ${path}`, async ({ page }) => {
		await page.goto(path);

		await expect(page.getByRole('link', { name: link, exact: true })).toHaveClass('active');
		await expect(page.locator('main')).toContainText(content);
	});
}

test('writing page links to the published articles and shows their dates', async ({ page }) => {
	await page.goto('/writing');

	for (const { title, href, datetime, date } of [
		{ title: 'Trusting Trust in 2026', href: 'https://gvrooyen.substack.com/p/trusting-trust-in-2026', datetime: '2026-04-15', date: '15 April 2026' },
		{ title: 'Literate Agents', href: 'https://gvrooyen.substack.com/p/literate-agents', datetime: '2026-01-26', date: '26 January 2026' },
		{ title: 'Getting Started with Amp', href: 'https://gvrooyen.substack.com/p/getting-started-with-amp', datetime: '2025-10-28', date: '28 October 2025' }
	]) {
		await expect(page.getByRole('link', { name: title, exact: true })).toHaveAttribute('href', href);
		await expect(page.locator(`time[datetime="${datetime}"]`)).toHaveText(date);
	}
});
