import biographies from '../data/biographies.json';
import BiographyCard from './BiographyCard';

const Timeline = () => {
  const sorted = [...biographies].sort((a, b) => a.sortYear - b.sortYear);

  return (
    <section className="timeline">
      {sorted.map((bio) => (
        <BiographyCard
          key={bio.id}
          name={bio.name}
          born={bio.born}
          description={bio.description}
          sortYear={bio.sortYear}
        />
      ))}
    </section>
  );
};

export default Timeline;
