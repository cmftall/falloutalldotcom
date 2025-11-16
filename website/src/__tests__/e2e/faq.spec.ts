import { test, expect } from '@playwright/test'

const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000'

test.describe('FAQ E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/en`)
    // Scroll to FAQ section
    await page.click('a[href="#faq"]')
    await page.waitForSelector('section#faq', { state: 'visible' })
  })

  test('should display FAQ section with questions', async ({ page }) => {
    // Check that FAQ section is visible
    const faqSection = page.locator('section#faq')
    await expect(faqSection).toBeVisible()

    // Check that FAQ title is visible
    await expect(faqSection.locator('h2')).toBeVisible()

    // Check that at least one FAQ item is present
    const faqItems = page.locator('section#faq button[aria-expanded]')
    const count = await faqItems.count()
    expect(count).toBeGreaterThan(0)
  })

  test('should expand and collapse FAQ items', async ({ page }) => {
    // Get first FAQ item
    const firstFAQ = page.locator('section#faq button[aria-expanded]').first()
    
    // Check initial state (should be collapsed)
    await expect(firstFAQ).toHaveAttribute('aria-expanded', 'false')

    // Click to expand
    await firstFAQ.click()
    
    // Wait a bit for animation
    await page.waitForTimeout(300)

    // Check that it's expanded
    await expect(firstFAQ).toHaveAttribute('aria-expanded', 'true')

    // Check that answer is visible
    const answer = firstFAQ.locator('..').locator('[role="region"]')
    await expect(answer).toBeVisible()

    // Click again to collapse
    await firstFAQ.click()
    await page.waitForTimeout(300)

    // Check that it's collapsed again
    await expect(firstFAQ).toHaveAttribute('aria-expanded', 'false')
  })

  test('should have accessible FAQ structure', async ({ page }) => {
    const faqItems = page.locator('section#faq button[aria-expanded]')
    const count = await faqItems.count()

    for (let i = 0; i < Math.min(count, 3); i++) {
      const item = faqItems.nth(i)
      // Check aria attributes
      await expect(item).toHaveAttribute('aria-expanded')
      await expect(item).toHaveAttribute('aria-controls')
      await expect(item).toHaveAttribute('aria-label')
    }
  })

  test('should have CTA button after FAQ', async ({ page }) => {
    const ctaButton = page.locator('section#faq button:has-text("Get In Touch"), section#faq button:has-text("Me Contacter")')
    await expect(ctaButton).toBeVisible()
    
    // Click CTA and verify it scrolls to contact
    await ctaButton.click()
    await page.waitForTimeout(500)
    
    // Check that we're at contact section (URL might have #contact or we scrolled)
    const contactSection = page.locator('section#contact')
    // The section should be in viewport or visible
    await expect(contactSection).toBeVisible({ timeout: 2000 })
  })
})

