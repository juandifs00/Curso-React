import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    savedMessage: "",
    notes: [],
    activeNote: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },

    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },

    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.savedMessage = "";
    },

    setNotes: (state, action) => {
      state.notes = action.payload;
    },

    setSaving: (state) => {
      state.isSaving = true;
      state.savedMessage = "";
    },

    updatedNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id == action.payload.id) {
          return action.payload;
        }
        return note;
      });

      state.savedMessage = `${action.payload.title}, actualizado correctamente.`;
    },

    // setPhotosToActiveNotes: (state, action) => {
    //   state.active.imageUrls = [...action.active.imageUrls, ...action.payload];
    //   state.isSaving = false;
    // },

    setPhotosToActiveNotes: (state, action) => {
      if (!state.active.imageUrls) state.active.imageUrls = []; // Inicializa imageUrls si es undefined

      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },

    deleteNoteById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNotes,
  setSaving,
  updatedNote,
} = journalSlice.actions;
