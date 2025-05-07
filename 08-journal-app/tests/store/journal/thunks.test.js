import { startNewNote } from "../../../src/store/journal/thunks";

describe("Pruebas en Journal Thunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de crear una nueva entrada en blanco", async () => {
    const uid = "TESTING-UID";
    getState.mockReturnValue({ auth: { uid: uid } });

    await startNewNote()(dispatch, getState);
  });
});
