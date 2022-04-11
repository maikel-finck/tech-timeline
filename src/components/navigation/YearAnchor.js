const YearAnchor = ({year}) => {
  return (
    <>
      <div className="year row">
        <a href={"/#" + year} className="anchor">{year}</a>
      </div>
    </>
  );
};

export default YearAnchor;
