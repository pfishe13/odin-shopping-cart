import React, { useEffect, useState } from 'react';

function SizeWheel({ changeSize }) {
  function changeBackground(e) {
    const parent = e.target.parentElement;
    for (let i = 0; i < parent.children.length; i += 1) {
      let child = parent.children[i];
      child.style.textDecoration = 'none';
    }
    e.target.style.textDecoration = 'underline';
  }

  return (
    <div>
      <ul className="size-wheel">
        <li
          onClick={(e) => {
            changeSize(e);
            changeBackground(e);
          }}
        >
          8
        </li>
        <li
          onClick={(e) => {
            changeSize(e);
            changeBackground(e);
          }}
        >
          8.5
        </li>
        <li
          onClick={(e) => {
            changeSize(e);
            changeBackground(e);
          }}
        >
          9
        </li>
        <li
          onClick={(e) => {
            changeSize(e);
            changeBackground(e);
          }}
        >
          9.5
        </li>
        <li
          style={{ textDecoration: 'underline' }}
          onClick={(e) => {
            changeSize(e);
            changeBackground(e);
          }}
        >
          10
        </li>
        <li
          onClick={(e) => {
            changeSize(e);
            changeBackground(e);
          }}
        >
          10.5
        </li>
        <li
          onClick={(e) => {
            changeSize(e);
            changeBackground(e);
          }}
        >
          11
        </li>
        <li
          onClick={(e) => {
            changeSize(e);
            changeBackground(e);
          }}
        >
          11.5
        </li>
        <li
          onClick={(e) => {
            changeSize(e);
            changeBackground(e);
          }}
        >
          12
        </li>
      </ul>
    </div>
  );
}

export default SizeWheel;
