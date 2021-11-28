import React from 'react';
import {Modal,Button,Message} from 'semantic-ui-react'

class PreviewModal extends React.Component{
    render(){
        const {isModalOpen,handleModalClose,formData}=this.props;
        return(
            <div>
                <Modal
                open={isModalOpen}
                size="mini"
                >
                <Modal.Header>
                <Message
                    success
                    header='Your user registration was successful!!'
                />
                </Modal.Header>
                    <div className="preview">
                        <div className="detail">
                            <div>Name:</div>
                            <div>{formData.name}</div>
                        </div>
                        <div className="detail">
                            <div>Email:</div>
                            <div>{formData.email}</div>
                        </div>
                        <div className="detail">
                            <div>Mobile Number:</div>
                            <div>{formData.number}</div>
                        </div>
                        <div className="detail">
                            <div>Date Selected:</div>
                            <div>{formData.selecteddate}</div>
                        </div>
                        <div className="detail">
                            <div>Total Amount:</div>
                            <div>{formData.totalValue}</div>
                        </div>
                    </div>
                <Modal.Actions>
                    <Button
                    content="Done"
                    onClick={() => handleModalClose()}
                    positive
                    />
                </Modal.Actions>
                </Modal>
            </div>
        );
    }
}
export default PreviewModal;
