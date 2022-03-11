import { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import B2TextField from "../components/B2TextField"
import B2Select from "../components/B2Select"
import B2Button from "../components/B2Button"

export default function Home() {

  useEffect(() => {
    async function fetchData() {
      const baseList = await fetch('/api/numericValues')
      const result = await baseList.json()
      setSelectList(result);
    };

    fetchData();
  }, []);

  const [name, setName] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [selectList, setSelectList] = useState([])

  const handleClick = () => {
    console.log({
      name: name,
      number: selectValue
    })
  }

  return (

    <Grid container spacing={2}>
      <Grid item xs="12">
        <B2TextField
          label="Nome"
          value={name}
          setState={setName}
        />
      </Grid>
      <Grid item xs="12">
        <B2Select
          label="Valor Numerico"
          value={selectValue}
          setState={setSelectValue}
          list={selectList}
        />
      </Grid>
      <Grid item xs="12">
        <B2Button 
          descriprition="Enviar"
          onClick={handleClick}
        />
      </Grid>
    </Grid>
  )
}
