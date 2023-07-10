const post =(oneNames,oneSur,twoNames,twoSur)=>`-----\n Integrante 1:${build(...oneNames, ...oneSur).join(" ")} \n Integrante 2:${build(...twoNames, ...twoSur).join(" ")} \n-----`;

const handleOne = (event) => {
    event.preventDefault();
    oneNames = [form1.elements['firstName1'], form1.elements['secondName1']];
    oneSur = [form1.elements['lastName1'], form1.elements['secondLastName1']];
    console.log(post(oneNames,oneSur,twoNames,twoSur));
  };
  
  const handleTwo = (event) => {
    event.preventDefault();
    twoNames = [form2.elements['firstName2'], form2.elements['secondName2']];
    twoSur = [form2.elements['lastName2'], form2.elements['secondLastName2']];
    console.log(post(oneNames,oneSur,twoNames,twoSur));
  };
  
  const build = (...names) => {
    return names.map((a)=>a.value).filter((a) => a !== "");
  };
  
  const check = (name1, name2, what) => {
    let matchFound = false;
    for (let i of name1) {
      for (let j of name2) {
        if (i.value === j.value) {
          alert(`Coincidence detected in the ${what}: ${i.value}`);
          const color = prompt(`Please enter a color to change it:`);
          if (color) {
            i.style.color = color;
            j.style.color = color;
            i.value=`${i.value} `
            j.value=`${j.value} `
          }
          matchFound = true;
        }
      }
    }
  
    if (!matchFound) {
      alert("No coincidences found.");
    }
  };
  
  const titleElement = document.getElementsByTagName('title')[0].textContent;
  console.log(titleElement);
  
  let oneNames = [];
  let oneSur = [];
  let twoNames = [];
  let twoSur = [];
  
  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');
  form1.addEventListener('submit', handleOne);
  form2.addEventListener('submit', handleTwo);
  
  const checkNames = document.getElementById('checkNames');
  const checkSurnames = document.getElementById('checkSurnames');
  checkNames.addEventListener('click', () => check(oneNames, twoNames, "name"));
  checkSurnames.addEventListener('click', () => check(oneSur, twoSur, "surname"));
  
  console.log(post(oneNames,oneSur,twoNames,twoSur));
  





