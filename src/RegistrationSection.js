import React from 'react';
import { Formik } from 'formik';
import * as yup from "yup";
import {Grid,Form, Button,Checkbox,Message} from 'semantic-ui-react';
import PreviewModal from './PreviewModal';

class RegistrationSection extends React.Component{
    constructor(){
        super();
        this.state={    
            totalValue:0,
            isCheckboxSelected:false,
            selecteddate:'',
            isModalOpen:false,
        }
         this.initialValues={
             name:'',
             number:'',
             email:'',
         }
         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         this.registerationSchema=yup.object().shape({
             name:yup.string().required("Enter the name"),
             number:yup.number().required("Enter the Mobile Number"),
             email:yup.string().required("Email is Required").matches(re,"Enter a Proper Email"),
            })
         this.options=[
            { key: '1', value: 'ww', text: 'Water Wash' },
            { key: '2', value: 'oc', text: 'Oil Change' },
            { key: '3', value: 'csp', text: 'Changing Spare Parts' },
        ]
        this.totalCount=0;
        this.formdata={};
    }
    handleSubmit=(value)=>{
        const{totalValue,selecteddate}=this.state;
            this.formdata={
                ...value,
                totalValue,
                selecteddate,
            }
            this.setState({isModalOpen:true});
    }

    handleDateChange=(e,data)=>{
        this.setState({selecteddate:e.target.value})
    }
    handleModalClose=()=>{
        this.initialValues={
            name:'',
            number:'',
            email:'',
        }
        this.setState({isModalOpen:false,totalValue:0,selecteddate:''})
    }
    handleService=(e,data)=>{
        const {totalValue} = this.state;
        if(data.checked){
            this.totalCount+=1;
            const total = totalValue + Number(data.value);
            this.setState({totalValue:total,isCheckboxSelected:true})
            if(this.totalCount>=1){
                this.setState({isCheckboxSelected:true})
            }
        }else{
            const total = totalValue - Number(data.value);
            this.setState({totalValue:total})
            this.totalCount=this.totalCount-1;
            if(this.totalCount===0){
                this.setState({isCheckboxSelected:false})
            }

        }
    }   

    render(){
        const {totalValue,isCheckboxSelected,selecteddate,isModalOpen}=this.state;
        return(
            <>
            <div className="formLayer section3 section">
            <div className="header" style={{color:'white'}}>Book an Appointment</div>
            <Formik
                initialValues={this.initialValues}
                validationSchema={this.registerationSchema}
                onSubmit={(values)=>{this.handleSubmit(values)}}
                >{
                   (
                       {
                           errors,
                           values,
                           touched,
                           handleChange,
                           handleBlur,
                           handleSubmit,
                        }
                   ) =>{
                    return(
                <Form onSubmit={handleSubmit}> 
                <Grid>
                    <Grid.Row>
                        <Grid.Column width="16" className="gridCol">
                       <Form.Input
                        error={touched.name&&errors.name}
                        fluid
                        label="Name"
                        placeholder='Name'
                        value={values.name}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                       />
                       <Form.Input
                        error={touched.number&&errors.number}
                        fluid
                        label="Number"
                        name="number"
                        placeholder='Mobile Number'
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                       />
                       <Form.Input
                        error={touched.email&&errors.email}
                        fluid
                        label="Email"
                        placeholder='Email'
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                       />
                        <div>
                            <label style={{fontWeight:'600',paddingBottom:'4px',display:'block'}}>Date</label>
                            <input type="datetime-local" name="date" onChange={this.handleDateChange} value={selecteddate}/>
                        </div>
                        <label style={{fontWeight:'600',paddingBottom:'4px',display:'block',padding:'10px 0px'}}>Service</label>
                       <div style={{padding:"0px 0px 13px 0px",display: 'flex',justifyContent:'space-between'}}>
                       <Checkbox
                        label='Water Wash'
                        name="ww"
                        value="100"
                        onChange={this.handleService}
                        />
                       <Checkbox
                        label='Oil Change'
                        name="oc"
                        value="1000"
                        onChange={this.handleService}
                        />
                       <Checkbox
                        label='Changing Spare Parts' 
                        name="csp"
                        value="10000"
                        onChange={this.handleService}
                        />
                        </div>
                        <div>
                            Total:<span className="total">{totalValue}</span>
                        </div>
                        <Message positive>
                        <p style={{display:'flex',alignItems:'center'}}>
                           <h3>Note : </h3>&nbsp; Mandatory to select atleast one service.
                        </p>
                    </Message>
                    <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}> 
                        <Button  
                        disabled={!isCheckboxSelected}
                        type="submit"
                        onClick={handleSubmit}
                        color="blue"
                        >SUBMIT</Button>
                        </div>
                       </Grid.Column>
                    </Grid.Row>
                    </Grid>
                    </Form>
                   )}
                }

                </Formik>
            </div>
        {
            isModalOpen&&
            <PreviewModal
            formData={this.formdata}
            isModalOpen={isModalOpen}
            handleModalClose={this.handleModalClose}
            />
        }
        </>
        );
    }
}
export default RegistrationSection;
