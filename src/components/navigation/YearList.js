import timelineData from '../../data/timeline';
import YearAnchor from './YearAnchor';

const YearList = () => {
  timelineData.sort((a, b) => ( a.year < b.year ? 1 : -1 ));

  return (
    <>
      <h3 className="title">Years</h3>
      <div className="years">
        {timelineData.map((data) => {
          return (
            <>
              <YearAnchor year={data.year} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default YearList;
