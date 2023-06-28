const ListItem = (props) => {
  const { text } = props;
  return (
    <li className="flex items-start space-x-5 mb-2 md:mb-2">
      <img
        src="/assets/images/icon-list.svg"
        alt="list icon"
        className="h-5 w-5"
      />
      <span>{text}</span>
    </li>
  );
};

export default ListItem;
