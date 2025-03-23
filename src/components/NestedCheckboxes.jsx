import { useState, useEffect } from "react";

export default function NestedCheckboxes() {
  const checkboxesData = [
    {
      id: 1,
      name: "Electronics",
      checked: false,
      children: [
        {
          id: 2,
          name: "Mobile phones",
          checked: false,
          children: [
            {
              id: 3,
              name: "iPhone",
              checked: false,
            },
            {
              id: 4,
              name: "Android",
              checked: false,
            },
          ],
        },
        {
          id: 5,
          name: "Laptops",
          checked: false,
          children: [
            {
              id: 6,
              name: "MacBook",
              checked: false,
            },
            {
              id: 7,
              name: "Surface Pro",
              checked: false,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Books",
      checked: false,
      children: [
        {
          id: 9,
          name: "Fiction",
          checked: false,
        },
        {
          id: 10,
          name: "Non-fiction",
          checked: false,
        },
      ],
    },
    {
      id: 11,
      name: "Toys",
      checked: false,
    },
  ];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Checkboxes defaultCheckboxData={checkboxesData} />
    </div>
  );
}

const Checkboxes = ({ defaultCheckboxData }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {defaultCheckboxData.map((d) => (
        <Checkbox key={d.id} data={d} />
      ))}
    </div>
  );
};

const Checkbox = ({ data, updateParent }) => {
  const [dataState, setDataState] = useState(data);

  const handleCheckboxChange = (e) => {
    const update = (o, ch) => {
      const next = { ...o, checked: ch };
      if (next.children) {
        next.children = next.children.map((c) => update(c, ch));
      }
      return next;
    };
    setDataState((prev) => {
      const next = update(prev, e.target.checked);
      if (updateParent) {
        updateParent(next);
      }
      return next;
    });
  };

  const handleChild = (childData) => {
    setDataState((prev) => {
      const next = { ...prev };
      next.children = next.children.map((c) =>
        c.id === childData.id ? childData : c
      );
      next.checked = next.children.every((c) => c.checked === true)
        ? true
        : next.children.every((c) => c.checked === false)
        ? false
        : "intermediate";
      if (updateParent) {
        updateParent(next);
      }
      return next;
    });
  };

  useEffect(() => {
    setDataState(data);
  }, [data]);

  return (
    <div style={{ textAlign: "left" }}>
      <span style={{ position: "relative" }}>
        <input
          type="checkbox"
          checked={dataState.checked === true}
          onChange={handleCheckboxChange}
        />
        {dataState.checked === "intermediate" && (
          <div
            style={{
              position: "absolute",
              top: -4,
              left: 7,
              pointerEvents: "none",
            }}
          >
            {" "}
            -{" "}
          </div>
        )}
      </span>
      {dataState.name}
      <div style={{ paddingLeft: "16px" }}>
        {dataState.children?.map((d) => (
          <Checkbox key={d.id} data={d} updateParent={handleChild} />
        ))}
      </div>
    </div>
  );
};
