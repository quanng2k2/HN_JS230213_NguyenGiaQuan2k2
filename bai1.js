let listComment = [];
function addComment() {
  let point = document.getElementById("pointComment");
  let valueInput = document.getElementById("commentGet").value;
  let tableRender = {
    button: point,
    input: valueInput,
  };
  listComment.push(tableRender);
  renderComment();
}

function renderComment() {
  let result = `
  <div class="buttonOne">
  <button id="pointComment"></button>
</div>
<div class="twoIcon">
  <button id="iconComment"><i class="fa-solid fa-pen-to-square"></i></button>
  <button id="iconComment"> <i class="fa-solid fa-xmark"></i></button>
</div>
<div class="textTwo">
  <h2></h2>
</div>
    `;
  for (let i = 0; i < listComment.length; i++) {
    result += `
    <div class="buttonOne">
                <button id="pointComment">${i+1}</button>
            </div>
            <div class="twoIcon">
                <button id="iconComment"><i class="fa-solid fa-pen-to-square"></i></button>
                <button id="iconComment"> <i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="textTwo">
                <h2>${listComment[i].input}</h2>
            </div>
        `;
  }
  document.getElementById("tableNone").innerHTML = result;
}
renderComment();
