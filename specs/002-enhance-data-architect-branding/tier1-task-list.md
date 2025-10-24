# ✅ TIER 1: Critical Fixes - Detailed Task List

**Goal:** Transform website from cluttered/generic → clean/professional  
**Time:** 11-14 hours  
**Deadline:** Week 1-2

---

## **TASK 1A: Hero Section - Add Your Photo & Simplify** 
**Effort:** 2 hours | **Priority:** CRITICAL

### Files to modify:
- `/website/src/components/sections/Hero.tsx`
- `/website/src/messages/en.json`
- `/website/src/messages/fr.json`
- `/website/public/` (add photo file)

### Changes:

**1. Add your photo to public folder:**
- [ ] Save your DATA IS EVERYTHING photo as `/website/public/fallou-tall-photo.jpg`
- [ ] Optimize image (max 500KB, 1200px wide)

**2. Update Hero.tsx:**
- [ ] Remove 4th metric (Countries) - keep only 3 metrics
- [ ] Change metrics to: Error Reduction, Annual Savings (€130K+), Pipelines Built
- [ ] Add photo element (left side or background overlay)
- [ ] Remove "See My Results" button (keep only one CTA)
- [ ] Change CTA text to "Book Discovery Call" or "View Case Studies"

**3. Update en.json:**
- [ ] Change headline from 17 words → 8 words: "I deliver measurable ROI through pragmatic data architecture"
- [ ] Update subheadline to emphasize business value
- [ ] Update metric labels to match new 3-metric structure
- [ ] Add "€130K+" savings metric

**4. Update fr.json:**
- [ ] Translate new headline/subheadline to French
- [ ] Update French metric labels

---

## **TASK 1B: Remove Education Section**
**Effort:** 30 minutes | **Priority:** CRITICAL

### Files to modify:
- `/website/src/app/en/page.tsx`
- `/website/src/app/fr/page.tsx`
- `/website/src/components/sections/Education.tsx` (optional: keep file, just don't import)

### Changes:

**1. Remove Education from page layout:**
- [ ] In `en/page.tsx`: Delete `<Education />` component
- [ ] In `fr/page.tsx`: Delete `<Education />` component
- [ ] Remove import statement for Education

**2. Optional: Add education to footer as simple text:**
- [ ] In Footer component: Add "Master's in Big Data (AIMS) • Master's in Applied Math (UCAD)"

---

## **TASK 1C: Collapse Expertise Section**
**Effort:** 2 hours | **Priority:** CRITICAL

### Files to modify:
- `/website/src/components/sections/Expertise.tsx`
- `/website/src/messages/en.json`
- `/website/src/messages/fr.json`

### Changes:

**1. Show only 3 core expertise cards by default:**
- [ ] Keep visible: Data Engineering, Databases, Cloud Data Architecture
- [ ] Hide initially: Machine Learning, DevOps, Data Visualization

**2. Add "View Full Tech Stack" expandable button:**
- [ ] Add button below 3 core cards
- [ ] Button expands to show additional 3 cards
- [ ] Use React state to toggle visibility

**3. Remove or minimize methodology badges:**
- [ ] Consider hiding methodology section behind expand button
- [ ] Or reduce from 5 methodologies → 3 most important

---

## **TASK 1D: Simplify Certifications Section**
**Effort:** 1 hour | **Priority:** HIGH

### Files to modify:
- `/website/src/components/sections/Certifications.tsx`
- `/website/src/messages/en.json` (if certs are in translations)

### Changes:

**1. Change from card layout to simple logo row:**
- [ ] Remove verbose card layout
- [ ] Show only: Logo + Cert Name + "Verify ✓" badge
- [ ] One line, centered, compact

**2. Design:**
```
[Azure logo] Microsoft Azure Data Engineer [Verify ✓]
[GCP logo] Google Cloud Data Engineer [Verify ✓]
[Databricks logo] Databricks Spark Developer [Verify ✓]
```

---

## **TASK 1E: Add "Worked With" Logos Section**
**Effort:** 2 hours | **Priority:** CRITICAL

### Files to create/modify:
- Create: `/website/src/components/sections/WorkedWith.tsx`
- Modify: `/website/src/app/en/page.tsx`
- Modify: `/website/src/app/fr/page.tsx`
- Add logos: `/website/public/logos/` (BNC, Orange, Onepoint, Sopra Steria)

### Changes:

**1. Get company logos:**
- [ ] Download BNC logo (PNG, transparent)
- [ ] Download Orange logo (PNG, transparent)
- [ ] Download Onepoint logo (PNG, transparent)
- [ ] Download Sopra Steria logo (PNG, transparent)
- [ ] Save to `/website/public/logos/`

**2. Create WorkedWith component:**
- [ ] Create new component showing 4 logos in a row
- [ ] Grayscale by default, color on hover
- [ ] Add text: "Trusted by Leading Organizations"
- [ ] Add industry labels: "Banking • Telecommunications • Consulting"

**3. Add to page layout:**
- [ ] Place AFTER Hero section, BEFORE FeaturedWork
- [ ] Import in both en/page.tsx and fr/page.tsx

---

## **TASK 1F: Fix Contact Section - Clear Consulting CTA**
**Effort:** 1.5 hours | **Priority:** CRITICAL

### Files to modify:
- `/website/src/components/sections/Contact.tsx`
- `/website/src/messages/en.json`
- `/website/src/messages/fr.json`

### Changes:

**1. Replace current contact layout with consulting-focused CTA:**
- [ ] New headline: "Ready to Deliver Measurable ROI?"
- [ ] Add value prop: "I help enterprises reduce costs and improve data quality through pragmatic architecture"
- [ ] List services: Architecture audits, Training workshops, Short-term projects
- [ ] ONE primary CTA button: "Book Discovery Call"

**2. Add consulting details:**
- [ ] Rates: "€700-1800/day depending on engagement type"
- [ ] Availability: "Flexible project-based availability"
- [ ] Location: "Paris & Montreal"
- [ ] Keep email: cmftall@gmail.com
- [ ] Keep LinkedIn link

**3. Remove clutter:**
- [ ] Remove phone "available after contact" (awkward)
- [ ] Remove second CTA button (keep only one)
- [ ] Simplify layout

**4. Update translations:**
- [ ] Add consulting copy to en.json
- [ ] Translate to French in fr.json

---

## **TASK 1G: Add Social Proof Placeholder Section**
**Effort:** 1 hour | **Priority:** HIGH

### Files to create/modify:
- Create: `/website/src/components/sections/Testimonials.tsx` (placeholder version)
- Modify: `/website/src/app/en/page.tsx`
- Modify: `/website/src/app/fr/page.tsx`

### Changes:

**1. Create placeholder testimonial section:**
- [ ] Title: "What Clients & Colleagues Say"
- [ ] Message: "Coming soon - testimonials from:"
- [ ] List: VP Data Engineering (BNC), Lead Data Engineer (BNC), Senior Consultant (Onepoint)
- [ ] CTA: "In the meantime, see my detailed case studies →"

**2. Add to page layout:**
- [ ] Place AFTER Certifications, BEFORE Contact
- [ ] Style as transparent card (not hiding the gap, acknowledging it)

---

## **TASK 1H: Update Site Metadata**
**Effort:** 30 minutes | **Priority:** MEDIUM

### Files to modify:
- `/website/src/app/layout.tsx`
- `/website/src/lib/constants.ts`

### Changes:

**1. Update meta description:**
- [ ] OLD: Generic data architect description
- [ ] NEW: "Business value-focused Data Architect | 8+ years delivering measurable ROI through pragmatic solutions | €130K+ savings, 100+ pipelines built | Available for consulting"

**2. Update OG image alt text:**
- [ ] Include business value positioning

**3. Update site tagline in constants:**
- [ ] Align with new positioning

---

## **CHECKLIST SUMMARY**

### Before You Start:
- [ ] Backup current website (git commit with clear message)
- [ ] Create new branch: `feature/tier1-branding-fixes`
- [ ] Have your photo ready (optimized)
- [ ] Have company logos ready (or know where to get them)

### Core Tasks (in order):
1. [ ] Task 1A: Hero section redesign (2 hours) - **DO FIRST**
2. [ ] Task 1E: Add logos section (2 hours) - **HIGH IMPACT**
3. [ ] Task 1B: Remove Education (30 min) - **QUICK WIN**
4. [ ] Task 1C: Collapse Expertise (2 hours) - **DECLUTTER**
5. [ ] Task 1D: Simplify Certifications (1 hour) - **CLEAN UP**
6. [ ] Task 1F: Fix Contact CTA (1.5 hours) - **CONVERSION**
7. [ ] Task 1G: Add testimonial placeholder (1 hour) - **TRANSPARENCY**
8. [ ] Task 1H: Update metadata (30 min) - **SEO**

### After Completion:
- [ ] Test on mobile (all changes responsive?)
- [ ] Test all CTAs (buttons work?)
- [ ] Check page load speed (Lighthouse score?)
- [ ] Review in both English and French
- [ ] Get feedback from 1-2 people
- [ ] Deploy to production

### Total Effort Breakdown:
- Hero + Logos: 4 hours (highest impact)
- Declutter (Education/Expertise/Certs): 3.5 hours
- Contact + Testimonials: 2.5 hours
- Metadata: 0.5 hours
- **Total: 10.5 hours** (under the 11-14 hour estimate)

---

## **EXPECTED RESULTS**

**Before Tier 1:**
- Cluttered, 7 sections, no photo, generic
- No logos, weak CTA, missing proof
- Looks like every other portfolio

**After Tier 1:**
- Clean, 5 sections, your photo prominent
- 4 company logos, clear consulting CTA
- Acknowledges testimonials coming
- Reduced clutter by 40%
- Professional and focused

**Next:** Once Tier 1 is complete, move to Tier 2 (case studies, testimonials, articles)

---

**Ready to start? Begin with Task 1A (Hero section) - it has the highest visual impact!** 🚀

