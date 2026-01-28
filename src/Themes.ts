export const themes = {
  light: {
    background: '#ffffff',
    foreground: '#111827',
    card: '#ffffff',
    cardHover: '#f9fafb',
    border: '#e5e7eb',
    muted: '#6b7280',
  },
  dark: {
    background: '#111827',
    foreground: '#f9fafb',
    card: '#1f2937',
    cardHover: '#374151',
    border: '#374151',
    muted: '#9ca3af',
  },
} as const;

export type ThemeMode = keyof typeof themes;