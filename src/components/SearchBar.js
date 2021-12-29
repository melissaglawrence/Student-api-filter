import React from 'react';

export default function Student(props) {
  return (
    <>
      <input
        className='input'
        type='text'
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}
