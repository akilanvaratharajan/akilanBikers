import './App.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
// import { AgGridColumn, AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { useEffect, useRef, useState } from 'react';
import 'ag-grid-enterprise';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import RegistrationSection from './RegistrationSection';
// import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
// import "../node_modules/ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine-mixin.scss";

function App() {
const bookRef=React.createRef();
  //   const rowData = [
//     {make: "Toyota", model: "Celica", price: 35000},
//     {make: "Ford", model: "Mondeo", price: 32000},
//     {make: "Porsche", model: "Boxter", price: 72000}
// ];
// const [rowData,setRowData] = useState([]);
// const gridref = useRef(null);
// const getSlectedRows = (e)=>{
//   const selectedNodes = gridref.current.api.getSelectedNodes();
//   const selectedData = selectedNodes.map( node => node.data );
//   const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
//       alert(`Selected nodes: ${selectedDataStringPresentation}`)  
//   console.log(gridref,'gridref',selectedNodes)
// }
// useEffect(()=>{
//   fetch('https://www.ag-grid.com/example-assets/row-data.json').then((data)=>data.json()).then(rowData=>setRowData(rowData));
// },[]);
const handleBook=()=>{
  bookRef.current.scrollIntoView({ behavior: "smooth"})
}
  return (
    <>
    {/* // <div className="ag-theme-alpine" style={{height: 400, width: 600}}> */}
      {/* <button onClick={getSlectedRows}>Get selected rows</button>
      <AgGridReact
      rowData={rowData}
      rowSelection="multiple"
      ref={gridref}
      groupSelectsChildren={true}
      autoGroupColumnDef={{
        headerName:"header",
        field:"model",
        cellRenderer:"agGroupCellRenderer",
        cellRendererParams:{
          checkbox:true
        }

      }}
      >
        <AgGridColumn field="make" sortable={true} filter={true} checkboxSelection={true} rowGroup={true}/>
        <AgGridColumn field="model" sortable={true} filter={true}/>
        <AgGridColumn field="price" sortable={true} filter={true}/>
      </AGridReact> */}
      <Header/>
      <div className="sections">
      <Section1 handleBook={handleBook}/>
      <Section2/>
      <div ref={bookRef} >
      <RegistrationSection/>
      </div>
      </div>
    </>
    // {/* </div> */}
  );
}

export default App;
