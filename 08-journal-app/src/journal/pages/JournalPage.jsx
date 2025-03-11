import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import JournalLayout from "../layout/JournalLayout";
import NoteView from "../views/NoteView";
import NothingSelectedView from "../views/NothingSelectedView";
import { startNewNote } from "../../store/journal/thunks";

const JournalPage = () => {
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
        reiciendis ratione, rem itaque obcaecati incidunt atque error velit.
        Dolorem quae quam debitis! Dolorem consequuntur maxime doloremque quos
        velit ipsum debitis. Ad quis non id cillum sunt excepteur. Veniam
        reprehenderit est cupidatat qui nisi eu consectetur ipsum incididunt
        elit nostrud eiusmod. Culpa Lorem deserunt do dolor est reprehenderit et
        quis minim sunt irure incididunt. Velit dolor consectetur laboris
        nostrud sit ullamco.
      </Typography> */}

      {/* NothingSelected */}
      <NothingSelectedView />

      <NoteView />
      {/* NoteView */}

      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};

export default JournalPage;
