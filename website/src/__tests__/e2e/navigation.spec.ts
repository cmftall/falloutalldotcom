import { test, expect } from '@playwright/test'

const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000'

test.describe('Navigation E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/en`)
  })

  test('should navigate to all main sections', async ({ page }) => {
    // Test Home section
    await page.click('a[href="#home"]')
    await expect(page.locator('section#home')).toBeVisible()

    // Test Work section
    await page.click('a[href="#work"]')
    await expect(page.locator('section#work, section[id*="work"]')).toBeVisible()

    // Test FAQ section
    await page.click('a[href="#faq"]')
    await expect(page.locator('section#faq')).toBeVisible()

    // Test Contact section
    await page.click('a[href="#contact"]')
    await expect(page.locator('section#contact')).toBeVisible()
  })

  test('should switch between English and French', async ({ page }) => {
    // Check that we're on English page
    await expect(page.locator('h1')).toContainText(/architect|ecosystems/i)

    // Switch to French
    await page.click('button:has-text("Select language"), button[aria-label*="language"]')
    await page.click('text=Français, text=French, [data-locale="fr"]')

    // Wait for navigation
    await page.waitForURL('**/fr**')

    // Check that content is in French
    await expect(page.locator('h1')).toContainText(/architecte|écosystèmes/i)
  })

  test('should have working language selector', async ({ page }) => {
    const languageButton = page.locator('button:has-text("Select language"), button[aria-label*="language"]')
    await expect(languageButton).toBeVisible()
    
    await languageButton.click()
    // Language menu should be visible
    await expect(page.locator('text=English, text=Français')).toBeVisible({ timeout: 2000 })
  })
})

