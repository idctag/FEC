import * as migration_20241216_153225_init from './20241216_153225_init';

export const migrations = [
  {
    up: migration_20241216_153225_init.up,
    down: migration_20241216_153225_init.down,
    name: '20241216_153225_init'
  },
];
