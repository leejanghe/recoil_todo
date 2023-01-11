import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import SelectCategories from "./SelectCategories";
import ToDo from "./ToDo";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>Recoil To Dos</h1>
      <hr />
      <Layout>
        <SelectCategories />
        <CreateCategory />
      </Layout>
      <CreateToDo />
      <hr />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
