export interface Reason extends Error {
  response?: { status?: number };
}
