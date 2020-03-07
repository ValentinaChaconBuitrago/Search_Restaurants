/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
let datos;
let logge;
/*fetch("./listCols")
  .then(res => res.json())
  .then(render)
  .catch(() => {
    const div = document.createElement("div");
    div.className = "alert alert-danger";
    div.textContent = "Error downloading data";
    document.getElementById("target").append(div);
  });
  */

function selectDB() {
  const yourSelect = document.getElementById("selectorDB");
  const db = yourSelect.options[yourSelect.selectedIndex].value;
  console.log("SELECT DBBBBBBBB");
  listCollections(db);
}

const listCollections = bd => {
  fetch("/listCols/" + bd)
    .then(res => res.json())
    .then(res => {
      console.log(res, "LLEGOOO");

      var select = document.getElementById("selectorCol");
      select.innerHTML = "";
      var opt = document.createElement("option");
      opt.value = "-";
      opt.innerHTML = "-";
      select.appendChild(opt);
      for (const col in res) {
        console.log(res[col], "CONT");

        console.log(res[col].name, "NAME");
        var opt = document.createElement("option");
        opt.value = res[col].name;
        opt.innerHTML = res[col].name;
        select.appendChild(opt);
      }
      select.selectedIndex = 0;
    })
    .catch(() => {
      return "error";
    });
};
function selectCOL() {
  console.log("AAAAAA");
  const selectdb = document.getElementById("selectorDB");
  const db = selectdb.options[selectdb.selectedIndex].value;

  const yourSelect = document.getElementById("selectorCol");
  const col = yourSelect.options[yourSelect.selectedIndex].value;
  console.log("EN SELECT COL", col);
  fetch("/getDocuments/" + db + "/" + col)
    .then(res => res.json())
    .then(res => {
      console.log(res, "llego DOcs");

      var list = document.getElementById("listDocuments");
      list.innerHTML = "";
      console.log("KEYS1");
      for (const mol of res) {
        console.log("KEYS2", mol);
        const keys = Object.keys(mol);
        console.log(keys, "KEYS");
        const title = document.createElement("h2");
        title.textContent = "Document:";

        const inner = document.createElement("div");
        inner.className = "property-item";
        inner.append(title);

        for (const val of keys) {
          console.log(val, "CONT");
          const title = document.createElement("h5");
          title.textContent = "" + val + " : " + mol[val];
          inner.append(title);
          console.log(mol[val], "NAME");
        }

        list.append(inner);
      }

      const div = document.getElementById("createDocDiv");
      div.innerHTML = "";
      const inn = document.createElement("div");
      const button = document.createElement("button");
      button.innerHTML = "create a document";
      button.onclick = function() {
        createDoc();
      };
      const title2 = document.createElement("h2");
      title2.textContent = "CREATE:";
      inn.append(title2);
      inn.append(button);
      div.append(inn);
    })
    .catch(() => {
      return "error";
    });
}
function createDoc() {
  alert("A crear");
}
function addDocument(doc) {
  const selectdb = document.getElementById("selectorDB");
  const db = selectdb.options[selectdb.selectedIndex].value;

  const yourSelect = document.getElementById("selectorCol");
  const col = yourSelect.options[yourSelect.selectedIndex].value;

  fetch("./document" + db + "/" + col, {
    method: "POST", // or 'PUT'
    body: doc, // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error));
}

window.onload = function exampleFunction() {
  this.selectDB();
};
