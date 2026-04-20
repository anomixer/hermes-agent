import { Typography } from "@nous-research/ui";
import { useI18n } from "@/i18n/context";

/**
 * Compact language toggle — shows a clickable flag that switches between
 * English, Simplified Chinese, and Traditional Chinese.  Persists choice to localStorage.
 */
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  const toggle = () => {
    if (locale === "en") setLocale("zh");
    else if (locale === "zh") setLocale("tw");
    else setLocale("en");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="group relative inline-flex items-center gap-1.5 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      title={t.language.switchTo}
      aria-label={t.language.switchTo}
    >
      {/* Show the *current* language's flag — tooltip advertises the click action */}
      <span className="text-base leading-none">
        {locale === "en" ? "🇬🇧" : locale === "zh" ? "🇨🇳" : "🇹🇼"}
      </span>
      <Typography
        mondwest
        className="hidden sm:inline tracking-wide uppercase text-[0.65rem]"
      >
        {locale === "en" ? "EN" : locale === "zh" ? "简体" : "繁體"}
      </Typography>
    </button>
  );
}
