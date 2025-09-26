# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🎨 Tailwind CSS Sizing & Style Guide

## 🔤 Typography (font size → `text-{size}`)
| Class       | Font Size | Line Height |
|-------------|-----------|-------------|
| `text-xs`   | 0.75rem (12px) | 1rem (16px) |
| `text-sm`   | 0.875rem (14px) | 1.25rem (20px) |
| `text-base` | 1rem (16px) | 1.5rem (24px) |
| `text-lg`   | 1.125rem (18px) | 1.75rem (28px) |
| `text-xl`   | 1.25rem (20px) | 1.75rem (28px) |
| `text-2xl`  | 1.5rem (24px) | 2rem (32px) |
| `text-3xl`  | 1.875rem (30px) | 2.25rem (36px) |
| `text-4xl`  | 2.25rem (36px) | 2.5rem (40px) |
| `text-5xl`  | 3rem (48px) | 1 |
| `text-6xl`  | 3.75rem (60px) | 1 |
| `text-7xl`  | 4.5rem (72px) | 1 |
| `text-8xl`  | 6rem (96px) | 1 |
| `text-9xl`  | 8rem (128px) | 1 |

---

## 📏 Spacing (margin/padding → `m-{n}`, `p-{n}`, `gap-{n}`)
| Class | rem  | px  |
|-------|------|-----|
| `0`   | 0    | 0px |
| `0.5` | 0.125rem | 2px |
| `1`   | 0.25rem | 4px |
| `1.5` | 0.375rem | 6px |
| `2`   | 0.5rem | 8px |
| `2.5` | 0.625rem | 10px |
| `3`   | 0.75rem | 12px |
| `3.5` | 0.875rem | 14px |
| `4`   | 1rem | 16px |
| `5`   | 1.25rem | 20px |
| `6`   | 1.5rem | 24px |
| `8`   | 2rem | 32px |
| `10`  | 2.5rem | 40px |
| `12`  | 3rem | 48px |
| `16`  | 4rem | 64px |
| `20`  | 5rem | 80px |
| `24`  | 6rem | 96px |
| `32`  | 8rem | 128px |
| `40`  | 10rem | 160px |
| `48`  | 12rem | 192px |
| `56`  | 14rem | 224px |
| `64`  | 16rem | 256px |
| `80`  | 20rem | 320px |
| `96`  | 24rem | 384px |

---

## 📐 Width & Height (`w-{n}`, `h-{n}`)
- Uses same spacing scale as above.  
- Special classes:  
  - `w-full`, `h-full` → 100%  
  - `w-screen`, `h-screen` → viewport width/height  
  - `max-w-xs` → 20rem (320px)  
  - `max-w-sm` → 24rem (384px)  
  - `max-w-md` → 28rem (448px)  
  - `max-w-lg` → 32rem (512px)  
  - `max-w-xl` → 36rem (576px)  
  - `max-w-2xl` → 42rem (672px)  
  - `max-w-3xl` → 48rem (768px)  
  - `max-w-7xl` → 80rem (1280px)  

---

## ⭕ Border Radius (`rounded-{n}`)
| Class         | Radius |
|---------------|--------|
| `rounded-none` | 0px |
| `rounded-sm`   | 2px |
| `rounded`      | 4px |
| `rounded-md`   | 6px |
| `rounded-lg`   | 8px |
| `rounded-xl`   | 12px |
| `rounded-2xl`  | 16px |
| `rounded-3xl`  | 24px |
| `rounded-full` | pill / circle |

---

## 🎨 Colors
Tailwind provides color palettes for `gray`, `slate`, `red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `purple`, `pink`, etc.  

Each color has **shades from 50 → 900**:  

Example for **purple**:  
- `bg-purple-50` → very light  
- `bg-purple-500` → base  
- `bg-purple-900` → very dark  

You can apply colors to:  
- Background: `bg-purple-500`  
- Text: `text-purple-500`  
- Border: `border-purple-500`  
- Shadow: `shadow-purple-500/50`  

---

## 🌫 Backdrop Utilities (blur, brightness, contrast, etc.)

### 🔹 Backdrop Blur
| Class              | Blur Amount |
|--------------------|-------------|
| `backdrop-blur-none` | 0 |
| `backdrop-blur-sm`   | 4px |
| `backdrop-blur`      | 8px |
| `backdrop-blur-md`   | 12px |
| `backdrop-blur-lg`   | 16px |
| `backdrop-blur-xl`   | 24px |
| `backdrop-blur-2xl`  | 40px |
| `backdrop-blur-3xl`  | 64px |

---

## 🌞 Backdrop Brightness
| Class                  | Value |
|------------------------|-------|
| `backdrop-brightness-0`   | 0 |
| `backdrop-brightness-50`  | 0.5 |
| `backdrop-brightness-75`  | 0.75 |
| `backdrop-brightness-100` | 1 |
| `backdrop-brightness-105` | 1.05 |
| `backdrop-brightness-110` | 1.1 |
| `backdrop-brightness-125` | 1.25 |
| `backdrop-brightness-150` | 1.5 |
| `backdrop-brightness-200` | 2 |

---

## 🌗 Backdrop Contrast
| Class                | Value |
|----------------------|-------|
| `backdrop-contrast-0` | 0 |
| `backdrop-contrast-50` | 0.5 |
| `backdrop-contrast-75` | 0.75 |
| `backdrop-contrast-100` | 1 |
| `backdrop-contrast-125` | 1.25 |
| `backdrop-contrast-150` | 1.5 |
| `backdrop-contrast-200` | 2 |

---

## 🌀 Other Backdrop Utilities
- `backdrop-grayscale` / `backdrop-grayscale-0`  
- `backdrop-hue-rotate-{deg}` (`0`, `15`, `30`, … up to `180`)  
- `backdrop-invert`  
- `backdrop-opacity-{0–100}`  
- `backdrop-saturate-{50, 100, 150, 200}`  
- `backdrop-sepia` / `backdrop-sepia-0`  

---

## 🕶 Shadow Sizes (`shadow-*`)
| Class        | Shadow |
|--------------|-----------------------------------|
| `shadow-sm`  | 0 1px 2px 0 rgba(0,0,0,0.05) |
| `shadow`     | 0 1px 3px rgba(0,0,0,0.1) |
| `shadow-md`  | 0 4px 6px rgba(0,0,0,0.1) |
| `shadow-lg`  | 0 10px 15px rgba(0,0,0,0.1) |
| `shadow-xl`  | 0 20px 25px rgba(0,0,0,0.1) |
| `shadow-2xl` | 0 25px 50px rgba(0,0,0,0.25) |
| `shadow-inner` | inset shadow |
| `shadow-none` | no shadow |

---

✅ This gives you a quick **reference style guide** for your portfolio project.  
