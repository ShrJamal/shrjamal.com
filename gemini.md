This project is a personal portfolio website built with Astro and styled using Tailwind CSS.

## General Guidelines:

- **Astro & Tailwind CSS:** Always prioritize Astro's component-based architecture and Tailwind CSS for styling. When making changes, ensure they are idiomatic to both frameworks.
- **Personal Portfolio Context:** Remember this is a personal portfolio. Changes should align with presenting a professional and aesthetically pleasing online presence.
- **Existing Conventions:** Adhere strictly to existing code conventions, file structure, and naming.
- **Minimal Dependencies:** Avoid introducing new libraries or frameworks unless absolutely necessary and after explicit confirmation.
- **Testing:** For any new features or bug fixes, consider adding appropriate tests if a testing framework is already in place or if it's a critical component.
- **Clarity & Conciseness:** Keep code clean, readable, and well-documented where necessary (focus on _why_, not _what_).

## Specific Areas of Focus:

- **Performance:** Optimize for fast loading times and smooth user experience, especially for images and animations.
- **Responsiveness:** Ensure the website is fully responsive and looks good on all device sizes.
- **Accessibility:** Strive for good accessibility practices (e.g., semantic HTML, ARIA attributes, keyboard navigation).
- **Content Updates:** When asked to update content, ensure the changes are accurate, well-formatted, and maintain the overall tone of a professional portfolio.
- **SEO:** Consider basic SEO principles when adding or modifying content (e.g., appropriate use of headings, meta descriptions).

## Before Making Changes:

1.  **Read the Request Carefully:** Understand the full scope of the task.
2.  **Review Relevant Files:** Use `read_file` or `search_file_content` to gather context from related Astro components, CSS files, and utility functions.
3.  **Formulate a Plan:** Outline the steps you intend to take before execution.
4.  **Confirm Ambiguity:** If any part of the request is unclear, ask for clarification.

## Running the Project:

We use `bun` as our primary package manager and development tool. Here are the commands you can use:

- **Development:** Use `bun dev` to start the development server.
- **Production:** Use `bun run build` to build the production version of the project.
