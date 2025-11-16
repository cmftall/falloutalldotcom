import { test, expect } from '@playwright/test'

const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000'

test.describe('Contact Form E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/en`)
    // Navigate to contact section
    await page.click('a[href="#contact"]')
    await page.waitForSelector('section#contact', { state: 'visible' })
  })

  test('should display contact section', async ({ page }) => {
    const contactSection = page.locator('section#contact')
    await expect(contactSection).toBeVisible()

    // Check that contact title is visible
    await expect(contactSection.locator('h2')).toBeVisible()
  })

  test('should have working email link', async ({ page }) => {
    const emailLink = page.locator('a[href^="mailto:"]')
    await expect(emailLink).toBeVisible()
    
    const href = await emailLink.getAttribute('href')
    expect(href).toContain('mailto:')
    expect(href).toContain('cmftall@gmail.com')
  })

  test('should have working LinkedIn link', async ({ page }) => {
    const linkedinLink = page.locator('a[href*="linkedin.com"]')
    await expect(linkedinLink).toBeVisible()
    
    const href = await linkedinLink.getAttribute('href')
    expect(href).toContain('linkedin.com')
    expect(href).toContain('cmftall')
  })

  test('should display pricing information', async ({ page }) => {
    // Check that pricing section is visible
    const pricingSection = page.locator('section#contact')
    
    // Look for pricing text
    await expect(pricingSection.locator('text=/€1,200|€1,500|€1,600|€1,800/')).toBeVisible()
  })

  test('should have CTA buttons', async ({ page }) => {
    const contactSection = page.locator('section#contact')
    
    // Check for "Book a discovery call" or similar CTA
    const ctaButtons = contactSection.locator('button:has-text("Book"), button:has-text("Réserver"), a:has-text("Book"), a:has-text("Réserver")')
    const count = await ctaButtons.count()
    expect(count).toBeGreaterThan(0)
  })

  test('should display contact information', async ({ page }) => {
    const contactSection = page.locator('section#contact')
    
    // Check for location
    await expect(contactSection.locator('text=/Paris|Montreal|France|Canada/')).toBeVisible()
    
    // Check for email
    await expect(contactSection.locator('text=/cmftall@gmail.com|@/')).toBeVisible()
  })
})

