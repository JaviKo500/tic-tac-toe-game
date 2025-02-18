import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useGameStore } from "../store/game.store";

export const havePlayersSelected = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const gameStore = useGameStore();
  return gameStore.playersGame.length > 0 ? next() : next({ name: 'players-view' });
}