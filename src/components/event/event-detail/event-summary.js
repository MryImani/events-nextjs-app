

function EventSummary(props) {
  const { title } = props;

  return (
    <section className="logistic-summary w-full bg-cyan-900">
      <h1 className="m-0 pt-12 text-3xl md:text-5xl text-center  text-white">
        {title}
      </h1>
    </section>
  );
}

export default EventSummary;

