export const DataList = async () => {
  const res = await fetch("https://v1.appbackend.io/v1/rows/XPMmgSnBtXS6");
  const { data } = await res.json();

  //traversal
  const allDebitData = data
    .filter((item) => item.category === "debit")
    .reduce((acc, item) => acc + item.amount, 0);
  const allCreditData = data
    .filter((item) => item.category === "credit")
    .reduce((acc, item) => acc + item.amount, 0);
  // console.log(allCreditData);
  // console.log(allDebitData);

  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">Your Activity</h3>
      <div>
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="grid grid-cols-3 border items-center "
            >
              <div className="border-r p-2">{item.name}</div>
              <div className="border-r p-2">{item.amount}</div>
              <div className="p-2">{item.category}</div>
            </div>
          );
        })}
      </div>
      <section>
        <h3 className="text-3xl font-bold">Financial Summary</h3>
        <p>Total Debit : {allDebitData}</p>
        <p>Total Credit : {allCreditData}</p>
        <p>Total Amount : {allDebitData - allCreditData}</p>
      </section>
    </div>
  );
};
