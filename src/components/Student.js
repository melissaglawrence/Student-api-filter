import React from 'react';

export default function Student(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState(null);
  const [tags, setTags] = React.useState([]);

  const saveTag = (e) => {
    e.preventDefault();
    setTags((prev) => [...prev, input]);
    e.target.reset();
  };

  props.student.tags = tags;

  const handleExpandTests = () => {
    setIsOpen(true);
  };

  const handleCollapseTests = () => {
    setIsOpen(false);
  };

  function reducer(previousValue, currentValue) {
    return previousValue + currentValue;
  }
  const studentGrades =
    props.student.grades.map((s) => parseInt(s)).reduce(reducer) /
    props.student.grades.length;

  return (
    <li className='student'>
      <img
        className='student__img'
        src={props.student.pic}
        alt={props.student.name}
      />
      <div className='student__info-container'>
        <h2 className='student__name'>{`${props.student.firstName} ${props.student.lastName}`}</h2>
        <ul className='student__info'>
          <li className='student__info_text'>Email: {props.student.email}</li>
          <li className='student__info_text'>
            Company: {props.student.company}
          </li>
          <li className='student__info_text'>Skill: {props.student.skill}</li>
          <li className='student__info_text'>Average:{studentGrades}%</li>
          <ul
            className={`${isOpen ? 'student__tests' : 'student__tests_hidden'}`}
          >
            {props.student.grades.map((s, index) => (
              <li>
                Test{index + 1}: {s}%
              </li>
            ))}
          </ul>
          {tags.map((tag) => (
            <span className='student__tags'>{tag}</span>
          ))}
        </ul>
        <form onSubmit={saveTag}>
          <input
            className='input input__tags'
            placeholder='Add a tag'
            type='text'
            aria-label='tags'
            name='tags'
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
      <button
        className={` button ${
          isOpen ? 'student__tests_collapse' : 'student__tests_expand'
        }`}
        onClick={isOpen ? handleCollapseTests : handleExpandTests}
      />
    </li>
  );
}
