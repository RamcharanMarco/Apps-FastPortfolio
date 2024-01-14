import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware'

type user = any
type resume = any

interface TodoState {
  user: user;
  resume: resume;
  loginuser: (user: any) => void;
  setresume: (status: boolean) => void;
  logoutuser: () => void;
}

export const useStore = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        user: false,
        resume: false,
        setresume: (status) => {
          set((state) => ({
            resume: status,
          }),
          );
        },
        loginuser: (user) => {
            set((state) => ({
              user: user,
            }),
            );
          },
          logoutuser: () => {
            set((state) => ({
              user: null,
            }));
          }
      }),
      {
        name: "fastporfolio", // unique name
      }
))
)


