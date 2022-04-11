import YearSection from './YearSection';
import timelineData from '../../data/timeline';

const YearContent = () => {
  timelineData.sort((a, b) => (a.year < b.year ? 1 : -1));

  return (
    <>
      <div className="content">
        {timelineData.map((currentYear) => {
          return (
            <>
              <YearSection data={currentYear} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default YearContent;
