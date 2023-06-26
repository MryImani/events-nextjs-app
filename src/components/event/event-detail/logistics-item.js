

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li
      className={`flex flex-row text-2xl items-center text-center md:text-left md:items-start text-cyan-50 md:flex-col`}
    >
      <span className={`block`}>
        <Icon className="mr-4 text-cyan-50" />
      </span>
      <span>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;

