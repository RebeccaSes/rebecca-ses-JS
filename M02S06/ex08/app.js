const axiosClient = axios.create({
  baseURL: 'http://localhost:8080',
});

const createPersonsUl = (persons) => {
  const root = document.querySelector('.root');
  const personsUl = document.createElement('ul');

  if (persons.length <= 0) {
    const emptyLi = document.createElement('li');
    emptyLi.textContent = 'No persons on the server';

    personsUl.append(emptyLi);

    root.append(personsUl);

    return;
  }

  persons.forEach(({ name, skills }) => {
    // const name = person.name
    // const skills = person.skills
    const personLi = document.createElement('li');
    personLi.innerText = name;

    // one liner
    personLi.append(createSkillsUl(skills));

    personsUl.append(personLi);
  });

  // empty element
  root.innerHTML = '';

  root.append(personsUl);
};

const createSkillsUl = (skills) => {
  const skillsUl = document.createElement('ul');

  // validate data (array length)

  skills.forEach((skill) => {
    const skillLi = document.createElement('li');
    skillLi.innerText = skill;

    skillsUl.append(skillLi);
  });

  return skillsUl;
};

const getPersons = () => {
  // $.get('http://localhost:8080/persons').done((result) => {
  //   createPersonsUl(result.persons);
  // });
  // fetch('http://localhost:8080/persons')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     createPersonsUl(data.persons);
  //   });

  axiosClient.get('/persons').then((response) => {
    createPersonsUl(response.data.persons);
  });
};

const personForm = document.querySelector('.person-form');

personForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // currentTarget -> element with event bound
  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = formData.get('name');
  const skills = formData.getAll('skills');

  const payload = {
    person: {
      name,
      skills,
    },
  };

  // $.post('http://localhost:8080/persons', payload).done((result) => {
  //   if (result.success) {
  //     getPersons();
  //   }
  // });

  // fetch('http://localhost:8080/persons', {
  //   method: 'POST',
  //   body: JSON.stringify(payload),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     if (data.success) {
  //       getPersons();
  //     }
  //   });

  axiosClient.post('/persons', payload).then((response) => {
    if (response.data.success) {
      getPersons();
    }
  });
});

/**
 *  payload = {
 *   person : {
 *    name: ''
 *     skills: []
 *   }
 * }
 */

getPersons();
