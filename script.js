const main = document.querySelector("main");

const joke1 = "What did the duck say to the pharmacist? Put this chapstick on my bill." ;
const joke2 = "Why dont pirates take a shower before they walk the plank? They just wash up on shore."
const joke3 = "Once, my father came home and found me in front of a roaring fire. That made my father very mad, as we didnt have a fireplace."

const template = `
   <section>
      <h2>My Jokes</h2>
      <ul> 
      <li>${joke1}</li> 
      <li>${joke2}</li> 
      <li>${joke3}</li>
      </ul>
   </section>
`;

main.innerHTML = template
const p = document.createElement('p');
p.textContent = "That's all folks!";
document.body.appendChild(p);