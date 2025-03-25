import NestedCheckboxes from "../components/solutions/NestedCheckboxes";

const problemsData = [
  {
    id: 1,
    title: "Nested Checkboxes",
    description:
      "Build a component that displays a hierarchical structure of checkboxes. The component should handle parent-child relationships between checkboxes and manage their states efficiently.",
    requirements: [
      {
        title:
          "A checkbox's value is determined by the value of its direct children:",
        children: [
          {
            title:
              "When all children of a parent are checked, the parent should be checked.",
          },
          {
            title:
              "When some (but not all or none) children of a parent are checked, the parent should be in an indeterminate state, with a dash displayed within the box.",
          },
          {
            title:
              "When none of the children of a parent are checked, the parent is unchecked.",
          },
        ],
      },
      {
        title:
          "If a parent checkbox is checked or unchecked, all the descendant checkboxes (not just direct children) will be updated with that new value.",
      },
      {
        title:
          "The focus of the exercise is on the functionality and not the styling. You may style the checkboxes in any way you prefer as long as the states are clear.",
      },
    ],
    solutionComponent: NestedCheckboxes,
  },
];

export default problemsData;
