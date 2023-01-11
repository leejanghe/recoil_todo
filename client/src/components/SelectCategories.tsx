import { useRecoilState } from "recoil";
import { categoryState, categoriesState } from "../atoms";
import styled from "styled-components";

const SelectCategoriesWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */

  select {
    width: 150px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    box-sizing: border-box;
  }
`;

function SelectCategories() {
  const [category, setCategory] = useRecoilState(categoryState);
  const [categories] = useRecoilState(categoriesState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <SelectCategoriesWrapper>
      <select value={category} onInput={onInput}>
        {categories?.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </SelectCategoriesWrapper>
  );
}

export default SelectCategories;
