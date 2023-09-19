import React from 'react';
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import {HiCamera} from 'react-icons/hi'


const EditProfile = () => {
    return (
        <div className='flex justify-center'>
            <Card color="transparent" shadow={false}>
                <Typography className='text-9xl' color="blue-gray">
                    <HiCamera/>
                </Typography>
                <Typography color="white" className="mt-1 font-normal">
                    Upload Your Image To Update.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Name" />
                    <Input size="lg" label="Location" />
                    <Input type="Number" size="lg" label="Phone Number" />
                    <Input type="Number" size="lg" label="House No" />
                    </div>
                    
                    <Button className="mt-6" fullWidth>
                        Upload
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default EditProfile;