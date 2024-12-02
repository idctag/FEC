import * as migration_20241130_101315_footer from './20241130_101315_footer';

export const migrations = [
  {
    up: migration_20241130_101315_footer.up,
    down: migration_20241130_101315_footer.down,
    name: '20241130_101315_footer'
  },
];
