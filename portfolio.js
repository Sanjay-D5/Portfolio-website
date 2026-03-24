let toggleBtn = document.getElementById('toggle__button');
let toggleIcon = document.getElementById('toggle__icon');
let toggleLabel = document.getElementById('toggle__label');

let savedMode = localStorage.getItem('theme');
if (savedMode === 'dark') {
   document.body.classList.add('dark-mode');
   toggleIcon.textContent = "☾";
   toggleLabel.textContent = "Dark mode";
}

function togglefn(){
   let isDark = document.body.classList.toggle('dark-mode');

  if (isDark){
      toggleIcon.textContent = "☾";
      toggleLabel.textContent = "Dark mode";
      localStorage.setItem('theme', 'dark');
   } else {
     toggleIcon.textContent = "☀";
      toggleLabel.textContent = "Light mode";
      localStorage.setItem('theme', 'light');
   }
}

toggleBtn.addEventListener('click', togglefn);
