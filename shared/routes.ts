import { z } from 'zod';
import { insertSnackSchema, insertMachineSchema, snacks, machines } from './schema';

export const api = {
  snacks: {
    list: {
      method: 'GET' as const,
      path: '/api/snacks',
      responses: {
        200: z.array(z.custom<typeof snacks.$inferSelect>()),
      },
    },
  },
  machines: {
    list: {
      method: 'GET' as const,
      path: '/api/machines',
      responses: {
        200: z.array(z.custom<typeof machines.$inferSelect>()),
      },
    },
  },
};

export type SnackResponse = z.infer<typeof api.snacks.list.responses[200]>;
export type MachineResponse = z.infer<typeof api.machines.list.responses[200]>;
