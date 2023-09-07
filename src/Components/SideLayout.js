

const SideLayout = ({ total_price }) => {
    return (
      <div className="side-layout">

        <h1 className="md:text-xl lg:text-2xl">+ Select meal</h1>
        <div className="passanger-details">
          <div className="flight-details">
            <h3>Riga - st.peterberg</h3>
            <p>Flight Duration: 5h 40min</p>
          </div>
          <p className="passangers">Adult Passenger 1</p>
          <p className="passangers">Adult Passenger 2</p>
        </div>

        <div className="price">
          <p>Total Cost: {total_price}</p>
        </div>

      </div>
    );
  }
  
  export default SideLayout;
  