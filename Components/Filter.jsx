import React, { useState } from "react";
import { useEffect } from "react";
import { UseGlobalContext } from "../Context";
const Filter = () => {
  const { rooms, type, capacity, handlechange } = UseGlobalContext();

  const unique = ["all", ...new Set(rooms.map((val) => val.type))];

  return (
    <div>
      This is a filter component
      <br />
      <br />
      <select name="type" onChange={handlechange} value={type}>
        {unique.map((val) => {
          return <option value={val}>{val}</option>;
        })}
      </select>
      <select name="capacity" onChange={handlechange} value={capacity}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <br />
      <br />
      <input
        onChange={handlechange}
        type="range"
        name="price"
        id="points"
        min="0"
        max="500"
      ></input>
    </div>
  );
};

export default Filter;
