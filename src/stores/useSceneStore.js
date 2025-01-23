"use client";

import { create } from "zustand";

export const useSceneStore = create((set) => ({
    cameraPosition: [2, 2, 3],
    cameraTarget: [-4, -1.5, 0.75],

    setCameraPosition: (pos) => set({ cameraPosition: pos }),
    setCameraTarget: (target) => set({ cameraTarget: target }),

    setCamera: (pos, target) =>
        set({
            cameraPosition: pos,
            cameraTarget: target,
        }),

    sceneKey: 0,
    resetScene: () => set((state) => ({ sceneKey: state.sceneKey + 1 })),

    shrimps: [
        {
            model: "shrimp",
            id: "init",
            isDeleted: false,
        },
    ],

    addShrimp: (shrimp) =>
        set((state) => ({
            shrimps: [...state.shrimps, { ...shrimp, isDeleted: false }],
        })),

    markShrimpDeleted: (id) =>
        set((state) => ({
            shrimps: state.shrimps.map((shrimp) =>
                shrimp.id === id ? { ...shrimp, isDeleted: true } : shrimp
            ),
        })),

    removeShrimp: (id) =>
        set((state) => ({
            shrimps: state.shrimps.filter((shrimp) => shrimp.id !== id),
        })),
}));