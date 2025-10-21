# Data Model: falloutall.com Personal Website

This document outlines the data structures for the content displayed on the falloutall.com personal website. All content will be managed either through static JSON files or markdown files with frontmatter, processed at build time.

## 1. Project Case Study

Represents a professional project Fallou TALL has worked on, showcasing his role, impact, and technologies used.

- **Entity Name**: `ProjectCaseStudy`
- **Source**: `website/src/data/projects.json` (array of objects)
- **Fields**:
  - `id`: `string` (Unique identifier, e.g., "bnc-data-pipeline")
  - `company`: `string` (Name of the company, e.g., "Banque Nationale du Canada")
  - `role`: `string` (Fallou's role in the project, e.g., "Lead Data Engineer")
  - `duration`: `string` (Duration of the project, e.g., "11/2021 – 04/2025")
  - `description`: `string` (Brief overview of the project challenge/context)
  - `impact`: `string[]` (List of quantifiable achievements/impacts, e.g., "Reduced data errors by 30%")
  - `technologies`: `string[]` (List of technologies used, e.g., "Azure", "Databricks", "Python", "Snowflake")
  - `image`: `string` (Optional: Path to a project-specific image, e.g., "/images/projects/bnc.png")
  - `link`: `string` (Optional: External link to project details or live demo)

## 2. Service Offering (Expertise Area)

Represents a key area of Fallou's data architecture expertise.

- **Entity Name**: `ServiceOffering`
- **Source**: `website/src/data/services.json` (array of objects) or directly in `Insights.tsx`
- **Fields**:
  - `id`: `string` (Unique identifier, e.g., "data-architecture-excellence")
  - `title`: `string` (Name of the expertise area, e.g., "Data Architecture Excellence")
  - `description`: `string` (Detailed description of the service/expertise)
  - `icon`: `string` (Name of Lucide React icon, e.g., "CheckCircle")
  - `details`: `string[]` (List of specific points or achievements related to the expertise)

## 3. Skill Category

Organizes Fallou's technical skills into logical categories.

- **Entity Name**: `SkillCategory`
- **Source**: `website/src/data/skills.json` (array of objects) or directly in `Expertise.tsx`
- **Fields**:
  - `name`: `string` (Category name, e.g., "Big Data & Cloud Platforms")
  - `skills`: `string[]` (List of individual skills, e.g., "Apache Hadoop", "Spark", "AWS")

## 4. Certification

Details Fallou's professional certifications.

- **Entity Name**: `Certification`
- **Source**: `website/src/data/certifications.json` (array of objects)
- **Fields**:
  - `id`: `string` (Unique identifier)
  - `name`: `string` (Name of the certification, e.g., "Azure Data Engineer Associate")
  - `issuer`: `string` (Issuing body, e.g., "Microsoft")
  - `date`: `string` (Date of achievement or validity period, e.g., "2021–2022")
  - `link`: `string` (Optional: Link to verify the certification)

## 5. Blog Post (Insight)

Represents a thought leadership article or insight.

- **Entity Name**: `BlogPost`
- **Source**: `website/src/content/insights/*.md` (markdown files with frontmatter)
- **Frontmatter Fields**:
  - `title`: `string` (Post title)
  - `date`: `string` (Publication date, e.g., "YYYY-MM-DD")
  - `tags`: `string[]` (Keywords for categorization, e.g., "Data Governance", "Cloud")
  - `excerpt`: `string` (Short summary of the post)
  - `author`: `string` (Author's name, default "Fallou TALL")
  - `image`: `string` (Optional: Path to a featured image)
- **Content**: Markdown body of the blog post.

## 6. Contact Information

General contact details for Fallou.

- **Entity Name**: `ContactInfo`
- **Source**: `website/src/lib/constants.ts` (object)
- **Fields**:
  - `location`: `string` (e.g., "Paris, France et Montreal Canada")
  - `email`: `string` (e.g., "cmftall@gmail.com")
  - `phone`: `string` (e.g., "+33 7 67 07 01 79")
  - `linkedin`: `string` (URL to LinkedIn profile)
  - `github`: `string` (URL to GitHub profile)
  - `languages`: `string[]` (e.g., "French", "English", "Wolof")

## 7. Site Configuration

Global site metadata and navigation.

- **Entity Name**: `SiteConfig`
- **Source**: `website/src/lib/constants.ts` (object)
- **Fields**:
  - `name`: `string` (Site name, e.g., "Fallou TALL")
  - `description`: `string` (Site tagline/description)
  - `url`: `string` (Canonical URL)
  - `ogImage`: `string` (Default OpenGraph image)
  - `links`: `object` (Social media links, e.g., Twitter, LinkedIn)

## Validation Rules

- All `id` fields must be unique.
- All `string` fields should be non-empty.
- URLs must be valid.
- Dates should follow a consistent format (e.g., YYYY-MM-DD).
- Arrays should not be empty where content is expected (e.g., `impact`, `technologies`, `skills`).