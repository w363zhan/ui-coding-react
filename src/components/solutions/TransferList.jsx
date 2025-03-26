import { useState } from "react";

export default function TransferList() {
  const initA = ["HTML", "JavaScript", "CSS", "TypeScript"];
  const initB = ["React", "Angular", "Vue", "Svelte"];
  const [listA, setListA] = useState(initA);
  const [listB, setListB] = useState(initB);
  const [checkedListA, setCheckedListA] = useState([]);
  const [checkedListB, setCheckedListB] = useState([]);

  const handleCheckboxOnChange = (list, item) => {
    const setChecked = list === listA ? setCheckedListA : setCheckedListB;
    setChecked((prev) => {
      if (prev.includes(item)) return prev.filter((ele) => ele !== item);
      return [...prev, item];
    });
  };

  const moveToList = (list, moveAll) => {
    const setNewList = list === listA ? setListA : setListB;
    const setOldList = list === listA ? setListB : setListA;
    const setNewChecked = list === listA ? setCheckedListA : setCheckedListB;
    const setOldChecked = list === listA ? setCheckedListB : setCheckedListA;
    const moved = moveAll
      ? list === listA
        ? listB
        : listA
      : list === listA
      ? checkedListB
      : checkedListA;
    const checked = list === listA ? checkedListB : checkedListA;
    setNewList((prev) => [...prev, ...moved]);
    setOldList((prev) => prev.filter((ele) => !moved.includes(ele)));
    setNewChecked((prev) => [...prev, ...checked]);
    setOldChecked((prev) => prev.filter((ele) => !checked.includes(ele)));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          border: "solid",
          maxWidth: "300px",
          width: "100%",
        }}
      >
        <List
          list={listA}
          checkedList={checkedListA}
          handleCheckboxOnChange={handleCheckboxOnChange}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            borderStyle: "none solid",
            padding: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            disabled={listB.length === 0}
            onClick={() => moveToList(listA, true)}
          >
            {"<<"}
          </button>
          <button
            disabled={checkedListB.length === 0}
            onClick={() => moveToList(listA)}
          >
            {"<"}
          </button>
          <button
            disabled={checkedListA.length === 0}
            onClick={() => moveToList(listB)}
          >
            {">"}
          </button>
          <button
            disabled={listA.length === 0}
            onClick={() => moveToList(listB, true)}
          >
            {">>"}
          </button>
        </div>
        <List
          list={listB}
          checkedList={checkedListB}
          handleCheckboxOnChange={handleCheckboxOnChange}
        />
      </div>
    </div>
  );
}

const List = ({ list, checkedList, handleCheckboxOnChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100px",
      }}
    >
      {list.map((item) => (
        <div>
          <input
            type="checkbox"
            checked={checkedList.includes(item)}
            onChange={() => handleCheckboxOnChange(list, item)}
          />
          {item}
        </div>
      ))}
    </div>
  );
};
