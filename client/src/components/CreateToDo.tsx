import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import styled from "styled-components";

const CreateTodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 200px;
      height: 30px;
      border: 1px solid black;
      border-radius: 5px;
      box-sizing: border-box;
    }
    button {
      width: 100px;
      height: 30px;
      border: 1px solid black;
      border-radius: 5px;
      background-color: white;
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <CreateTodoWrapper>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </CreateTodoWrapper>
  );
}

export default CreateToDo;
