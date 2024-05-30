// entities/comment/lib/validation.ts
export function isValidComment(content: string): boolean {
  return content.length > 0 && content.length <= 500;
}
