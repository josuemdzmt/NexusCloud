/**
 * idleSession
 * Bloqueo por inactividad (default 2h). Vive junto a authSession / AuthService.
 */

import AuthService from '@/services/auth/AuthService';
import { isAuthenticated } from '@/services/auth/authSession';

/**
 * Parsea VITE_IDLE_TIMEOUT_MS (ignora comentarios / basura tras el número).
 * @returns {number}
 */
function handleParseIdleTimeoutMs() {
  const strRaw = String(import.meta.env.VITE_IDLE_TIMEOUT_MS ?? '').trim();
  const strMatch = strRaw.match(/^(\d+)/);
  const numParsed = strMatch ? Number(strMatch[1]) : NaN;
  return Number.isFinite(numParsed) && numParsed > 0 ? numParsed : 7_200_000;
}

const numIdleTimeoutMs = handleParseIdleTimeoutMs();
const numActivityThrottleMs = 30_000;
const numCheckEveryMs = 60_000;

const lstActivityEvents = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart', 'click'];

let numLastActivityAt = Date.now();
let numLastThrottleAt = 0;
let numCheckIntervalId = null;
let bolIdleActive = false;
let bolLocking = false;

/**
 * Reinicia el marcador de última actividad.
 */
export function handleResetIdleTimer() {
  numLastActivityAt = Date.now();
}

/**
 * Actividad del usuario (throttled).
 */
function handleIdleActivity() {
  const numNow = Date.now();
  if (numNow - numLastThrottleAt < numActivityThrottleMs) {
    return;
  }
  numLastThrottleAt = numNow;
  handleResetIdleTimer();
}

/**
 * Revisa si se superó el timeout de inactividad.
 */
function handleIdleTick() {
  if (!bolIdleActive || bolLocking) {
    return;
  }
  if (!isAuthenticated()) {
    handleStopIdleWatch();
    return;
  }
  if (Date.now() - numLastActivityAt >= numIdleTimeoutMs) {
    bolLocking = true;
    handleStopIdleWatch();
    AuthService.handleLockSession().finally(() => {
      bolLocking = false;
    });
  }
}

/**
 * Inicia el watcher de inactividad (idempotente).
 */
export function handleStartIdleWatch() {
  if (bolIdleActive) {
    handleResetIdleTimer();
    return;
  }
  if (!isAuthenticated()) {
    return;
  }

  bolIdleActive = true;
  handleResetIdleTimer();

  lstActivityEvents.forEach((strEvent) => {
    window.addEventListener(strEvent, handleIdleActivity, { passive: true });
  });

  numCheckIntervalId = window.setInterval(handleIdleTick, numCheckEveryMs);
}

/**
 * Detiene el watcher de inactividad.
 */
export function handleStopIdleWatch() {
  if (!bolIdleActive && !numCheckIntervalId) {
    return;
  }

  bolIdleActive = false;

  lstActivityEvents.forEach((strEvent) => {
    window.removeEventListener(strEvent, handleIdleActivity);
  });

  if (numCheckIntervalId !== null) {
    window.clearInterval(numCheckIntervalId);
    numCheckIntervalId = null;
  }
}

export default {
  handleStartIdleWatch,
  handleStopIdleWatch,
  handleResetIdleTimer
};
