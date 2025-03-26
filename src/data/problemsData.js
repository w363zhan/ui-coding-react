import NestedCheckboxes from "../components/solutions/NestedCheckboxes";
import TransferList from "../components/solutions/TransferList";
import Stopwatch from "../components/solutions/Stopwatch";
import JobBoard from "../components/solutions/JobBoard";

const problemsData = [
  {
    id: 1,
    title: "Nested Checkboxes",
    solutionComponent: NestedCheckboxes,
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
  },
  {
    id: 2,
    title: "Transfer List",
    solutionComponent: TransferList,
    description:
      "Build a component that allows transferring of items between two lists.",
    requirements: [
      {
        title: "There are two lists each initially containing 4 items.",
      },
      {
        title: "Each item has a checkbox that can be checked/unchecked.",
      },
      {
        title: "Transferring",
        children: [
          {
            title:
              "Clicking on the double arrow buttons will transfer all items from one list to the other, as specified by the direction of the arrows.",
          },
          {
            title:
              "Clicking on the single arrow buttons will transfer only the selected items, as specified by the direction of the arrows.",
          },
          {
            title:
              "Transferred items are added to the bottom of the destination list.",
          },
          {
            title:
              "Item selection (checked) states are preserved after transferring.",
          },
          {
            title:
              "Buttons are disabled if there are no relevant items to be transferred.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Stopwatch",
    solutionComponent: Stopwatch,
    description:
      'Build a stopwatch widget which can measure how much time has passed. It shows the current timer and has two buttons underneath: "Start/Stop" and "Reset".',
    requirements: [
      {
        title:
          "Start/Stop Button: Starts/stops the timer depending on whether the timer is running.",
      },
      {
        title: "Reset: Resets the timer to 0 and stops the timer.",
      },
      {
        title:
          "The timer shows the number of seconds elapsed, down to the millisecond.",
        children: [
          {
            title:
              "Clicking on the timer should start/stop the timer. The Start/Stop button's label should update accordingly as well.",
          },
          {
            title:
              "It'd be a nice optional addition to format the time to display in hh:mm:ss:ms format.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Job Board",
    solutionComponent: JobBoard,
    description:
      "Build a job board that displays the latest job postings fetched from the Hacker News API, with each posting displaying the job title, poster, and date posted.\nHacker News has a public API to fetch jobs by Y Combinator companies. There's no single API that fetches a list of jobs together with the data, so you will have to make separate requests to fetch the necessary data and combine them to be displayed.\nUse https://hacker-news.firebaseio.com/v0/jobstories.json to fetch a list of job posting IDs.\nUse https://hacker-news.firebaseio.com/v0/item/{id}.json to fetch job posting details given its ID.",
    requirements: [
      {
        title:
          "The page should show 6 jobs on initial load with a button to load more postings.",
      },
      {
        title:
          'Clicking on the "Load more" button will load the next page of 6 postings. The button does not appear if there aren\'t any more postings to load.',
      },
      {
        title:
          "If there's a url field returned for the job details, make the job title a link that opens the job details page in a new window when clicked.",
      },
      {
        title: "The timestamp can be formatted in any way you like.",
      },
    ],
  },
];

export default problemsData;
