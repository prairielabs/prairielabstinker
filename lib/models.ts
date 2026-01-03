export type Provider =
  | "openai"
  | "anthropic"
  | "gemini"
  | "grok"
  | "deepseek";

export type ModelPricing = {
  input: number;              // $ / 1M tokens
  cachedInput: number | null; // $ / 1M tokens (null if not supported)
  output: number;             // $ / 1M tokens
  cacheStorageHourly?: number; // $ / 1M tokens / hour (Gemini only)
};

export type ModelDef = {
  id: string;          // API model id
  label: string;       // Human-readable
  provider: Provider;
  pricing: ModelPricing;
  notes: string;       // 1-line synthesis
};

export const MODELS: ModelDef[] = [
  // ======================
  // OpenAI
  // ======================
  {
    id: "gpt-5.2",
    label: "GPT-5.2",
    provider: "openai",
    pricing: { input: 1.75, cachedInput: 0.175, output: 14.0 },
    notes: "Best overall engine model; expensive output, great cached input",
  },
  {
    id: "gpt-5-mini",
    label: "GPT-5 Mini",
    provider: "openai",
    pricing: { input: 0.25, cachedInput: 0.025, output: 2.0 },
    notes: "Best default dev model; strong + cheap",
  },
  {
    id: "gpt-5-nano",
    label: "GPT-5 Nano",
    provider: "openai",
    pricing: { input: 0.05, cachedInput: 0.005, output: 0.4 },
    notes: "Ultra-cheap; helpers and glue tasks only",
  },
  {
    id: "gpt-5",
    label: "GPT-5",
    provider: "openai",
    pricing: { input: 1.25, cachedInput: 0.125, output: 10.0 },
    notes: "Legacy GPT-5; use 5.2 instead",
  },
  {
    id: "gpt-4.1",
    label: "GPT-4.1",
    provider: "openai",
    pricing: { input: 2.0, cachedInput: 0.5, output: 8.0 },
    notes: "Huge context; low Tier-1 TPM; non-reasoning",
  },

  // ======================
  // Anthropic (Claude)
  // ======================
  {
    id: "claude-haiku-4.5",
    label: "Claude Haiku 4.5",
    provider: "anthropic",
    pricing: { input: 1.0, cachedInput: 0.1, output: 5.0 },
    notes: "Best Claude default; fast and cache-friendly",
  },
  {
    id: "claude-sonnet-4.5",
    label: "Claude Sonnet 4.5",
    provider: "anthropic",
    pricing: { input: 3.0, cachedInput: 0.3, output: 15.0 },
    notes: "Strong reasoning; expensive output",
  },
  {
    id: "claude-opus-4.5",
    label: "Claude Opus 4.5",
    provider: "anthropic",
    pricing: { input: 5.0, cachedInput: 0.5, output: 25.0 },
    notes: "Maximum intelligence; use sparingly",
  },
  {
    id: "claude-haiku-3",
    label: "Claude Haiku 3",
    provider: "anthropic",
    pricing: { input: 0.25, cachedInput: 0.03, output: 1.25 },
    notes: "Cheap utility model; not for engine runs",
  },

  // ======================
  // Google Gemini
  // ======================
  {
    id: "gemini-3-flash-preview",
    label: "Gemini 3 Flash (Preview)",
    provider: "gemini",
    pricing: {
      input: 0.5,
      cachedInput: 0.05,
      output: 3.0,
      cacheStorageHourly: 1.0,
    },
    notes: "Fast + smart; cache storage billed hourly",
  },
  {
    id: "gemini-3-pro-preview",
    label: "Gemini 3 Pro (Preview)",
    provider: "gemini",
    pricing: {
      input: 2.0,
      cachedInput: 0.2,
      output: 12.0,
      cacheStorageHourly: 4.5,
    },
    notes: "Powerful agentic model; expensive cache storage",
  },
  {
    id: "gemini-2.5-pro",
    label: "Gemini 2.5 Pro",
    provider: "gemini",
    pricing: {
      input: 1.25,
      cachedInput: 0.125,
      output: 10.0,
      cacheStorageHourly: 4.5,
    },
    notes: "1M context; episodic use only",
  },
  {
    id: "gemini-2.5-flash-lite",
    label: "Gemini 2.5 Flash-Lite",
    provider: "gemini",
    pricing: {
      input: 0.1,
      cachedInput: 0.01,
      output: 0.4,
      cacheStorageHourly: 1.0,
    },
    notes: "Cheapest Gemini; helpers only",
  },
  {
    id: "gemini-2.0-flash-lite",
    label: "Gemini 2.0 Flash-Lite",
    provider: "gemini",
    pricing: { input: 0.075, cachedInput: null, output: 0.3 },
    notes: "Legacy Gemini; no caching support",
  },

  // ======================
  // xAI / Grok
  // ======================
  {
    id: "grok-4.1-fast-reasoning",
    label: "Grok 4.1 Fast (Reasoning)",
    provider: "grok",
    pricing: { input: 0.2, cachedInput: 0.05, output: 0.5 },
    notes: "Cheap fast reasoning; good for experimentation",
  },
  {
    id: "grok-4.1-fast",
    label: "Grok 4.1 Fast",
    provider: "grok",
    pricing: { input: 0.2, cachedInput: 0.05, output: 0.5 },
    notes: "Fast deterministic responses",
  },
  {
    id: "grok-4-0709",
    label: "Grok 4-0709",
    provider: "grok",
    pricing: { input: 3.0, cachedInput: 0.75, output: 15.0 },
    notes: "Most capable Grok; expensive output",
  },
  {
    id: "grok-3-mini",
    label: "Grok 3 Mini",
    provider: "grok",
    pricing: { input: 0.3, cachedInput: 0.075, output: 0.5 },
    notes: "Cheap helper model",
  },
  {
    id: "grok-3",
    label: "Grok 3",
    provider: "grok",
    pricing: { input: 3.0, cachedInput: 0.75, output: 15.0 },
    notes: "Legacy Grok; mostly for comparison",
  },

  // ======================
  // DeepSeek
  // ======================
  {
    id: "deepseek-chat",
    label: "DeepSeek Chat (V3.2)",
    provider: "deepseek",
    pricing: { input: 0.28, cachedInput: 0.028, output: 0.42 },
    notes: "Ultra-cheap; best sandbox + UI model",
  },
  {
    id: "deepseek-reasoner",
    label: "DeepSeek Reasoner (V3.2)",
    provider: "deepseek",
    pricing: { input: 0.28, cachedInput: 0.028, output: 0.42 },
    notes: "Cheap reasoning; high max output",
  },
];
