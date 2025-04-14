import React, {useState} from "react";
import { useForm } from "react-hook-form";
import '../index.css';
import MyHeader from "../components/MyHeader";


function MyForm() {

const { register, handleSubmit } = useForm();


   
    
  
return (
    
    <>
    
    <form className="w-[60vw] ml-auto mr-[5vw] bg-white p-6 shadow-md rounded-b-lg">
    <div className="">
    <h2 className="text-left font-bold mb-4">Please fill in the form to create a new tender</h2>
    <p className="text-left font-bold mb-4">Required field *</p>
    <div className="grid grid-cols-2 gap-2">

    <div className="mb-4">
    <label className="block text-left text-gray-700 font-bold mb-2">Tender Number *</label>
    <div className="flex justify-between items-center text-red-600">
    <input type="text" name="firstName" className="`shadow appearance-none border ${errors.tenderNumber ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}" {...register('Number')} />
    <i className="fa ml-3">&#xf059;</i>
    </div>
    </div>

    <div className="mb-4">
    <label className="block text-left text-gray-700 font-bold mb-2">Tender Title *</label>
    <div className="flex justify-between items-center text-red-600">
    <input type="text" name="firstName" className="`shadow appearance-none border ${errors.tenderNumber ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}" {...register('Title')} />  
    <i className="fa ml-3">&#xf059;</i>
    </div>
    </div>

    <div className="mb-4">
    <label className="block text-left text-gray-700 font-bold mb-2">Tender Type</label>
    <div className="flex justify-between items-center text-red-600">
    <input type="text" name="type" className="`shadow appearance-none border ${errors.tenderNumber ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}"{...register('Type')} />
    <i className="fa ml-3">&#xf059;</i>
    </div>
    </div>

    <div className="mb-4">
    <label className="block text-left text-gray-700 font-bold mb-2">Site Location</label>
    <div className="flex justify-between items-center text-red-600">
    <input type="text" name="firstName" className="`shadow appearance-none border ${errors.tenderNumber ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}"{...register('Location')} />
    <i className="fa ml-3">&#xf059;</i>
    </div>
    </div>
   

    
    <div className="mb-4">
    <label className="block text-left text-gray-700 font-bold mb-2">Department</label>
    <div className="flex justify-between items-center text-red-600">
    <input type="text" name="firstName" className="`shadow appearance-none border ${errors.tenderNumber ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}"{...register('Department')} />
    <i className="fa ml-3">&#xf059;</i>
    </div>
    </div>

    <div className="mb-4">
    <label className="block text-left text-gray-700 font-bold mb-2">Tender Owner</label>
    <div className="flex justify-between items-center text-red-600">
    <input type="text" name="firstName" className="`shadow appearance-none border ${errors.tenderNumber ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}" {...register('Owner')} />
    <i className="fa ml-3">&#xf059;</i>
    </div>
    </div>

    <div className="mb-4">
    <label className="block text-left text-gray-700 font-bold mb-2">Tender Category</label>
    <div className="flex justify-between items-center text-red-600">
    <input type="text" name="firstName"  className="`shadow appearance-none border ${errors.tenderNumber ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}" {...register('Category')} />
    <i className="fa ml-3">&#xf059;</i>
    </div>
    </div>

    <div className="mb-4">
    <label className="block text-left text-gray-700 font-bold mb-2">Form of contact</label>
    <div className="flex justify-between items-center text-red-600">
    <input type="text" name="firstName" className="`shadow appearance-none border ${errors.tenderNumber ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}" {...register('Contact')} />
    <i className="fa ml-3">&#xf059;</i>
    </div>
    </div>
    
    </div>
    
    <div className="w-[58vw] mr-[5vw] bg-gray-100 p-4 rounded-t-lg">
    <div className="flex justify-end">
    <button type="submit" className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 focus:outline-none focus:shadow-outline"><span>Save & Next</span></button>
    </div>
    </div>
    </div>
    </form>
    
    </>

); 
};

export default MyForm;