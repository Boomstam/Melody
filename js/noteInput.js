const measureMargin = 5;
let currentInputValue = 0;

$(document).ready(function() {
  $(".note-input-value").click(function(){
    if(this.tagName === "M-CURRENT-NOTE-INPUT-VALUE") return;
    const note = this.firstElementChild;
    const current = document.getElementsByTagName("m-current-note-input-value")[0];
    $(current).find(":first-child").remove();
    const noteDuplicate = note.cloneNode(true);
    current.appendChild(noteDuplicate);
    currentInputValue = getChildIndex(this);
    console.log(currentInputValue);
  })
});

function onStaffLineClicked(lineElement, lineIndex, elementWidthPercentage){
  console.log("clickety " + lineIndex + "_" + elementWidthPercentage);
  const current = document.getElementsByTagName("m-current-note-input-value")[0];
  const noteDuplicate = $(current).find(":first-child")[0].cloneNode(true);
  console.log(noteDuplicate);
  const percentage = getPercentage(elementWidthPercentage);
  noteDuplicate.style.left = percentage + "%";
  lineElement.appendChild(noteDuplicate);
}

function getPercentage(elementWidthPercentage){
  const currentInputValMod = 100 / Math.pow(2, currentInputValue);
  console.log("input val mod: " + currentInputValMod);
  console.log("current input value: " + currentInputValue + "; power: " + Math.pow(2, currentInputValMod));
  const percentage = Math.round((elementWidthPercentage * 100) / currentInputValMod) * currentInputValMod;
  console.log("percentage: " + percentage);

  return percentage;
}

function getChildIndex(element){
  const parent = element.parentElement;
  const children = parent.children;
  for(let i = 0; i < children.length; i++){
    const child = children[i];
    if(child === element){
      return i;
    }
  }
}
