import React, { useContext } from "react";
import { UseGlobalContext } from "../Context";
const Rooms = () => {
  // const value = useContext(   AppContext);
  const { sortedrooms, rooms } = UseGlobalContext();
  // console.log(sortedrooms);
  //   console.log(sortedrooms, rooms, useGlobalContext);
  return (
    <div>
      This is a room component
      {sortedrooms.length == 0 ? (
        <h2>Unfortunately no item</h2>
      ) : (
        sortedrooms.map((val, index) => {
          const { name, type, price, size, capacity, description } = val;
          return (
            <section key={index}>
              <h3>{name}</h3>
              <h3>{type}</h3>
              <h3>{price}</h3>
              <h3>{size}</h3>
              <h3>{capacity}</h3>
              <h3>{description}</h3>
              ===============End of ===========
            </section>
          );
        })
      )}
    </div>
  );
};

export default Rooms;
