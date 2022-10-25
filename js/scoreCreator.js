const numStaffs = 1;
const linesPerStaff = 5;

$(document).ready(function() {
  document.documentElement.style.setProperty('--linesPerStaff', linesPerStaff);
  
  score("first-score");
});

const score = (scoreID) => {
  console.log("Create score " + scoreID);

  const score = document.createElement("m-score");
  $("body").append(score);

  score.id = scoreID;

  for(let i = 0; i < numStaffs; i++){
    staff(i, score);
  }
};

const staff = (staffIndex, score) => {
  console.log("Create staff " + staffIndex);
  
  const staff = document.createElement("m-staff");
  score.appendChild(staff);

  const id = score.id + "-staff-" + staffIndex;
  staff.id = id;

  for(let i = 0; i < linesPerStaff * 2; i++){
    staffLine(i, staff);
  }
  measureLine(0, staff);
  measureLine(1, staff).style.left = "100%";

  return staff
};

const staffLine = (lineIndex, staff) => {
  const staffLine = document.createElement("m-staff-line");
  staff.appendChild(staffLine);

  const id = staff.id + "-line-" + lineIndex;
  staffLine.id = id;

  const bgColor = lineIndex % 2 === 1 ? "var(--bgColor)" : "black";

  staffLine.style.backgroundColor = bgColor;

  $("#" + id).click(function(e) {
    const rect = this.getBoundingClientRect();
    const elementWidthPercentage = (e.clientX - rect.left) / rect.width;
    onStaffLineClicked(this, lineIndex, elementWidthPercentage);
  });

  return staffLine;
}

// How to do measures and their margins? Note already child of staff line...
const measure = (measureIndex, staff) => {
  const measure = document.createElement("m-measure");
  staff.appendChild(measure);
  const id = "measure-" + measureIndex;
  measure.id = id;
}

const measureLine = (lineIndex, staff) => {
  const measureLine = document.createElement("m-measure-line");
  staff.appendChild(measureLine);

  const id = staff.id + "-measure-line-" + lineIndex
  measureLine.id = id;

  $("#" + id).click(function() {
    console.log( "Handler for measure line " + lineIndex + " called." );
  });

  return measureLine;
}