

const SideLayout = ({ total_price }) => {
    return (
      <div>

        <h2>+ Select meal</h2>

        <div>
          <div>

            <h3>Riga - st.peterberg</h3>
            <p>Flight Duration: 5h 40min</p>

          </div>

          <p>Adult Passenger 1</p>
          <p>Adult Passenger 2</p>

        </div>

        <div>
          <p>Total Cost: {total_price}</p>
        </div>
        
      </div>
    );
  }
  
  export default SideLayout;
  