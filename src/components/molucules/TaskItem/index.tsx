import React, { useState } from "react";
import Button from "../../atoms/button";
import Checkbox from "../../atoms/checkbox";
import { TaskItemType } from "./type";
import Modal from "../Modal";

const TaskItem: React.FC<TaskItemType> = ({ task }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };

  return (
    <li className={task.done ? "done" : ""}>
      <Checkbox
        onClick={() => console.log(`check ${task.id}`)}
        done={task.completed}
        title={task.title}
      />
      <Button onClick={() => handleOpen()}>編集</Button>
      <Button onClick={() => console.log(`remove ${task.id}`)}>削除</Button>
      <Modal openFlag={open} handleClose={handleClose} />
    </li>
  );
};

export default TaskItem;
