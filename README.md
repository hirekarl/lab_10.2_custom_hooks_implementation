# Lab 10.2: Custom Hooks Implementation

[Karl Johnson](https://github.com/hirekarl)  
2025-RTT-30  
<time datetime="2025-08-04">2025-08-04</time>  

![Alt text for preview image.](./preview.png)

## Overview
### Viewer Instructions
1. In the terminal, run:

```bash
cd custom-hooks && npm i && npm run dev
```

2. Navigate to http://localhost:5173 in the browser.

### Submission Source
See [`./custom-hooks/src/App.tsx`](./custom-hooks/src/App.tsx) for top-level application behavior.

### Reflection
> TODO

## Assignment
### Instructions
In modern React development, abstracting reusable logic into custom Hooks is a fundamental practice for building maintainable and scalable applications. You’ve been tasked with developing two common custom Hooks: `usePagination` for managing client-side pagination logic, and `useDebounce` for debouncing rapidly changing values, often used with search inputs.

This lab will challenge you to think about hook design, state management within hooks, handling dependencies, and ensuring your hooks are generic enough for reuse.

### Implementation Guidelines
- **Hook Design**: Strive for clarity and reusability in your hook’s API.
- **State Management**: Use useState appropriately within your hooks.
- **Side Effects**: Use useEffect for any side effects. Ensure correct dependency arrays and cleanup functions.
- **TypeScript** (*Optional but Recommended*): If you are comfortable with TypeScript, try to type your hook inputs and return values for better self-documentation and safety.
