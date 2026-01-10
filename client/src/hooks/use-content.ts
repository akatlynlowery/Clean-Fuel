import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

// GET /api/snacks
export function useSnacks() {
  return useQuery({
    queryKey: [api.snacks.list.path],
    queryFn: async () => {
      const res = await fetch(api.snacks.list.path);
      if (!res.ok) throw new Error("Failed to fetch snacks");
      return api.snacks.list.responses[200].parse(await res.json());
    },
  });
}

// GET /api/machines
export function useMachines() {
  return useQuery({
    queryKey: [api.machines.list.path],
    queryFn: async () => {
      const res = await fetch(api.machines.list.path);
      if (!res.ok) throw new Error("Failed to fetch machines");
      return api.machines.list.responses[200].parse(await res.json());
    },
  });
}
