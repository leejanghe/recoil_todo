import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoriesState, IToDo, toDoState } from "../atoms";
import styled from "styled-components";

const ListForm = styled.div`
  /* list form css */

  li {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
    justify-content: space-between;
    button {
      width: 100px;
      height: 30px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: white;
      margin-left: 5px;
      cursor: pointer;
    }
    > div {
      .deletebtn {
        background-color: red;
        color: #fff;
      }
    }
    > span {
      margin-right: 10px;
      border: 1px solid black;
      padding: 10px;
      border-radius: 10px;
      background: black;
      color: #fff;
    }
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoriesState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const onDeleteBtn = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <ListForm>
      <li>
        <span>{text}</span>
        <div>
          {category &&
            categories.map((category) => (
              <button name={category} onClick={onClick}>
                {category}
              </button>
            ))}
          <button className="deletebtn" name="delete" onClick={onDeleteBtn}>
            delete
          </button>
        </div>
      </li>
    </ListForm>
  );
}

export default ToDo;
