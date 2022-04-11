const YearSection = ({data}) => {
  return (
    <>
      <section className="year-section">
        <div className="row">
          <div className="col">
            <h2 className="title text-center">
              {data.year}
              <a id={ data.year }></a>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-center">
            <h3>Languages</h3>
            {data.languages ?
              data.languages.map((name) => {
                return (
                  <>
                    <div>{ name }</div>
                  </>
                );
              }) : ''}
          </div>
          <div className="col-4 text-center">
            <h3>Software</h3>
            { data.software ?
              data.software.map((name) => {
                return (
                  <>
                    <div>{ name }</div>
                  </>
                );
              }) : '' }
          </div>
          <div className="col-4 text-center">
            <h3>OS</h3>
            { data.os ?
              data.os.map((name) => {
                return (
                  <>
                    <div>{ name }</div>
                  </>
                );
              }) : '' }
          </div>
          <div className="col-4 text-center">
            <h3>Focus</h3>
            { data.focus ?
              data.focus.map((name) => {
                return (
                  <>
                    <div>{ name }</div>
                  </>
                );
              }) : '' }
          </div>
          <div className="col-4 text-center">
            <h3>Hobby</h3>
            { data.hobby ?
              data.hobby.map((name) => {
                return (
                  <>
                    <div>{ name }</div>
                  </>
                );
              }) : '' }
          </div>
        </div>
      </section>
    </>
  );
};

export default YearSection;
