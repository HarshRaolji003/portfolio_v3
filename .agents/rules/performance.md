# Performance & Optimization

- Split code when it provides a measurable or meaningful performance benefit.
- Use dynamic imports and lazy loading for appropriate components or routes to reduce initial bundle size.
- Avoid unnecessary re-renders and expensive computations.
- Use memoization (`useMemo`, `useCallback`, `React.memo`) only when there is a clear performance justification.
- Avoid premature optimization. Prioritize clean, readable code and optimize based on actual performance requirements.
