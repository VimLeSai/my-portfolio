import ExpStatsCard from './card';
import stats from '@/lib/experience-stats';

const ExpStats = () => {
  return (
    <section className="mb-32 grid grid-cols-1 gap-4 md:grid-cols-3">
      {stats.map((s) => (
        <ExpStatsCard {...s} key={s.label} />
      ))}
    </section>
  );
};

export default ExpStats;
