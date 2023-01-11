import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { categoriesState } from "../atoms";
import styled from "styled-components";

const CreateCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 200px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    box-sizing: border-box;
    margin-left: 5px;
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
`;

interface ICategories {
  addCategories: string;
}

function CreateCategory() {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const { register, handleSubmit, setValue } = useForm<ICategories>();
  const handleAddCategory = ({ addCategories }: ICategories) => {
    const newCategories = [...categories, addCategories];
    setCategories(newCategories);
    setValue("addCategories", "");
  };

  return (
    <CreateCategoryWrapper>
      <input
        {...register("addCategories", {
          required: "add category",
        })}
        placeholder="Write category"
      />
      <button onClick={handleSubmit(handleAddCategory)}>add category</button>
    </CreateCategoryWrapper>
  );
}

export default CreateCategory;
