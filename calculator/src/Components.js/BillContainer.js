const BillContainer = ({ setBill }) => {
  return (
    <>
      <label htmlFor="bill" className="bill">
        Bill
      </label>
      <div className="bill-container">
        <input
          type="tel"
          id="bill"
          name="bill"
          placeholder="0"
          required
          onChange={(e) => setBill(parseFloat(e.target.value))}
        />
      </div>
    </>
  );
};

export default BillContainer;
