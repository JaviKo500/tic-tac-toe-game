<template>
  <div class="flex justify-center">
    <div :class="[
      'avatar avatar-placeholder',
      isActive ? 'avatar-online' : ''
    ]">
      <div :class="[
        'text-neutral-content rounded-full border-2',
        size,
        player.colorClass ? player.colorClass : 'bg-neutral',
      ]">
        <span class="text-3xl">{{ getFirstLetters(player.nickname, 2) }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getFirstLetters } from '@/modules/common/helpers';
import type { PlayerInterface } from '@/modules/players/interfaces/player.interface';

interface Props {
  player: PlayerInterface;
  isActive?: boolean;
  size?: 'w-16' | 'w-24';
}
withDefaults(
  defineProps<Props>(),
  {
    size: 'w-16',
    isActive: false,
  }
);
</script>