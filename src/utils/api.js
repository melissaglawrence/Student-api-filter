const getStudents = () => {
  return fetch('https://api.hatchways.io/assessment/students', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error ${res.status}`);
    }
  });
};

module.exports = { getStudents };
