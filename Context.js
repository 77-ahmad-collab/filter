import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Data } from "./Components/Data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sortedrooms, setsortedrooms] = useState(Data);
  const sorted = (val) => {
    setsortedrooms(val);
  };
  const [rooms, setrooms] = useState(Data);
  const myrooms = (val) => {
    setrooms(val);
  };
  const [targ, settarg] = useState({
    type: "all",
    capacity: 1,
    price: 0,
    minprice: "0",
    maxprice: "0",
  });
  let temprooms;
  // const filter = () => {
  //   console.log("hello");
  //   let { type, capacity } = targ;
  //   let temprooms = rooms;
  //   if (type !== "all") {
  //     temprooms = temprooms.filter((a) => a.type === type);
  //   }
  //   console.log(temprooms, "the result");
  //   sorted(temprooms);
  // };
  const handlechange = (event) => {
    // console.log(event.target.value);
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value, type, "name an dvalue");
    settarg((val) => {
      return { ...val, [name]: value };
    });
    // filter();
  };
  // useEffect(() => {
  //   temprooms = rooms;
  // }, []);
  useEffect(() => {
    console.log("hello");
    let { type, capacity, price } = targ;
    temprooms = rooms;
    if (type !== "all") {
      temprooms = temprooms.filter((a) => a.type === type);
    }
    console.log(temprooms, "the result");
    if (capacity !== 1) {
      temprooms = temprooms.filter((room) => room.capacity >= capacity);
    }
    if (price != 0) {
      temprooms = temprooms.filter((room) => room.price <= price);
    }
    sorted(temprooms);
  }, [targ]);
  // useEffect(() => {
  //   let { capacity } = targ;
  //   console.log();
  //   if (capacity !== 1) {
  //     console.log(temprooms, "is");
  //   }
  // });
  // const filter = () => {
  //   console.log("hello");
  //   let { type, capacity } = targ;
  //   let temprooms = rooms;
  //   if (type !== "all") {
  //     temprooms = temprooms.filter((a) => a.type === type);
  //   }
  //   console.log(temprooms, "the result");
  //   sorted(temprooms);
  // };
  //   console.log(targ);
  //  if(targ.type !== "all"){

  //  }

  return (
    <AppContext.Provider
      value={{
        sortedrooms: sortedrooms,
        sorted: sorted,
        rooms: rooms,
        myrooms: myrooms,
        targ: targ,
        type: targ.type,
        capacity: targ.capacity,
        // filter: filter,
        handlechange: handlechange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const UseGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, UseGlobalContext, AppContext };
