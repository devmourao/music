export const TRANSITION_DURATIONS = [0.3, 0.6, 1.2];

export const DEFAULT_TRANSITION_DURATION = 0.6;

export function nextDuration(current: number): number {
  const index = TRANSITION_DURATIONS.indexOf(current);
  return TRANSITION_DURATIONS[(index + 1 + TRANSITION_DURATIONS.length) % TRANSITION_DURATIONS.length];
}

/**
 * Triangular dissolve curve through black.
 * First half fades out, preset swaps at the midpoint,
 * second half fades back in.
 */
export function dissolveState(
  elapsedSeconds: number,
  durationSeconds: number,
): { opacity: number; shouldSwap: boolean; finished: boolean } {
  const duration = Math.max(0.05, durationSeconds);
  const half = duration / 2;
  if (elapsedSeconds < half) {
    return {
      opacity: Math.max(0, Math.min(1, elapsedSeconds / half)),
      shouldSwap: false,
      finished: false,
    };
  }
  if (elapsedSeconds < duration) {
    return {
      opacity: Math.max(0, Math.min(1, 1 - (elapsedSeconds - half) / half)),
      shouldSwap: true,
      finished: false,
    };
  }
  return { opacity: 0, shouldSwap: true, finished: true };
}
