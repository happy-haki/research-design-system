# Quick Start

## 1) Install dependencies

Install dependencies with the repository's configured package manager.

## 2) Validate workspace

Run validation scripts in this order:

1. `typecheck`
2. `test`
3. `build`

## 3) Consume tokens + UI styles

```ts
import "@research-ds/tokens/tokens.css";
import "@research-ds/ui/styles.css";
```

## 4) Use primitives

```tsx
import { Button, Card } from "@research-ds/ui";

export function Example() {
  return (
    <div className="rds-surface" style={{ padding: "1rem" }}>
      <Card>
        <Button variant="primary" size="md">
          Primary action
        </Button>
      </Card>
    </div>
  );
}
```

## 5) Theme switch

- Light theme uses `:root` token values.
- Add `.dark` to a parent element to activate dark token values.

```html
<html class="dark"></html>
```
