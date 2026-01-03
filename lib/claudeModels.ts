export function resolveClaudeModel(id: string): string {
  switch (id) {
    case "claude-haiku-4.5":
      return "claude-3-5-haiku-20241022";
    case "claude-sonnet-4.5":
      return "claude-3-5-sonnet-20241022";
    case "claude-opus-4.5":
      return "claude-3-opus-20240229";
    case "claude-haiku-3":
      return "claude-3-haiku-20240307";
    default:
      throw new Error(`Unknown Claude model id: ${id}`);
  }
}
