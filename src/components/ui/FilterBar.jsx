import './FilterBar.css';

const CATEGORIES = ['All', 'Web App', 'AI/ML', 'Mobile', 'Game', 'Tool'];
const YEARS = ['All', '2024', '2023', '2022'];

export default function FilterBar({ category, year, onCategory, onYear, total }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__left">
        <div className="filter-bar__group">
          <span className="filter-bar__label">Category</span>
          <div className="filter-bar__tabs" role="tablist">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={category === c}
                className={`filter-bar__tab ${category === c ? 'filter-bar__tab--active' : ''}`}
                onClick={() => onCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-bar__group">
          <span className="filter-bar__label">Year</span>
          <div className="filter-bar__tabs" role="tablist">
            {YEARS.map((y) => (
              <button
                key={y}
                role="tab"
                aria-selected={year === y}
                className={`filter-bar__tab ${year === y ? 'filter-bar__tab--active' : ''}`}
                onClick={() => onYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="filter-bar__count">
        <span className="filter-bar__count-num">{total}</span>
        <span className="filter-bar__count-label">project{total !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
}
