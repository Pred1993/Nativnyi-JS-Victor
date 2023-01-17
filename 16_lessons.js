import axios from "axios";

const api = {
  getFile() {
    //return axios.get("http://localhost:8000/file", { responseType: "blob" }).then(res => res.data)
    return axios.get("http://localhost:8000/file").then(res => res.data)
  },

  loadFile(formData) {
    return axios.post("http://localhost:8000/file", formData)
  },
}

function App() {

  const onClickHandler = async(e) => {
    const res = await api.getFile()
    loadWitUrl(res)
    //loadWitBase64(res)
  }

  const onChangeHandler = async(e) => {
    const file = e.currentTarget.files[0]

    const formData = new FormData()

    formData.append("file", file)
    formData.append("fistName", "Alex")

    await api.loadFile(formData)
  }

  return (
    <div className="App">
      <button onClick={onClickHandler}>load file</button>
      <input onChange={onChangeHandler} type="file"/>
    </div>
  );
}

export default App;

const loadWitUrl = (content) => {

  const blob = new Blob([content])

  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")

  a.href = url
  a.download = "hello.txt"
  a.style = "display: none;"

  document.body.appendChild(a)

  a.click()
  a.remove()

  URL.revokeObjectURL(url)
}


const loadWitBase64 = (content) => {
  let reader = new FileReader();

  reader.readAsDataURL(content);

  reader.onload = function() {
    let url = reader.result

    const a = document.createElement("a")

    a.href = url
    a.download = "hello.txt"
    a.style = "display: none;"

    document.body.appendChild(a)

    a.click()
    a.remove()
  };
}