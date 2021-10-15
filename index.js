const btnAddTodo = document.getElementById("addTodo");
const mainSectionContainer = document.getElementById("mainSection");
const todoTitle = document.getElementById("todoTitle");

let newTitle = "";

todoTitle.addEventListener("change", (event) => {
  newTitle = event.target.value;
});

btnAddTodo.addEventListener("click", () => {
  mainSectionContainer.innerHTML += `
  <div class="todo-item">
          <div class="title">
            <h3>${newTitle}</h3>

            <div class="actions">
              <button>
                <img src="./icons/akar-icons_check-box.svg" alt="icon check" />
              </button>
              <button>
                <img src="./icons/bi_trash.svg" alt="icon trash" />
              </button>
            </div>
          </div>
          <p>Description</p>
        </div>
  
  
  
  `;
});
