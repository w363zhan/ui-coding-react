const Section = ({ sectionTitle, items }) => {
  return (
    <div>
      <h2>{sectionTitle}</h2>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = ({ item }) => {
  return (
    <li>
      {item.title}
      {item.children && (
        <ul>
          {item.children.map((child, index) => (
            <ListItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Section;
