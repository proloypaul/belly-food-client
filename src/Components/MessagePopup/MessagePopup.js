import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Textarea } from '@material-tailwind/react';
import React from 'react';
import navLogo from '../../Images/logo.png'

const MessagePopup = ({openMessagPopup, handleMessageOpen}) => {

    return (
        <div>
            {/* <Button onClick={handleMessageOpen}>Message Dialog</Button> */}
            <Dialog open={openMessagPopup} handler={handleMessageOpen} className='py-5'>
                <div className="flex items-center justify-between px-5">
                    <DialogHeader className='text-2xl font-serif'>Message to belly_food</DialogHeader>
                    <img src={navLogo} alt='Empty!' width="150px" height="50px"/>
                </div>
                <DialogBody className='flex justify-center items-center'>
                    <div className="w-3/5 text-center grid gap-6 font-serif font-medium">
                        <Input label="Enter Your Name" required/>
                        <Textarea label="Message..." rows={8} required/>
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2 font-serif">
                    <Button variant="text" color="pink" onClick={handleMessageOpen}>
                        close
                    </Button>
                    <Button variant="gradient" color="pink" onClick={handleMessageOpen}>
                        send message
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default MessagePopup;