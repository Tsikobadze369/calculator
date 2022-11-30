const PeopleContainer = ({ nbPeople, setNbPeople }) => {
  return (
    <div className="people-container">
      {nbPeople > 0 || nbPeople === null ? (
        <div>
          <label htmlFor="people">Number of People</label>
          <input
            type="tel"
            id="people"
            name="people"
            placeholder="0"
            required
            onChange={(e) => setNbPeople(parseFloat(e.target.value))}
          />
        </div>
      ) : (
        <div>
          <div className="nb-people-error">
            <label htmlFor="people" className="number-of-people">
              Number of People
            </label>
            <p className="input-error">Can't be a zero</p>
          </div>
          <input
            className="error"
            type="tel"
            id="people"
            name="people"
            placeholder="0"
            required
            onChange={(e) => setNbPeople(parseFloat(e.target.value))}
          />
        </div>
      )}
    </div>
  );
};

export default PeopleContainer;
