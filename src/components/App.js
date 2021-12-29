import React from 'react';
import * as api from '../utils/api';
import Student from './Student';
import SearchBar from './SearchBar';
import '../App.css';

function App() {
  const [students, setStudents] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [tagsSearch, setTagsSearch] = React.useState([]);

  React.useEffect(() => {
    api
      .getStudents()
      .then((res) => {
        setStudents(res.students.map((student) => student));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handelNameSearch = (e) => {
    setName(e.target.value);
  };

  const handleTagSearch = (e) => {
    setTagsSearch(e.target.value);
  };

  const handelTagFilter = () => {
    for (const student of students) {
      if (student.tags !== undefined)
        student.tags.filter((tag) => {
          tag.includs(tagsSearch);
        });
    }
  };

  return (
    <>
      <div>
        <section className='students'>
          <SearchBar placeholder='Search by name' onChange={handelNameSearch} />
          <SearchBar placeholder='Search by tag' onChange={handleTagSearch} />
          <ul className='students__list'>
            {students
              .filter(
                (student) =>
                  student.firstName.toLowerCase().includes(name) ||
                  student.lastName.toLowerCase().includes(name),
              )
              .map((student) => {
                return <Student key={student.id} student={student} />;
              })}
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
